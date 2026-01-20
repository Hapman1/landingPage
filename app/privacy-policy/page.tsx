"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Lock,
  ArrowLeft,
  Eye,
  Database,
  UserCheck,
  Globe,
  Settings,
  AlertCircle,
  Clock,
  FileText,
  BookOpen,
  Smartphone,
  Mail
} from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-primary/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-float animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className={`flex items-center gap-3 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="relative">
                <div className="h-12 w-12 rounded-xl overflow-hidden neon-emerald">
                  <img 
                    src="/logo.png" 
                    alt="Hapmasent Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold gradient-text">Hapmasent</span>
            </Link>

            <Link href="/">
              <Button variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 glass">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-cyan-500/10 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
              <Lock className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Data Protection</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Last Updated: January 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-cyan-500" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Eye className="h-6 w-6 text-primary" />
                Privacy at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg glass border border-primary/20">
                  <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold text-foreground mb-2">Bank-Grade Security</div>
                  <div className="text-sm text-muted-foreground">256-bit SSL encryption protects all your data</div>
                </div>
                <div className="text-center p-4 rounded-lg glass border border-cyan-500/20">
                  <UserCheck className="h-8 w-8 text-cyan-500 mx-auto mb-3" />
                  <div className="font-semibold text-foreground mb-2">Your Control</div>
                  <div className="text-sm text-muted-foreground">Access, update, or delete your data anytime</div>
                </div>
                <div className="text-center p-4 rounded-lg glass border border-purple-500/20">
                  <Shield className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                  <div className="font-semibold text-foreground mb-2">No Data Selling</div>
                  <div className="text-sm text-muted-foreground">We never sell your personal information</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-cyan-500/20 glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <BookOpen className="h-6 w-6 text-cyan-500" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => scrollToSection("collection")}
                  className="text-left p-3 rounded-lg glass border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-primary">1. Information We Collect</div>
                  <div className="text-sm text-muted-foreground">What data we gather and why</div>
                </button>
                <button
                  onClick={() => scrollToSection("usage")}
                  className="text-left p-3 rounded-lg glass border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-cyan-500">2. How We Use Information</div>
                  <div className="text-sm text-muted-foreground">Purpose of data processing</div>
                </button>
                <button
                  onClick={() => scrollToSection("sharing")}
                  className="text-left p-3 rounded-lg glass border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-purple-500">3. Information Sharing</div>
                  <div className="text-sm text-muted-foreground">When and how we share data</div>
                </button>
                <button
                  onClick={() => scrollToSection("security")}
                  className="text-left p-3 rounded-lg glass border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-primary">4. Data Security</div>
                  <div className="text-sm text-muted-foreground">How we protect your information</div>
                </button>
                <button
                  onClick={() => scrollToSection("rights")}
                  className="text-left p-3 rounded-lg glass border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-green-500">5. Your Rights</div>
                  <div className="text-sm text-muted-foreground">Control over your data</div>
                </button>
                <button
                  onClick={() => scrollToSection("cookies")}
                  className="text-left p-3 rounded-lg glass border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-orange-500">6. Cookies & Tracking</div>
                  <div className="text-sm text-muted-foreground">Website tracking technologies</div>
                </button>
                <button
                  onClick={() => scrollToSection("retention")}
                  className="text-left p-3 rounded-lg glass border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-cyan-500">7. Data Retention</div>
                  <div className="text-sm text-muted-foreground">How long we keep your data</div>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left p-3 rounded-lg glass border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-purple-500">8. Contact Us</div>
                  <div className="text-sm text-muted-foreground">Get in touch about privacy</div>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Section 1: Information We Collect */}
            <Card id="collection" className="border-2 border-primary/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Database className="h-7 w-7 text-primary" />
                  1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We collect information to provide you with secure investment services and comply with regulatory requirements.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <div className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <UserCheck className="h-5 w-5" />
                      Personal Information
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>• Full name and date of birth</div>
                      <div>• Email address and phone number</div>
                      <div>• Residential address</div>
                      <div>• Government-issued ID documents</div>
                      <div>• Bank account information</div>
                      <div>• Employment information</div>
                    </div>
                  </div>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                    <div className="font-semibold text-cyan-700 mb-3 flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      Technical Information
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-cyan-600">
                      <div>• Device information and IP address</div>
                      <div>• App usage and interaction data</div>
                      <div>• Location data (with permission)</div>
                      <div>• Browser type and version</div>
                      <div>• Operating system details</div>
                      <div>• Network connection information</div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Financial Information
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-purple-600">
                      <div>• Investment history and preferences</div>
                      <div>• Transaction records</div>
                      <div>• Payment method details</div>
                      <div>• Risk assessment responses</div>
                      <div>• Account balance and returns</div>
                      <div>• Withdrawal requests</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: How We Use Information */}
            <Card id="usage" className="border-2 border-cyan-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Settings className="h-7 w-7 text-cyan-500" />
                  2. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We use your information for legitimate business purposes and regulatory compliance:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-foreground">Account Management</div>
                        <div className="text-sm">Create and maintain your investment account</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-foreground">KYC Verification</div>
                        <div className="text-sm">Verify your identity and comply with regulations</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-foreground">Investment Processing</div>
                        <div className="text-sm">Process investments and calculate returns</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-foreground">Customer Support</div>
                        <div className="text-sm">Provide assistance and resolve issues</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-foreground">Security Monitoring</div>
                        <div className="text-sm">Detect and prevent fraudulent activities</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-foreground">Communication</div>
                        <div className="text-sm">Send important updates and notifications</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-foreground">Platform Improvement</div>
                        <div className="text-sm">Enhance user experience and features</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-foreground">Legal Compliance</div>
                        <div className="text-sm">Meet regulatory and legal requirements</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Information Sharing */}
            <Card id="sharing" className="border-2 border-purple-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Globe className="h-7 w-7 text-purple-500" />
                  3. Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-purple-700 mb-1">Our Commitment</div>
                      <div className="text-sm text-purple-600">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</div>
                    </div>
                  </div>
                </div>
                <p>We may share your information only in these limited circumstances:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground">Service Providers</div>
                      <div className="text-sm">Trusted partners who help us operate our platform (payment processors, KYC providers)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground">Legal Requirements</div>
                      <div className="text-sm">When required by law, court order, or regulatory authorities</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground">Business Transfers</div>
                      <div className="text-sm">In case of merger, acquisition, or sale of business assets</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground">Your Consent</div>
                      <div className="text-sm">When you explicitly authorize us to share specific information</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Data Security */}
            <Card id="security" className="border-2 border-primary/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Lock className="h-7 w-7 text-primary" />
                  4. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We implement industry-leading security measures to protect your information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <div className="font-semibold text-primary mb-3">Technical Safeguards</div>
                    <div className="space-y-2 text-sm">
                      <div>• 256-bit SSL/TLS encryption</div>
                      <div>• Multi-factor authentication</div>
                      <div>• Regular security audits</div>
                      <div>• Secure data centers</div>
                      <div>• Encrypted data storage</div>
                    </div>
                  </div>
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                    <div className="font-semibold text-cyan-700 mb-3">Operational Security</div>
                    <div className="space-y-2 text-sm text-cyan-600">
                      <div>• Employee background checks</div>
                      <div>• Access control systems</div>
                      <div>• Security training programs</div>
                      <div>• Incident response procedures</div>
                      <div>• Regular backup systems</div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-red-700 mb-1">Security Notice</div>
                      <div className="text-sm text-red-600">While we implement strong security measures, no system is 100% secure. Please keep your login credentials confidential.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Your Rights */}
            <Card id="rights" className="border-2 border-green-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <UserCheck className="h-7 w-7 text-green-500" />
                  5. Your Privacy Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>You have the following rights regarding your personal information:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-green-500/20">
                      <Eye className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Access</div>
                        <div className="text-sm">Request a copy of your personal data</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-green-500/20">
                      <Settings className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Correction</div>
                        <div className="text-sm">Update or correct inaccurate information</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-green-500/20">
                      <Database className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Portability</div>
                        <div className="text-sm">Export your data in a readable format</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-green-500/20">
                      <AlertCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Deletion</div>
                        <div className="text-sm">Request deletion of your personal data</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-green-500/20">
                      <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Restriction</div>
                        <div className="text-sm">Limit how we process your information</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg glass border border-green-500/20">
                      <Mail className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Opt-out</div>
                        <div className="text-sm">Unsubscribe from marketing communications</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <UserCheck className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-green-700 mb-1">Exercise Your Rights</div>
                      <div className="text-sm text-green-600">Contact our privacy team to exercise any of these rights. We'll respond within 30 days.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 6: Cookies & Tracking */}
            <Card id="cookies" className="border-2 border-orange-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Globe className="h-7 w-7 text-orange-500" />
                  6. Cookies & Tracking Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We use cookies and similar technologies to enhance your experience:</p>
                <div className="space-y-4">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="font-semibold text-orange-700 mb-3">Types of Cookies We Use</div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-orange-600">
                      <div>• Essential cookies (required for functionality)</div>
                      <div>• Performance cookies (analytics and optimization)</div>
                      <div>• Functional cookies (remember preferences)</div>
                      <div>• Security cookies (fraud prevention)</div>
                    </div>
                  </div>
                  <p>
                    You can control cookies through your browser settings. Note that disabling certain cookies may affect platform functionality.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 7: Data Retention */}
            <Card id="retention" className="border-2 border-cyan-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Clock className="h-7 w-7 text-cyan-500" />
                  7. Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We retain your information for as long as necessary to provide services and comply with legal obligations:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground">Active Accounts</div>
                      <div className="text-sm">Data retained while your account is active and for legitimate business purposes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground">Closed Accounts</div>
                      <div className="text-sm">Financial records retained for 7 years as required by law</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-foreground">Marketing Data</div>
                      <div className="text-sm">Deleted immediately upon unsubscribe request</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 8: Contact Us */}
            <Card id="contact" className="border-2 border-purple-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Mail className="h-7 w-7 text-purple-500" />
                  8. Contact Our Privacy Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>For privacy-related questions or to exercise your rights, contact us:</p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-purple-700 mb-2">Privacy Officer</div>
                      <div className="text-sm text-purple-600 space-y-1">
                        <div>Email: privacy@hapmasent.com</div>
                        <div>Phone: +234 (0) 123 456 7890</div>
                        <div>Response Time: Within 30 days</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-purple-700 mb-2">Mailing Address</div>
                      <div className="text-sm text-purple-600">
                        Hapmasent Investment Enterprise<br />
                        Privacy Department<br />
                        Lagos, Nigeria
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-cyan-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our privacy team is committed to protecting your data and answering your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
              <Mail className="mr-2 h-5 w-5" />
              Contact Privacy Team
            </Button>
            <Link href="/terms-of-service">
              <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white">
                <FileText className="mr-2 h-5 w-5" />
                View Terms of Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}