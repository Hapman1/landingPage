"use client"

import { useState } from "react"
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
  MapPin,
  Phone
} from "lucide-react"

export default function HapmasentLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [investmentAmount, setInvestmentAmount] = useState(25000)

  // Calculator
  const weeklyReturn = investmentAmount * 0.07
  const totalWeeklyReturns = weeklyReturn * 24 // 6 months = 24 weeks
  const capitalReturn = investmentAmount * 0.25
  const totalProfit = totalWeeklyReturns + capitalReturn

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Hapmasent</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-foreground hover:text-[#22C55E] transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("tiers")}
                className="text-sm font-medium text-foreground hover:text-[#22C55E] transition-colors"
              >
                Investment Tiers
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-medium text-foreground hover:text-[#22C55E] transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground hover:text-[#22C55E] transition-colors"
              >
                Contact
              </button>
              <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white">Download App</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-foreground text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("tiers")}
                className="text-sm font-medium text-foreground text-left"
              >
                Investment Tiers
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-medium text-foreground text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground text-left"
              >
                Contact
              </button>
              <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white w-full">Download App</Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Smart Investment, Weekly Returns
              </h1>
              <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed">
                Invest securely with Hapmasent and earn 7% weekly ROI for 6 months. Join thousands of investors building
                wealth with our trusted platform.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold">7%</div>
                  <div className="text-sm text-white/80">Weekly ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold">25%</div>
                  <div className="text-sm text-white/80">Capital Return</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold">6</div>
                  <div className="text-sm text-white/80">Months Period</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#22C55E] hover:bg-white/90 text-base font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-base font-semibold bg-transparent"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:h-[500px] flex items-center justify-center">
              <img
                src="/modern-investment-mobile-app-mockup-showing-dashbo.jpg"
                alt="Investment App"
                className="w-full max-w-md drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Hapmasent?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience secure, profitable investing with our comprehensive platform designed for your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#22C55E]/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#22C55E]" />
                </div>
                <CardTitle>Secure & Trusted</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Bank-grade security with KYC verification ensures your investments are protected and compliant with
                  all regulations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#3B82F6]" />
                </div>
                <CardTitle>Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Monitor your investments with live updates and detailed analytics. Stay informed about your portfolio
                  performance 24/7.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#22C55E]/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#22C55E]" />
                </div>
                <CardTitle>Weekly Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Enjoy consistent 7% weekly returns for 6 months. Predictable income you can count on for financial
                  planning.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#3B82F6]" />
                </div>
                <CardTitle>Trusted Merchants</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  All our merchants are verified with proven track records. We only partner with reliable businesses for
                  your peace of mind.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#22C55E]/10 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-[#22C55E]" />
                </div>
                <CardTitle>Mobile First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Beautiful, intuitive mobile app experience. Invest and track your returns on the go with our
                  user-friendly interface.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-[#3B82F6]" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Get instant support through WhatsApp and email. Our dedicated team is always ready to assist you with
                  any questions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Tiers Section */}
      <section id="tiers" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Investment Tiers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the tier that best fits your investment goals. Both offer the same exceptional returns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Dawn Tier */}
            <Card className="border-2 border-[#22C55E] relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#22C55E] text-white px-3 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Dawn Tier</CardTitle>
                <div className="text-4xl font-bold text-[#22C55E] mt-2">₦25,000</div>
                <CardDescription className="text-base">Minimum Investment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                    <span>7% Weekly ROI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                    <span>25% Capital Return</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                    <span>6 Months Period</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                    <span>50 Slots Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                    <span>Max 5 Per User</span>
                  </div>
                </div>
                <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white mt-6">Get Started</Button>
              </CardContent>
            </Card>

            {/* Dusk Tier */}
            <Card className="border-2 border-[#3B82F6]">
              <CardHeader>
                <CardTitle className="text-2xl">Dusk Tier</CardTitle>
                <div className="text-4xl font-bold text-[#3B82F6] mt-2">₦50,000</div>
                <CardDescription className="text-base">Minimum Investment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                    <span>7% Weekly ROI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                    <span>25% Capital Return</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                    <span>6 Months Period</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                    <span>50 Slots Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                    <span>Max 5 Per User</span>
                  </div>
                </div>
                <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white mt-6">Get Started</Button>
              </CardContent>
            </Card>
          </div>

          {/* ROI Calculator */}
          <Card className="max-w-2xl mx-auto border-2 border-[#22C55E]/20 bg-gradient-to-br from-[#22C55E]/5 to-[#16A34A]/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">ROI Calculator</CardTitle>
              <CardDescription className="text-center text-base">
                Calculate your potential returns based on your investment amount
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="investment" className="text-base font-semibold mb-2 block">
                  Investment Amount (₦)
                </Label>
                <Input
                  id="investment"
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  min={25000}
                  step={1000}
                  className="text-lg h-12"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Weekly Return</div>
                  <div className="text-2xl font-bold text-[#22C55E]">₦{weeklyReturn.toLocaleString("en-NG")}</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Total Weekly Returns</div>
                  <div className="text-2xl font-bold text-[#22C55E]">₦{totalWeeklyReturns.toLocaleString("en-NG")}</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Capital Return (25%)</div>
                  <div className="text-2xl font-bold text-[#3B82F6]">₦{capitalReturn.toLocaleString("en-NG")}</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Total Profit</div>
                  <div className="text-2xl font-bold text-[#16A34A]">₦{totalProfit.toLocaleString("en-NG")}</div>
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Over 6 months (24 weeks) with {investmentAmount >= 50000 ? "Dusk" : "Dawn"} Tier
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get started in four simple steps and begin earning weekly returns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Register & Verify</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create your account and complete KYC verification for secure access
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Choose Your Tier</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Select between Dawn (₦25K) or Dusk (₦50K) tier based on your budget
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Make Payment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pay within 30 minutes via secure bank transfer to activate your investment
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Earn Weekly</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive 7% weekly returns for 6 months plus 25% capital back
                </p>
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
                  "Hapmasent transformed my financial situation. The weekly returns are consistent and the platform is
                  incredibly easy to use. Highly recommend!"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/professional-woman-avatar.png"
                    alt="Investor"
                    className="h-12 w-12 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">Lagos, Nigeria</div>
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
                  "Been investing for 3 months now. Returns are exactly as promised and withdrawal process is smooth.
                  Great customer support too!"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/professional-man-avatar.png"
                    alt="Investor"
                    className="h-12 w-12 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Michael Okonkwo</div>
                    <div className="text-sm text-muted-foreground">Abuja, Nigeria</div>
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
                    src="/professional-woman-smiling-avatar.png"
                    alt="Investor"
                    className="h-12 w-12 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Blessing Adeyemi</div>
                    <div className="text-sm text-muted-foreground">Port Harcourt, Nigeria</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center order-2 lg:order-1">
              <img
                src="/mobile-app-screenshots-showcase-investment-platfor.jpg"
                alt="Mobile App"
                className="w-full max-w-md drop-shadow-2xl"
                loading="lazy"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Download the Hapmasent App Today</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Start your investment journey with our easy-to-use mobile app. Track your returns, manage your
                portfolio, and withdraw earnings anytime, anywhere.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm text-white/80">Downloads</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">4.8</div>
                  <div className="text-sm text-white/80">App Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-[#22C55E] hover:bg-white/90 flex-1">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 flex-1 bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
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
                        href="https://wa.me/2348168818893"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#22C55E] hover:text-[#16A34A] font-medium"
                      >
                        +234 816 881 8893
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
                        href="mailto:support@hapmasent.com"
                        className="text-[#3B82F6] hover:text-[#2563EB] font-medium"
                      >
                        support@hapmasent.com
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
                      <a href="tel:+2348168818893" className="text-[#22C55E] hover:text-[#16A34A] font-medium">
                        +234 816 881 8893
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
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

            {/* Merchant Information */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Our Merchants</h3>
              <ul className="space-y-2">
                <li>
                  <div className="text-muted-foreground">
                    <div className="font-medium text-foreground">Poultry Farm</div>
                    <div className="text-sm">Oyo State, Nigeria</div>
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
                    href="https://wa.me/2348168818893"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#22C55E] transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    +234 816 881 8893
                  </a>
                </li>
                <li className="text-muted-foreground">
                  <a
                    href="mailto:support@hapmasent.com"
                    className="hover:text-[#22C55E] transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    support@hapmasent.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Hapmasent Investment Enterprise. All rights reserved.</p>
            <p className="text-sm mt-2">
              Investment involves risk. Please invest responsibly and only what you can afford.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
