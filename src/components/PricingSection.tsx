import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, AlertTriangle, Flame, Clock, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

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
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background urgency effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-destructive/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header with Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          {/* Warning banner */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/50 text-destructive text-sm font-bold mb-6"
          >
            <Flame className="w-4 h-4" />
            ⚠️ FLASH SALE — Ends Tonight!
            <Flame className="w-4 h-4" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Don't Miss This <span className="text-destructive">Once-In-A-Lifetime</span> Deal
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            After this sale, prices go back up. You'll regret not grabbing this now.
          </p>

          {/* Countdown */}
          <div className="flex justify-center mb-8">
            <CountdownTimer />
          </div>

          {/* Stock warning */}
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-flex items-center gap-2 text-destructive font-semibold"
          >
            <AlertTriangle className="w-5 h-5" />
            Only 17 copies left at this price!
          </motion.div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Product 1: 0-100K Playbook - ₹199 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative h-full">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
              >
                <span className="px-4 py-1.5 rounded-full bg-destructive text-destructive-foreground text-sm font-bold shadow-lg flex items-center gap-1">
                  <Flame className="w-4 h-4" /> MOST POPULAR
                </span>
              </motion.div>

              <div className="card-elevated p-6 sm:p-8 border-2 border-destructive/50 relative overflow-hidden h-full flex flex-col">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-destructive/10 to-transparent pointer-events-none" 
                />
                
                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-center mb-2">
                    0-100K Followers Bundle
                  </h3>
                  <p className="text-center text-muted-foreground text-sm mb-6">
                    Complete growth system + templates
                  </p>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-xl text-muted-foreground line-through">₹4,999</span>
                      <motion.span 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-bold"
                      >
                        96% OFF
                      </motion.span>
                    </div>
                    <motion.div 
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-5xl font-extrabold gradient-text"
                    >
                      ₹199
                    </motion.div>
                    <p className="text-xs text-muted-foreground mt-1">One-time • Lifetime access</p>
                  </div>

                  <div className="space-y-2.5 mb-6 flex-1">
                    {playbook.map((item, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full group relative overflow-hidden"
                      onClick={() => window.open('#checkout', '_blank')}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      <Zap className="w-4 h-4" />
                      Buy Now — ₹199
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>

                  <p className="text-center text-xs text-destructive mt-3 font-medium">
                    ⚡ 12 people bought in last hour
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product 2: Digital Product Bundle - ₹299 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                  💼 Best Value
                </span>
              </div>

              <div className="card-elevated p-6 sm:p-8 border-2 border-primary/30 relative overflow-hidden h-full flex flex-col">
                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-center mb-2">
                    Digital Product Business Bundle
                  </h3>
                  <p className="text-center text-muted-foreground text-sm mb-6">
                    Ready-to-sell products + setup
                  </p>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-xl text-muted-foreground line-through">₹3,999</span>
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-bold">
                        93% OFF
                      </span>
                    </div>
                    <div className="text-5xl font-extrabold gradient-text">₹299</div>
                    <p className="text-xs text-muted-foreground mt-1">One-time • Lifetime access</p>
                  </div>

                  <div className="space-y-2.5 mb-6 flex-1">
                    {digitalBundle.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full group"
                      onClick={() => window.open('#checkout', '_blank')}
                    >
                      Buy Now — ₹299
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>

                  <p className="text-center text-xs text-primary mt-3 font-medium">
                    🔥 8 people viewing this right now
                  </p>
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
            whileHover={{ y: -8, scale: 1.02 }}
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
                      <span className="text-xl text-muted-foreground line-through">₹2,999</span>
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-bold">
                        50% OFF
                      </span>
                    </div>
                    <div className="text-5xl font-extrabold gradient-text">₹1,500</div>
                    <p className="text-xs text-muted-foreground mt-1">Per session • 60 mins</p>
                  </div>

                  <div className="space-y-2.5 mb-6 flex-1">
                    {consultation.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full group border-primary/50 hover:bg-primary/10"
                      onClick={() => window.open('#checkout', '_blank')}
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>

                  <p className="text-center text-xs text-muted-foreground mt-3">
                    Only 3 slots available this week
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Guarantee with urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-500/10 border border-green-500/30">
            <Shield className="w-8 h-8 text-green-500" />
            <div className="text-left">
              <div className="font-semibold text-green-400">7-Day "Love It or Refund" Guarantee</div>
              <p className="text-sm text-muted-foreground">
                Zero risk. Not happy? Get a complete refund. No questions asked.
              </p>
            </div>
          </div>

          {/* Final urgency push */}
          <motion.p
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-6 text-destructive font-semibold"
          >
            ⚠️ This price will NEVER be this low again. Act now or regret later.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
