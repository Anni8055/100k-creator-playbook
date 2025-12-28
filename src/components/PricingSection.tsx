import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Download, RefreshCw, ArrowRight } from "lucide-react";

const includes = [
  "0-100K Followers Ebook (PDF)",
  "50 High-Graphics Reel Templates (Canva)",
  "50 Caption & Hook Templates",
  "30-Day Content Calendar",
  "DM & Collab Pitch Scripts (Bonus)",
  "Instant Lifetime Access",
  "All Future Updates — FREE",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Limited Time Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Get the Complete Bundle
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to go from 0 to 100K followers — at a fraction of the value.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                🔥 Launch Price
              </span>
            </div>

            <div className="card-elevated p-8 sm:p-10 border-2 border-primary/30 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              
              <div className="relative">
                {/* Title */}
                <h3 className="text-2xl font-bold text-center mb-2">
                  0-100K Followers Bundle
                </h3>
                <p className="text-center text-muted-foreground mb-6">
                  The complete system + all templates
                </p>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">₹4,999</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold">
                      80% OFF
                    </span>
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold gradient-text">
                    ₹999
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">One-time payment • Lifetime access</p>
                </div>

                {/* What's included */}
                <div className="space-y-3 mb-8">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full group"
                  onClick={() => window.open('#checkout', '_blank')}
                >
                  Buy Now – Get Instant Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Download className="w-4 h-4" />
                    <span>Instant Download</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    <span>PDF + Canva + Docs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4" />
                    <span>Free Updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/50 border border-border">
              <Shield className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">7-Day "Love It or Refund" Guarantee</div>
                <p className="text-sm text-muted-foreground">
                  Try the full bundle risk-free. Not happy? Get a complete refund.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
