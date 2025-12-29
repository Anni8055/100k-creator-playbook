import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Flame, Zap } from "lucide-react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const FinalCTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-destructive via-destructive/90 to-primary/80 p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" 
            />
          </div>

          <div className="relative z-10">
            {/* Urgency badge */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm text-sm font-bold mb-6"
            >
              <Flame className="w-4 h-4" />
              LAST CHANCE — Sale Ending Soon!
              <Flame className="w-4 h-4" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Still Thinking? <br className="sm:hidden" />
              <span className="underline decoration-wavy">Your Competitors Aren't.</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-6">
              Every minute you wait, someone else is taking YOUR potential followers. 
              500+ creators already have the unfair advantage. Will you join them?
            </p>

            {/* Countdown */}
            <div className="flex justify-center mb-8">
              <div className="bg-background/20 backdrop-blur-sm rounded-xl p-4">
                <CountdownTimer />
              </div>
            </div>

            {/* Fear list */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Price goes to ₹4,999 after sale</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Only 17 copies left</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Bonuses expire tonight</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="xl"
                onClick={() => scrollToSection("pricing")}
                className="bg-background text-foreground hover:bg-background/90 shadow-xl group font-bold text-lg px-8 relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <Zap className="w-5 h-5" />
                Grab the Playbook — Only ₹199
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <p className="text-sm text-primary-foreground/60 mt-4">
              ₹199 one-time • Instant access • 7-day guarantee
            </p>

            {/* Social proof */}
            <motion.div
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-6 flex items-center justify-center gap-2 text-primary-foreground/80"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">34 people are viewing this page right now</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
