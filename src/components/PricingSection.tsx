import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Download, RefreshCw, ArrowRight } from "lucide-react";

const playbook = [
  "0-100K Followers Ebook (PDF)",
  "50 High-Graphics Reel Templates (Canva)",
  "50 Caption & Hook Templates",
  "30-Day Content Calendar",
  "DM & Collab Pitch Scripts (Bonus)",
  "Instant Lifetime Access",
  "All Future Updates — FREE",
];

const digitalBundle = [
  "Ready-to-Sell Digital Product Templates",
  "Complete Business Setup Guide",
  "Pricing & Packaging Strategies",
  "Sales Page Templates (Canva)",
  "Payment Gateway Setup Guide",
  "Marketing Swipe Files",
  "Lifetime Access + Updates",
];

const consultation = [
  "1-on-1 Video Call (60 mins)",
  "Personalized Growth Strategy",
  "Content Plan Review",
  "Profile Optimization Tips",
  "Business Model Guidance",
  "30-Day Action Plan",
  "WhatsApp Support (7 Days)",
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

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Product 1: 0-100K Playbook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                  🔥 Bestseller
                </span>
              </div>

              <div className="card-elevated p-6 sm:p-8 border-2 border-primary/30 relative overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                
                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-center mb-2">
                    0-100K Followers Bundle
                  </h3>
                  <p className="text-center text-muted-foreground text-sm mb-6">
                    Complete growth system + templates
                  </p>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-lg text-muted-foreground line-through">₹4,999</span>
                      <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold">
                        80% OFF
                      </span>
                    </div>
                    <div className="text-4xl font-extrabold gradient-text">₹999</div>
                    <p className="text-xs text-muted-foreground mt-1">One-time • Lifetime access</p>
                  </div>

                  <div className="space-y-2.5 mb-6 flex-1">
                    {playbook.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full group"
                    onClick={() => window.open('#checkout', '_blank')}
                  >
                    Buy Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product 2: Digital Product Bundle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="px-4 py-1.5 rounded-full bg-secondary text-foreground text-sm font-semibold shadow-lg border border-border">
                  💼 Business
                </span>
              </div>

              <div className="card-elevated p-6 sm:p-8 border border-border relative overflow-hidden h-full flex flex-col">
                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-center mb-2">
                    Digital Product Business Bundle
                  </h3>
                  <p className="text-center text-muted-foreground text-sm mb-6">
                    Ready-to-sell products + setup
                  </p>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-lg text-muted-foreground line-through">₹3,999</span>
                      <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold">
                        63% OFF
                      </span>
                    </div>
                    <div className="text-4xl font-extrabold gradient-text">₹1,499</div>
                    <p className="text-xs text-muted-foreground mt-1">One-time • Lifetime access</p>
                  </div>

                  <div className="space-y-2.5 mb-6 flex-1">
                    {digitalBundle.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full group border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open('#checkout', '_blank')}
                  >
                    Buy Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product 3: 1:1 Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-lg">
                  ⭐ Premium
                </span>
              </div>

              <div className="card-elevated p-6 sm:p-8 border border-border relative overflow-hidden h-full flex flex-col">
                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-center mb-2">
                    1:1 Consultation Call
                  </h3>
                  <p className="text-center text-muted-foreground text-sm mb-6">
                    Personalized growth & business setup
                  </p>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-lg text-muted-foreground line-through">₹2,999</span>
                      <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs font-semibold">
                        50% OFF
                      </span>
                    </div>
                    <div className="text-4xl font-extrabold gradient-text">₹1,500</div>
                    <p className="text-xs text-muted-foreground mt-1">Per session • 60 mins</p>
                  </div>

                  <div className="space-y-2.5 mb-6 flex-1">
                    {consultation.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full group border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open('#checkout', '_blank')}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/50 border border-border">
            <Shield className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="font-semibold">7-Day "Love It or Refund" Guarantee</div>
              <p className="text-sm text-muted-foreground">
                Try risk-free. Not happy? Get a complete refund.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
