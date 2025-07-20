import { CreditCard, Github, Twitter, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Security", href: "#security" },
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Press", href: "#" },
        { label: "Partners", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact Us", href: "#contact" },
        { label: "Status Page", href: "#" },
        { label: "Community", href: "#" },
        { label: "Developer Tools", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Compliance", href: "#" },
        { label: "Data Protection", href: "#" }
      ]
    }
  ]

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" }
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <CreditCard className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">PayFlow</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The modern payment gateway for businesses of all sizes. 
              Accept payments globally with our secure, reliable platform.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 PayFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>PCI DSS Level 1 Certified</span>
              <span>•</span>
              <span>ISO 27001 Compliant</span>
              <span>•</span>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-2">
              <span className="text-xs font-bold text-success">PCI</span>
            </div>
            <span className="text-xs text-muted-foreground">Level 1</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
              <span className="text-xs font-bold text-accent">ISO</span>
            </div>
            <span className="text-xs text-muted-foreground">27001</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <span className="text-xs font-bold text-primary">SOC</span>
            </div>
            <span className="text-xs text-muted-foreground">Type II</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-2">
              <span className="text-xs font-bold text-success">GDPR</span>
            </div>
            <span className="text-xs text-muted-foreground">Ready</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer