import { ArrowRight, Code, CreditCard, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Code,
      step: "01",
      title: "Quick Integration",
      description: "Integrate our payment gateway with just a few lines of code using our comprehensive APIs and SDKs.",
      features: ["RESTful APIs", "SDKs for all platforms", "Webhook support", "Sandbox testing"]
    },
    {
      icon: CreditCard,
      step: "02", 
      title: "Accept Payments",
      description: "Start accepting payments from customers worldwide with support for 150+ currencies and payment methods.",
      features: ["Global coverage", "Multiple currencies", "Local payment methods", "Real-time processing"]
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Get Paid",
      description: "Receive automatic payouts to your bank account with detailed transaction reporting and analytics.",
      features: ["Automatic payouts", "Detailed reports", "Real-time analytics", "Fraud protection"]
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get started with PayFlow in three simple steps and start accepting payments in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden lg:flex absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-accent via-primary to-success -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={step.step} className="relative z-10">
              <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-primary-foreground font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="mt-16 animate-fade-in-up">
          <div className="bg-card border border-border rounded-xl p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Integration Example
            </h3>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <code className="text-foreground">
                <span className="text-accent">import</span> {"{PayFlow}"} <span className="text-accent">from</span> <span className="text-success">'@payflow/sdk'</span>;<br/><br/>
                <span className="text-accent">const</span> payflow = <span className="text-accent">new</span> <span className="text-primary">PayFlow</span>(<span className="text-success">'your-api-key'</span>);<br/><br/>
                <span className="text-accent">const</span> payment = <span className="text-accent">await</span> payflow.<span className="text-primary">createPayment</span>({"{"}
                <br/>&nbsp;&nbsp;amount: <span className="text-success">1000</span>,
                <br/>&nbsp;&nbsp;currency: <span className="text-success">'USD'</span>,
                <br/>&nbsp;&nbsp;description: <span className="text-success">'Order #1234'</span>
                <br/>{"}"});
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection