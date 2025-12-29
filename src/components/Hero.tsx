import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, AlertTriangle, Zap } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.png";
import phoneReel from "@/assets/phone-reel.png";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32 lg:pt-40">
      {/* Background gradient orbs with enhanced animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/15 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-primary/10 rounded-full blur-3xl" 
        />
        {/* Urgency red glow */}
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/50 text-destructive text-sm font-bold mb-4"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-2 h-2 bg-destructive rounded-full"
              />
              ⚠️ 96% OFF — Today Only!
            </motion.div>

            {/* Countdown Timer */}
            <div className="mb-6">
              <CountdownTimer />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 text-balance">
              <span className="text-destructive">STOP</span> Wasting Time.{" "}
              <span className="gradient-text">Go 0→100K</span>
              {" "}Followers NOW.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
              While you're reading this, your competitors are stealing YOUR audience. Get the exact system 500+ creators used to explode their Instagram.
            </p>

            {/* Fear element */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-6 text-destructive/80 text-sm"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Price goes back to ₹4,999 after this sale ends</span>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection("pricing")}
                  className="group w-full sm:w-auto relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <Zap className="w-5 h-5" />
                  Grab It Now — Only ₹199
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollToSection("bundle")}
                className="w-full sm:w-auto"
              >
                <Play className="w-5 h-5" />
                See What's Inside
              </Button>
            </div>

            {/* Social proof with urgency */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10 text-sm"
            >
              <div className="flex items-center gap-2 text-green-400">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                <span className="font-semibold">23 people bought in last hour</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-background"
                    />
                  ))}
                </div>
                <span>500+ creators joined</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-1 text-muted-foreground">4.9/5 rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Sale badge */}
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 z-30 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg"
              >
                96% OFF!
              </motion.div>

              {/* Main mockup container */}
              <div className="relative">
                {/* Ebook mockup */}
                <motion.div 
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={ebookMockup} 
                    alt="0-100K Followers Playbook Ebook" 
                    className="w-full h-auto max-w-xs sm:max-w-sm mx-auto"
                  />
                </motion.div>

                {/* Floating phone mockup */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 sm:-right-8 top-1/4 z-20 hidden sm:block"
                >
                  <img 
                    src={phoneReel} 
                    alt="Instagram Reel Preview" 
                    className="w-24 sm:w-36 h-auto rounded-2xl shadow-xl"
                  />
                </motion.div>

                {/* Floating stats card - with pulse */}
                <motion.div
                  animate={{ y: [0, 8, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-2 sm:-left-4 bottom-12 sm:bottom-16 z-20"
                >
                  <div className="bg-card border border-primary/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center"
                      >
                        <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </motion.div>
                      <div>
                        <p className="text-xs text-muted-foreground">Followers</p>
                        <p className="font-bold text-sm sm:text-base text-green-400">+12,847</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
