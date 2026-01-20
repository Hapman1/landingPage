"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  FileText,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Clock,
  Users,
  Lock,
  Gavel,
  BookOpen
} from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
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
              <Scale className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Legal Terms</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="gradient-text">Terms of Service</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Please read these terms carefully before using Hapmasent's investment platform and services.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Last Updated: January 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-cyan-500" />
                <span>Version 2.1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <BookOpen className="h-6 w-6 text-primary" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => scrollToSection("acceptance")}
                  className="text-left p-3 rounded-lg glass border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-primary">1. Acceptance of Terms</div>
                  <div className="text-sm text-muted-foreground">Agreement to use our services</div>
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left p-3 rounded-lg glass border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-cyan-500">2. Description of Services</div>
                  <div className="text-sm text-muted-foreground">What we offer to investors</div>
                </button>
                <button
                  onClick={() => scrollToSection("eligibility")}
                  className="text-left p-3 rounded-lg glass border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-purple-500">3. User Eligibility</div>
                  <div className="text-sm text-muted-foreground">Requirements to use platform</div>
                </button>
                <button
                  onClick={() => scrollToSection("investments")}
                  className="text-left p-3 rounded-lg glass border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-primary">4. Investment Terms</div>
                  <div className="text-sm text-muted-foreground">ROI and return policies</div>
                </button>
                <button
                  onClick={() => scrollToSection("risks")}
                  className="text-left p-3 rounded-lg glass border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-red-500">5. Risk Disclosure</div>
                  <div className="text-sm text-muted-foreground">Investment risks and warnings</div>
                </button>
                <button
                  onClick={() => scrollToSection("prohibited")}
                  className="text-left p-3 rounded-lg glass border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-orange-500">6. Prohibited Activities</div>
                  <div className="text-sm text-muted-foreground">What is not allowed</div>
                </button>
                <button
                  onClick={() => scrollToSection("privacy")}
                  className="text-left p-3 rounded-lg glass border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-cyan-500">7. Privacy & Data</div>
                  <div className="text-sm text-muted-foreground">How we handle your data</div>
                </button>
                <button
                  onClick={() => scrollToSection("termination")}
                  className="text-left p-3 rounded-lg glass border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="font-semibold text-purple-500">8. Account Termination</div>
                  <div className="text-sm text-muted-foreground">End of service conditions</div>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Section 1: Acceptance of Terms */}
            <Card id="acceptance" className="border-2 border-primary/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  By accessing and using Hapmasent's investment platform, mobile application, and related services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
                <p>
                  If you do not agree with any part of these terms, you must not use our services. Your continued use of the platform constitutes acceptance of any updates or modifications to these terms.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold text-primary mb-1">Important Notice</div>
                      <div className="text-sm">These terms form a legally binding agreement between you and Hapmasent Investment Enterprise.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Description of Services */}
            <Card id="services" className="border-2 border-cyan-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-7 w-7 text-cyan-500" />
                  2. Description of Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hapmasent provides an investment platform that connects investors with verified merchant partners across various sectors. Our services include:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Investment Opportunities</div>
                      <div className="text-sm">Dawn Tier (₦25,000) and Dusk Tier (₦50,000) investment options</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Weekly Returns</div>
                      <div className="text-sm">5% weekly ROI for 6-month investment periods</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Capital Return</div>
                      <div className="text-sm">50% capital return bonus at investment maturity</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Mobile Platform</div>
                      <div className="text-sm">Android app with real-time tracking and notifications</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: User Eligibility */}
            <Card id="eligibility" className="border-2 border-purple-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-7 w-7 text-purple-500" />
                  3. User Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>To use Hapmasent's services, you must meet the following requirements:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5" />
                    <span>Be at least 18 years of age or the legal age of majority in your jurisdiction</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5" />
                    <span>Be a legal resident of Nigeria or other supported countries</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5" />
                    <span>Complete our KYC (Know Your Customer) verification process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5" />
                    <span>Provide accurate and truthful information during registration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5" />
                    <span>Have the financial capacity to make the minimum investment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Investment Terms */}
            <Card id="investments" className="border-2 border-primary/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Scale className="h-7 w-7 text-primary" />
                  4. Investment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All investments made through Hapmasent are subject to the following terms and conditions:
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-semibold text-primary mb-2">Investment Tiers</div>
                      <div className="space-y-2 text-sm">
                        <div>• Dawn Tier: ₦25,000 minimum</div>
                        <div>• Dusk Tier: ₦50,000 minimum</div>
                        <div>• Maximum 5 slots per user per tier</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary mb-2">Returns Structure</div>
                      <div className="space-y-2 text-sm">
                        <div>• 5% weekly ROI for 24 weeks</div>
                        <div>• 50% capital return at maturity</div>
                        <div>• Automated weekly payouts</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <strong>Payment Terms:</strong> All investments must be completed within 30 minutes of slot reservation. 
                  Failure to complete payment within this timeframe will result in automatic slot cancellation.
                </p>
                <p>
                  <strong>Withdrawal Policy:</strong> Weekly returns are automatically credited to your account and can be withdrawn at any time. 
                  Capital returns are available after the 6-month investment period.
                </p>
              </CardContent>
            </Card>

            {/* Section 5: Risk Disclosure */}
            <Card id="risks" className="border-2 border-red-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <AlertTriangle className="h-7 w-7 text-red-500" />
                  5. Risk Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-red-700 mb-1">Investment Risk Warning</div>
                      <div className="text-sm text-red-600">All investments carry inherent risks. Past performance does not guarantee future results.</div>
                    </div>
                  </div>
                </div>
                <p>
                  By investing through Hapmasent, you acknowledge and accept the following risks:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <span><strong>Market Risk:</strong> Investment values may fluctuate due to market conditions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <span><strong>Liquidity Risk:</strong> Investments are locked for the specified period</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <span><strong>Operational Risk:</strong> Technical or operational issues may affect returns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <span><strong>Regulatory Risk:</strong> Changes in laws may impact investment operations</span>
                  </div>
                </div>
                <p>
                  <strong>Important:</strong> Only invest funds you can afford to lose. Seek independent financial advice if needed.
                </p>
              </CardContent>
            </Card>

            {/* Section 6: Prohibited Activities */}
            <Card id="prohibited" className="border-2 border-orange-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Gavel className="h-7 w-7 text-orange-500" />
                  6. Prohibited Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>The following activities are strictly prohibited on our platform:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span>Creating multiple accounts to circumvent limits</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span>Providing false or misleading information</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span>Attempting to manipulate the platform</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span>Using automated systems or bots</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span>Money laundering or illegal activities</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span>Sharing account credentials with others</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span>Reverse engineering our software</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span>Violating applicable laws or regulations</span>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Gavel className="h-5 w-5 text-orange-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-orange-700 mb-1">Enforcement</div>
                      <div className="text-sm text-orange-600">Violation of these terms may result in account suspension or termination without notice.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 7: Privacy & Data */}
            <Card id="privacy" className="border-2 border-cyan-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Lock className="h-7 w-7 text-cyan-500" />
                  7. Privacy & Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Your privacy is important to us. We collect, use, and protect your personal information in accordance with our Privacy Policy and applicable data protection laws.
                </p>
                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-cyan-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-cyan-700 mb-1">Data Security</div>
                      <div className="text-sm text-cyan-600">We use bank-grade encryption and security measures to protect your information.</div>
                    </div>
                  </div>
                </div>
                <p>
                  By using our services, you consent to the collection and use of your information as described in our 
                  <Link href="/privacy-policy" className="text-primary hover:underline font-semibold"> Privacy Policy</Link>.
                </p>
              </CardContent>
            </Card>

            {/* Section 8: Account Termination */}
            <Card id="termination" className="border-2 border-purple-500/20 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-7 w-7 text-purple-500" />
                  8. Account Termination
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Either party may terminate this agreement under the following conditions:
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-foreground mb-2">User-Initiated Termination</div>
                    <p>You may close your account at any time, subject to completion of existing investment periods and withdrawal of all funds.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-2">Company-Initiated Termination</div>
                    <p>We may suspend or terminate your account for violation of these terms, suspicious activity, or legal requirements.</p>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-purple-700 mb-1">Fund Protection</div>
                      <div className="text-sm text-purple-600">Upon termination, all outstanding investments will be honored according to their original terms.</div>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions About Our Terms?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our legal team is here to help clarify any questions you may have about these terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
              <FileText className="mr-2 h-5 w-5" />
              Contact Legal Team
            </Button>
            <Link href="/privacy-policy">
              <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white">
                <Lock className="mr-2 h-5 w-5" />
                View Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}