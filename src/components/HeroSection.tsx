import { ArrowRight, Play, Shield, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-payment.jpg"

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border mb-6">
              <Shield className="h-4 w-4 text-success" />
              <span className="text-sm font-medium text-muted-foreground">Trusted by 10,000+ businesses</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Accept Payments
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Powerful, secure, and scalable payment processing for modern businesses. 
              Accept payments globally with our advanced payment gateway platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">2.5s</div>
                <div className="text-sm text-muted-foreground">Avg. Response</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-glow-pulse">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-4 w-4" />
                <span className="text-sm">Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span className="text-sm">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Global Coverage</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Payment Gateway Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/10"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card backdrop-blur-sm border border-border rounded-lg p-4 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-success-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Secure</div>
                  <div className="text-xs text-muted-foreground">PCI DSS Level 1</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-card backdrop-blur-sm border border-border rounded-lg p-4 shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Fast</div>
                  <div className="text-xs text-muted-foreground">2.5s response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection