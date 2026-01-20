'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qchjdsowtzppajcdkuin.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjaGpkc293dHpwcGFqY2RrdWluIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzkwNjczNSwiZXhwIjoyMDgzNDgyNzM1fQ.sHoz4lLT4r0dQQeRY_rKuKT8h_LN91nSfvdfh9DEWO4';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

interface PasswordRequest {
  id: string;
  user_email: string;
  full_name: string | null;
  phone_number: string | null;
  security_question: string | null;
  status: string;
  requested_at: string;
  completed_at: string | null;
  completed_by: string | null;
  user_id: string;
}

interface Stats {
  pending: number;
  completedToday: number;
  total: number;
}

export default function PasswordRecoveryInterface() {
  const [requests, setRequests] = useState<PasswordRequest[]>([]);
  const [stats, setStats] = useState<Stats>({ pending: 0, completedToday: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRequest, setSelectedRequest] = useState<PasswordRequest | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState<string | null>(null);
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: fetchError } = await supabase
        .from('password_recovery_requests')
        .select('*')
        .order('requested_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      const requestsData = data || [];
      setRequests(requestsData);
      
      // Calculate stats
      const pending = requestsData.filter(r => r.status === 'pending').length;
      const today = new Date().toDateString();
      const completedToday = requestsData.filter(r => 
        r.status === 'completed' && 
        r.completed_at &&
        new Date(r.completed_at).toDateString() === today
      ).length;
      
      setStats({
        pending,
        completedToday,
        total: requestsData.length
      });
      
    } catch (err: any) {
      console.error('Error loading requests:', err);
      setError(err.message || 'Failed to load requests');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  const generateSecurePassword = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const resetPassword = async () => {
    if (!selectedRequest) return;
    
    try {
      setResetting(true);
      
      // Generate new password
      const newPassword = generateSecurePassword();
      
      // Update user password using Supabase Admin API
      const { error: updateError } = await supabase.auth.admin.updateUserById(
        selectedRequest.user_id,
        { password: newPassword }
      );

      if (updateError) {
        throw updateError;
      }

      setGeneratedPassword(newPassword);
      
    } catch (err: any) {
      console.error('Error resetting password:', err);
      alert('Error resetting password: ' + err.message);
    } finally {
      setResetting(false);
    }
  };

  const markCompleted = async () => {
    if (!selectedRequest) return;
    
    try {
      const { error: updateError } = await supabase
        .from('password_recovery_requests')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          completed_by: 'Admin',
          notes: 'Password reset completed'
        })
        .eq('id', selectedRequest.id);

      if (updateError) {
        throw updateError;
      }

      setShowModal(false);
      setSelectedRequest(null);
      setGeneratedPassword(null);
      loadRequests();
      alert('✅ Request completed! Don\'t forget to send the password to the user.');
      
    } catch (err: any) {
      console.error('Error marking as completed:', err);
      alert('Error marking as completed: ' + err.message);
    }
  };

  const copyPassword = async () => {
    if (generatedPassword) {
      try {
        await navigator.clipboard.writeText(generatedPassword);
        alert('Password copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy password:', err);
      }
    }
  };

  const testConnection = async () => {
    try {
      const { data, error } = await supabase
        .from('password_recovery_requests')
        .select('count')
        .limit(1);
      
      if (error) {
        alert('❌ Connection Error: ' + error.message);
      } else {
        alert('✅ Connection successful! Database is accessible.');
      }
    } catch (err: any) {
      alert('❌ Connection failed: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-2">🔐 Password Reset Admin</h1>
          <p className="text-gray-600">Manage user password reset requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.pending}</div>
            <div className="text-gray-600 text-sm font-medium">Pending Requests</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.completedToday}</div>
            <div className="text-gray-600 text-sm font-medium">Completed Today</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.total}</div>
            <div className="text-gray-600 text-sm font-medium">Total Requests</div>
          </div>
        </div>

        {/* Main Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Password Reset Requests</h2>
            <div className="flex gap-3">
              <button
                onClick={testConnection}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                🔧 Test Connection
              </button>
              <button
                onClick={loadRequests}
                disabled={loading}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium disabled:opacity-50"
              >
                {loading ? '⏳ Loading...' : '🔄 Refresh'}
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                <strong>Error:</strong> {error}
              </div>
            )}

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                <p className="mt-4 text-gray-600">Loading requests...</p>
              </div>
            ) : requests.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Password Reset Requests</h3>
                <p className="text-gray-600">When users request password resets, they'll appear here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">User</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Requested</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {requests.map((request) => (
                      <tr key={request.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">{request.full_name || 'Unknown'}</div>
                        </td>
                        <td className="px-4 py-4 text-gray-600">{request.user_email}</td>
                        <td className="px-4 py-4 text-gray-600">{request.phone_number || 'N/A'}</td>
                        <td className="px-4 py-4 text-gray-600">{formatDate(request.requested_at)}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            request.status === 'pending' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {request.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          {request.status === 'pending' ? (
                            <button
                              onClick={() => {
                                setSelectedRequest(request);
                                setShowModal(true);
                                setGeneratedPassword(null);
                              }}
                              className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition-colors"
                            >
                              Reset Password
                            </button>
                          ) : (
                            <span className="text-green-600 text-sm font-medium">✓ Completed</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Reset User Password</h3>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="space-y-2 text-sm">
                <div><strong>Name:</strong> {selectedRequest.full_name || 'Unknown'}</div>
                <div><strong>Email:</strong> {selectedRequest.user_email}</div>
                <div><strong>Phone:</strong> {selectedRequest.phone_number || 'N/A'}</div>
                <div><strong>Security Question:</strong> {selectedRequest.security_question || 'N/A'}</div>
                <div><strong>Requested:</strong> {formatDate(selectedRequest.requested_at)}</div>
              </div>
            </div>

            {generatedPassword && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-6 text-center">
                <div className="font-mono text-lg font-bold text-green-800 mb-2">{generatedPassword}</div>
                <button
                  onClick={copyPassword}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  📋 Copy Password
                </button>
                <p className="text-sm text-gray-600 mt-2">
                  Send this password to the user via email or WhatsApp
                </p>
              </div>
            )}

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedRequest(null);
                  setGeneratedPassword(null);
                }}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              
              {!generatedPassword ? (
                <button
                  onClick={resetPassword}
                  disabled={resetting}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  {resetting ? 'Generating...' : 'Generate Password'}
                </button>
              ) : (
                <button
                  onClick={markCompleted}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Mark Completed
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}