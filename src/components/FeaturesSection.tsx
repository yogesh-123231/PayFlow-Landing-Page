import { Shield, Zap, Globe, CreditCard, BarChart3, Lock, Smartphone, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Bank-level encryption and PCI DSS Level 1 compliance to keep your transactions secure.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process payments in under 2.5 seconds with our optimized infrastructure.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Accept payments from 150+ countries with local payment methods.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description: "Support for credit cards, digital wallets, bank transfers, and cryptocurrency.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with real-time transaction monitoring and insights.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Lock,
      title: "Fraud Protection",
      description: "AI-powered fraud detection and prevention to minimize chargebacks.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamless mobile payment experience with responsive design.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: RefreshCw,
      title: "Auto Reconciliation",
      description: "Automatic transaction reconciliation and detailed financial reporting.",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to 
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Accept Payments
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive payment gateway provides all the tools and features 
            you need to grow your business globally.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-muted-foreground mb-6">
            Ready to transform your payment experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection