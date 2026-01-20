"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  TrendingUp,
  Shield,
  Clock,
  Users,
  Smartphone,
  HeadphonesIcon,
  CheckCircle2,
  Download,
  Menu,
  X,
  Star,
  MessageCircle,
  Mail,
  Phone,
  Zap,
  Target,
  Globe,
  ArrowRight,
  Sparkles,
  BarChart3,
  Wallet,
  Lock
} from "lucide-react"

export default function HapmasentLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [investmentAmount, setInvestmentAmount] = useState(25000)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Calculator
  const weeklyReturn = investmentAmount * 0.05
  const totalWeeklyReturns = weeklyReturn * 24 // 6 months = 24 weeks
  const capitalReturn = investmentAmount * 0.50
  const totalProfit = totalWeeklyReturns + capitalReturn

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
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
            <div className={`flex items-center gap-3 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
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
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("tiers")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                Investment Tiers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <a 
                href="/hapmasent.apk" 
                download="Hapmasent-Investment-App.apk"
                className="inline-flex"
              >
                <Button className="bg-gradient-to-r from-primary via-cyan-500 to-purple-500 hover:from-primary/80 hover:via-cyan-500/80 hover:to-purple-500/80 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 neon-emerald">
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-all duration-300" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col gap-4 glass rounded-lg mt-4 p-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-foreground text-left hover:text-primary transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("tiers")}
                className="text-sm font-medium text-foreground text-left hover:text-primary transition-colors"
              >
                Investment Tiers
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-medium text-foreground text-left hover:text-primary transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground text-left hover:text-primary transition-colors"
              >
                Contact
              </button>
              <a 
                href="/hapmasent.apk" 
                download="Hapmasent-Investment-App.apk"
                className="inline-flex w-full"
              >
                <Button className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/80 hover:to-cyan-500/80 text-white w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                </Button>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-cyan-500/10 min-h-screen flex items-center">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                  <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">Next-Gen Investment Platform</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">Smart Investment,</span>
                  <br />
                  <span className="text-foreground">Weekly Returns</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Experience the future of investing with <span className="text-primary font-semibold">5% weekly ROI</span> for 6 months. 
                  Join thousands building wealth with our AI-powered platform.
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">5%</div>
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Weekly ROI</div>
                </div>
                <div className="glass rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <Wallet className="h-6 w-6 text-cyan-500 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-500">50%</div>
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Capital Return</div>
                </div>
                <div className="glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-6 w-6 text-purple-500 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-500">6</div>
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Months Period</div>
                </div>
              </div>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="/hapmasent.apk" 
                  download="Hapmasent-Investment-App.apk"
                  className="inline-flex"
                >
                  <Button size="lg" className="bg-gradient-to-r from-primary via-cyan-500 to-purple-500 hover:from-primary/80 hover:via-cyan-500/80 hover:to-purple-500/80 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 neon-emerald group w-full sm:w-auto">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download App
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 glass"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Bank-Grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-500" />
                  <span className="text-sm text-muted-foreground">KYC Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="text-sm text-muted-foreground">50K+ Investors</span>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Image */}
            <div className={`relative lg:h-[600px] flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-primary to-cyan-500 rounded-full blur-xl animate-float opacity-60"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-primary rounded-full blur-xl animate-float animation-delay-2000 opacity-60"></div>
                
                {/* Main Image */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/modern-investment-mobile-app-mockup-showing-dashbo.png"
                    alt="Investment App"
                    className="w-full max-w-md drop-shadow-2xl rounded-3xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -left-8 top-1/4 glass rounded-lg p-3 border border-primary/20 animate-float animation-delay-1000">
                  <div className="text-lg font-bold text-primary">₦2.5M+</div>
                  <div className="text-xs text-muted-foreground">Total Invested</div>
                </div>
                
                <div className="absolute -right-8 top-1/2 glass rounded-lg p-3 border border-cyan-500/20 animate-float animation-delay-3000">
                  <div className="text-lg font-bold text-cyan-500">98.5%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Advanced Features</span> for Modern Investors
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience cutting-edge technology combined with proven investment strategies for maximum returns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group border-2 border-primary/20 hover:border-primary/40 glass hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 neon-emerald">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Military-Grade Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Advanced encryption, multi-factor authentication, and blockchain-verified transactions ensure your investments are fortress-protected.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-cyan-500/20 hover:border-cyan-500/40 glass hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 neon-cyan">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <CardTitle className="text-xl group-hover:text-cyan-500 transition-colors">AI-Powered Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Real-time market analysis with predictive algorithms and personalized insights to maximize your investment potential.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-purple-500/20 hover:border-purple-500/40 glass hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 neon-purple">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-primary rounded-full animate-pulse"></div>
                </div>
                <CardTitle className="text-xl group-hover:text-purple-500 transition-colors">Lightning Fast Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Automated weekly payouts with instant notifications. Your returns are processed faster than traditional banking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-primary/20 hover:border-primary/40 glass hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 neon-emerald">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Connected to verified merchants worldwide with diversified portfolios across multiple high-growth sectors.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-cyan-500/20 hover:border-cyan-500/40 glass hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 neon-cyan">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <CardTitle className="text-xl group-hover:text-cyan-500 transition-colors">Next-Gen Mobile App</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Intuitive interface with biometric security, dark mode, and seamless cross-platform synchronization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-purple-500/20 hover:border-purple-500/40 glass hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 neon-purple">
                    <HeadphonesIcon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-primary rounded-full animate-pulse"></div>
                </div>
                <CardTitle className="text-xl group-hover:text-purple-500 transition-colors">24/7 AI Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Instant AI-powered assistance with human expert backup. Get answers to your questions anytime, anywhere.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Tiers Section */}
      <section id="tiers" className="py-20 bg-gradient-to-br from-background via-primary/5 to-cyan-500/5 relative">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
              <Wallet className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Investment Plans</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">Investment Tier</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Both tiers offer identical exceptional returns. Select based on your investment capacity and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Dawn Tier - Enhanced */}
            <Card className="group relative border-2 border-primary/30 hover:border-primary glass hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-primary to-cyan-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg neon-emerald">
                  <Sparkles className="inline h-3 w-3 mr-1" />
                  POPULAR
                </div>
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center neon-emerald">
                    <img 
                      src="/logo.png" 
                      alt="Hapmasent Logo" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">Dawn Tier</CardTitle>
                    <div className="text-xs md:text-sm text-muted-foreground">Perfect for beginners</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">₦25,000</div>
                  <CardDescription className="text-sm md:text-base text-muted-foreground">Minimum Investment Amount</CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg glass border border-primary/20">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">5% Weekly ROI Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                    <span className="font-medium">50% Capital Return Bonus</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg glass border border-purple-500/20">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="font-medium">6 Months Investment Period</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg glass border border-primary/20">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">50 Exclusive Slots Available</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                    <span className="font-medium">Maximum 5 Slots Per User</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dusk Tier - Enhanced */}
            <Card className="group relative border-2 border-cyan-500/30 hover:border-cyan-500 glass hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center neon-cyan">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-cyan-500 transition-colors">Dusk Tier</CardTitle>
                    <div className="text-xs md:text-sm text-muted-foreground">For serious investors</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-500">₦50,000</div>
                  <CardDescription className="text-sm md:text-base text-muted-foreground">Minimum Investment Amount</CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                    <span className="font-medium">5% Weekly ROI Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg glass border border-purple-500/20">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="font-medium">50% Capital Return Bonus</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg glass border border-primary/20">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">6 Months Investment Period</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg glass border border-cyan-500/20">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                    <span className="font-medium">50 Exclusive Slots Available</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg glass border border-purple-500/20">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="font-medium">Maximum 5 Slots Per User</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced ROI Calculator */}
          <Card className="max-w-4xl mx-auto border-2 border-primary/30 glass hover:border-primary/50 transition-all duration-500 hover:shadow-2xl overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center neon-emerald">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl gradient-text">Smart ROI Calculator</CardTitle>
              </div>
              <CardDescription className="text-base md:text-lg text-muted-foreground">
                Visualize your potential returns with our advanced calculation engine
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8 relative z-10">
              <div className="space-y-4">
                <Label htmlFor="investment" className="text-lg font-semibold flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-primary" />
                  Investment Amount (₦)
                </Label>
                <div className="relative">
                  <Input
                    id="investment"
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    min={25000}
                    step={1000}
                    className="text-xl h-14 pl-12 pr-4 border-2 border-primary/20 focus:border-primary glass"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold">₦</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group/card">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="h-6 w-6 text-primary group-hover/card:animate-pulse" />
                    <div className="text-xs md:text-sm text-muted-foreground font-medium">Weekly Return</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">₦{weeklyReturn.toLocaleString("en-NG")}</div>
                  <div className="text-xs text-muted-foreground mt-1">Every 7 days</div>
                </div>
                
                <div className="glass rounded-xl p-6 border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group/card">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-6 w-6 text-cyan-500 group-hover/card:animate-pulse" />
                    <div className="text-xs md:text-sm text-muted-foreground font-medium">Total Weekly Returns</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-500">₦{totalWeeklyReturns.toLocaleString("en-NG")}</div>
                  <div className="text-xs text-muted-foreground mt-1">Over 24 weeks</div>
                </div>
                
                <div className="glass rounded-xl p-6 border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group/card">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="h-6 w-6 text-purple-500 group-hover/card:animate-pulse" />
                    <div className="text-xs md:text-sm text-muted-foreground font-medium">Capital Return (50%)</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-500">₦{capitalReturn.toLocaleString("en-NG")}</div>
                  <div className="text-xs text-muted-foreground mt-1">At maturity</div>
                </div>
                
                <div className="glass rounded-xl p-6 border-2 border-gradient-to-r from-primary to-cyan-500 hover:shadow-xl transition-all duration-300 group/card neon-emerald">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-6 w-6 text-primary group-hover/card:animate-spin" />
                    <div className="text-xs md:text-sm text-muted-foreground font-medium">Total Profit</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">₦{totalProfit.toLocaleString("en-NG")}</div>
                  <div className="text-xs text-muted-foreground mt-1">Complete return</div>
                </div>
              </div>

              <div className="text-center p-4 glass rounded-lg border border-primary/20">
                <div className="text-lg font-semibold text-foreground mb-2">
                  Investment Tier: <span className="gradient-text">{investmentAmount >= 50000 ? "Dusk Tier" : "Dawn Tier"}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  6-month investment period with guaranteed weekly returns
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-background relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-primary/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How <span className="gradient-text">Hapmasent</span> Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Start earning in four simple steps. Our streamlined process gets you investing in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="relative group">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-cyan-500 opacity-30 z-0"></div>
              
              <div className="relative z-10 text-center group-hover:scale-105 transition-all duration-500">
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary via-cyan-500 to-purple-500 text-white text-3xl font-bold flex items-center justify-center mx-auto neon-emerald group-hover:animate-pulse">
                    1
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce opacity-80"></div>
                </div>
                
                <div className="glass rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Register & Verify</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Create your secure account with biometric authentication and complete instant KYC verification
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 z-0"></div>
              
              <div className="relative z-10 text-center group-hover:scale-105 transition-all duration-500">
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-primary text-white text-3xl font-bold flex items-center justify-center mx-auto neon-cyan group-hover:animate-pulse">
                    2
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-cyan-400 rounded-full animate-bounce animation-delay-1000 opacity-80"></div>
                </div>
                
                <div className="glass rounded-xl p-6 border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Target className="h-6 w-6 text-cyan-500" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Choose Your Tier</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Select Dawn (₦25K) or Dusk (₦50K) tier with AI-powered investment recommendations
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-primary opacity-30 z-0"></div>
              
              <div className="relative z-10 text-center group-hover:scale-105 transition-all duration-500">
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-500 via-primary to-cyan-500 text-white text-3xl font-bold flex items-center justify-center mx-auto neon-purple group-hover:animate-pulse">
                    3
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-primary rounded-full animate-bounce animation-delay-2000 opacity-80"></div>
                </div>
                
                <div className="glass rounded-xl p-6 border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Wallet className="h-6 w-6 text-purple-500" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Secure Payment</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Complete payment within 30 minutes via encrypted bank transfer with instant confirmation
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="relative z-10 text-center group-hover:scale-105 transition-all duration-500">
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary via-cyan-500 to-purple-500 text-white text-3xl font-bold flex items-center justify-center mx-auto neon-emerald group-hover:animate-pulse">
                    4
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce animation-delay-3000 opacity-80"></div>
                </div>
                
                <div className="glass rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Earn Weekly</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Receive automated 5% weekly returns plus 50% capital back with real-time tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Investors Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join thousands of satisfied investors who trust Hapmasent with their financial growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#22C55E] text-[#22C55E]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Hapmasent transformed my financial situation as a student. The weekly returns are consistent and the platform is
                  incredibly easy to use. Now, I never run out of fund!"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/professional-woman-avatar.jpg"
                    alt="Investor"
                    className="h-12 w-12 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Al-Ameen Azeezat</div>
                    <div className="text-sm text-muted-foreground">Yabatech, Lagos, Nigeria</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#22C55E] text-[#22C55E]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "I invested last year at risk and it pay off. Returns are exactly as promised and withdrawal process is smooth.
                  Great customer support too!"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/professional-man-avatar.jpg"
                    alt="Investor"
                    className="h-12 w-12 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Michael Okonkwo</div>
                    <div className="text-sm text-muted-foreground">Abeokuta, Nigeria</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#22C55E] text-[#22C55E]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "The transparency and security measures give me peace of mind. This is the real deal - genuine
                  investment platform!"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/professional-woman-smiling-avatar.jpg"
                    alt="Investor"
                    className="h-12 w-12 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Blessing Adeyemi</div>
                    <div className="text-sm text-muted-foreground">Lagos, Nigeria</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-cyan-500 to-purple-500 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
              `
            }}></div>
          </div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Enhanced Mobile App Showcase */}
            <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center order-2 lg:order-1">
              <div className="relative group">
                {/* Floating Elements */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/20 rounded-full blur-xl animate-float opacity-60"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-float animation-delay-2000 opacity-60"></div>
                
                {/* Main Phone Mockup */}
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/mobile-app-screenshots-showcase-investment-platfor.png"
                    alt="Mobile App"
                    className="w-full max-w-sm drop-shadow-2xl rounded-3xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-3xl"></div>
                </div>

                {/* Floating Feature Cards */}
                <div className="absolute -left-12 top-1/4 glass rounded-xl p-4 border border-white/20 animate-float animation-delay-1000 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-white" />
                    <span className="text-sm font-semibold text-white">Secure</span>
                  </div>
                  <div className="text-xs text-white/80">Bank-grade encryption</div>
                </div>
                
                <div className="absolute -right-12 top-1/2 glass rounded-xl p-4 border border-white/20 animate-float animation-delay-3000 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-white" />
                    <span className="text-sm font-semibold text-white">Fast</span>
                  </div>
                  <div className="text-xs text-white/80">Instant transactions</div>
                </div>

                <div className="absolute -left-8 bottom-1/4 glass rounded-xl p-4 border border-white/20 animate-float animation-delay-4000 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="h-5 w-5 text-white" />
                    <span className="text-sm font-semibold text-white">Android</span>
                  </div>
                  <div className="text-xs text-white/80">APK Available</div>
                </div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-md">
                  <Download className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">Available Now</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Download the <span className="text-white/90">Future</span> of Investment
                </h2>
                
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Experience next-generation investing with our AI-powered mobile app. Track returns, manage portfolios, 
                  and withdraw earnings with cutting-edge technology at your fingertips.
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6 border border-white/20 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl font-bold text-white">50K+</div>
                  </div>
                  <div className="text-xs md:text-sm text-white/80">Active Users</div>
                </div>
                <div className="glass rounded-xl p-6 border border-white/20 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl font-bold text-white">4.9</div>
                  </div>
                  <div className="text-xs md:text-sm text-white/80">App Rating</div>
                </div>
                <div className="glass rounded-xl p-6 border border-white/20 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                  </div>
                  <div className="text-xs md:text-sm text-white/80">Support</div>
                </div>
              </div>

              {/* Enhanced Download Button - Android Only */}
              <div className="flex justify-center pt-6">
                <a 
                  href="/hapmasent.apk" 
                  download="Hapmasent-Investment-App.apk"
                  className="inline-flex"
                >
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group px-8">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download APK for Android
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 pt-6">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-white/80" />
                  <span className="text-sm text-white/80">SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-white/80" />
                  <span className="text-sm text-white/80">Verified APK</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-white/80" />
                  <span className="text-sm text-white/80">Direct Install</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have questions? We're here to help. Reach out to us through any of these channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#22C55E]/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="h-6 w-6 text-[#22C55E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">WhatsApp Support</h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        Get instant responses to your questions
                      </p>
                      <a
                        href="https://wa.me/2348160443665"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#22C55E] hover:text-[#16A34A] font-medium"
                      >
                        +234 816 044 3665
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Email Us</h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">For detailed inquiries and support</p>
                      <a
                        href="mailto:hapasent@gmail.com"
                        className="text-[#3B82F6] hover:text-[#2563EB] font-medium"
                      >
                        hapasent@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#22C55E]/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-[#22C55E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Call Us</h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">Mon-Fri, 9AM - 6PM WAT</p>
                      <a href="tel:+2348160443665" className="text-[#22C55E] hover:text-[#16A34A] font-medium">
                        +234 816 044 3665
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-2 border-[#22C55E]/20">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-base">
                      Full Name
                    </Label>
                    <Input id="name" placeholder="John Doe" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base">
                      Email Address
                    </Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base">
                      Phone Number
                    </Label>
                    <Input id="phone" type="tel" placeholder="+234 xxx xxxx xxx" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base">
                      Message
                    </Label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." rows={4} className="mt-1.5" />
                  </div>
                  <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-lg overflow-hidden">
                  <img 
                    src="/logo.png" 
                    alt="Hapmasent Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-foreground">Hapmasent</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner for secure and profitable investments in Nigeria.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-muted-foreground hover:text-[#22C55E] transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("tiers")}
                    className="text-muted-foreground hover:text-[#22C55E] transition-colors"
                  >
                    Investment Tiers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-muted-foreground hover:text-[#22C55E] transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-muted-foreground hover:text-[#22C55E] transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-muted-foreground hover:text-[#22C55E] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-[#22C55E] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">Regulated by</div>
                    <div className="text-sm">SEC Nigeria</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Merchant Information */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Our Merchants</h3>
              <ul className="space-y-2">
                <li>
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">Poultry Farm</div>
                    <div className="text-sm">Lagos State, Nigeria</div>
                  </div>
                </li>
                <li>
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">Agriculture</div>
                    <div className="text-sm">Multiple Locations</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-muted-foreground">
                  <a
                    href="https://wa.me/2348160443665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#22C55E] transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    +234 816 044 3665
                  </a>
                </li>
                <li className="text-muted-foreground">
                  <a
                    href="mailto:hapasent@gmail.com"
                    className="hover:text-[#22C55E] transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    hapasent@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Hapmasent Investment Enterprise. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
              <a href="/terms-of-service" className="hover:text-[#22C55E] transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="/privacy-policy" className="hover:text-[#22C55E] transition-colors">Privacy Policy</a>
              <span>•</span>
              <span>Investment involves risk. Please invest responsibly.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
