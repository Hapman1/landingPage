"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  TrendingUp,
  Smartphone,
  Users,
  Clock,
  HeadphonesIcon,
  CheckCircle2,
  Menu,
  X,
  Star,
  Download,
  Mail,
  Phone,
  MessageCircle,
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

      {/* Simple test content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Test Section</h2>
          <p className="text-lg">This is a simplified version to test deployment.</p>
        </div>
      </section>
    </div>
  )
}