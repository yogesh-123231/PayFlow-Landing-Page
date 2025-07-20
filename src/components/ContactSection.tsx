import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      value: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      value: "support@payflow.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      value: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit us at our headquarters",
      value: "San Francisco, CA",
      action: "Get Directions"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your payment processing? Our team is here to help you 
            get started and answer any questions you have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Send us a message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input placeholder="Your Company" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your payment processing needs..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6 animate-fade-in-right">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {method.description}
                      </p>
                      <p className="font-medium text-foreground mb-3">
                        {method.value}
                      </p>
                      <Button variant="outline" size="sm">
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-primary rounded-xl p-8 text-center shadow-elegant animate-fade-in-up">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses already using PayFlow to process payments 
            securely and efficiently. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white/20 text-primary-foreground hover:bg-white/30">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-primary-foreground hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-12 text-center animate-fade-in-up">
          <p className="text-muted-foreground mb-4">
            Have questions? Check out our frequently asked questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-accent hover:text-accent/80 text-sm font-medium">
              How does pricing work?
            </a>
            <a href="#" className="text-accent hover:text-accent/80 text-sm font-medium">
              Is it secure?
            </a>
            <a href="#" className="text-accent hover:text-accent/80 text-sm font-medium">
              What payment methods are supported?
            </a>
            <a href="#" className="text-accent hover:text-accent/80 text-sm font-medium">
              How long is integration?
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection