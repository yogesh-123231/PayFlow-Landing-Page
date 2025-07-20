import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      price: "2.9%",
      period: "+ 30¢ per transaction",
      features: [
        "Accept all major credit cards",
        "Online payment processing",
        "Basic fraud protection",
        "Email support",
        "Dashboard analytics",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "For growing businesses with higher volume",
      price: "2.4%",
      period: "+ 25¢ per transaction",
      features: [
        "Everything in Starter",
        "Advanced fraud protection",
        "Priority phone support",
        "Custom checkout forms",
        "Subscription billing",
        "Advanced analytics",
        "Multiple payment methods",
        "Webhook support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large businesses with custom needs",
      price: "Custom",
      period: "Volume-based pricing",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integration support",
        "SLA guarantees",
        "Advanced reporting",
        "White-label solutions",
        "On-premise deployment",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your business. No hidden fees, no setup costs, 
            and no monthly minimums.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 animate-fade-in ${
                plan.popular ? 'ring-2 ring-accent shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-glow' 
                      : 'variant-outline'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                  {plan.popular && <Zap className="ml-2 h-4 w-4" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-card border border-border rounded-xl p-8 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need something different?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer custom solutions for enterprises with unique requirements. 
              Contact our sales team to discuss your specific needs.
            </p>
            <Button variant="outline" size="lg">
              Contact Sales Team
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-2xl font-bold text-foreground">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-2xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-2xl font-bold text-foreground">PCI DSS</div>
            <div className="text-sm text-muted-foreground">Level 1</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-2xl font-bold text-foreground">ISO 27001</div>
            <div className="text-sm text-muted-foreground">Certified</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection