import { Shield, Lock, Eye, Server, Key, FileCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "PCI DSS Level 1",
      description: "Highest level of payment security compliance, certified by independent auditors.",
      details: ["Annual compliance audits", "Secure cardholder data", "Regular vulnerability scans"]
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Military-grade encryption protects all data in transit and at rest.",
      details: ["TLS 1.3 encryption", "AES-256 data encryption", "Zero-knowledge architecture"]
    },
    {
      icon: Eye,
      title: "Fraud Detection",
      description: "AI-powered fraud prevention identifies and blocks suspicious transactions.",
      details: ["Machine learning algorithms", "Real-time risk scoring", "Behavioral analysis"]
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Multi-region, redundant infrastructure with 99.9% uptime guarantee.",
      details: ["AWS/Azure hosting", "DDoS protection", "24/7 monitoring"]
    },
    {
      icon: Key,
      title: "Access Control",
      description: "Multi-factor authentication and role-based permissions for your team.",
      details: ["2FA/MFA support", "Role-based access", "API key management"]
    },
    {
      icon: FileCheck,
      title: "Compliance Ready",
      description: "Meet regulatory requirements with built-in compliance tools.",
      details: ["GDPR compliant", "SOX compliance", "Audit trail logs"]
    }
  ]

  const certifications = [
    { name: "PCI DSS Level 1", description: "Payment Card Industry Compliance" },
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Security & Availability Controls" },
    { name: "GDPR", description: "General Data Protection Regulation" }
  ]

  return (
    <section id="security" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bank-Level
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Security
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your security is our top priority. We use the most advanced security measures 
            to protect your business and your customers' data.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-1">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 bg-success rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Industry Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Promise */}
        <div className="mt-16 bg-card border border-border rounded-xl p-8 text-center shadow-card animate-fade-in-up">
          <Shield className="h-16 w-16 text-success mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Our Security Promise
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're committed to maintaining the highest security standards. Our security team 
            works around the clock to protect your data and ensure compliance with all relevant 
            regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-all duration-300">
              View Security Documentation
            </button>
            <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300">
              Contact Security Team
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-foreground">0</div>
            <div className="text-sm text-muted-foreground">Security Breaches</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold text-foreground">99.99%</div>
            <div className="text-sm text-muted-foreground">Fraud Prevention</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">Security Monitoring</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-bold text-foreground">100%</div>
            <div className="text-sm text-muted-foreground">PCI Compliant</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecuritySection