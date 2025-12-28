import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container py-8 sm:py-12">
        <div className="flex flex-col items-center gap-6 text-center sm:text-left sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <img src={logo} alt="Earn With Prerna Digital" className="w-12 h-12 object-contain" />
            <div>
              <span className="font-display font-bold gradient-text">Earn With Prerna Digital</span>
              <p className="text-xs text-muted-foreground">Helping creators grow on Instagram</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#refund" className="hover:text-primary transition-colors">
              Refund Policy
            </a>
          </div>

          {/* Social & Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@earnwithprerna.com"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/earnwithprerna"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Earn With Prerna Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;