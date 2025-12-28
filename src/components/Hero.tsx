import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-24 lg:pt-32">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-primary/10 rounded-full blur-3xl" />
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Limited Time Launch Offer
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 text-balance">
              Go From{" "}
              <span className="gradient-text">0 to 100K</span>
              {" "}Followers — Step-By-Step Playbook
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Proven system + templates to grow your Instagram faster in Hindi/English. No fluff, just actionable strategies that actually work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("pricing")}
                className="group w-full sm:w-auto"
              >
                Get the 0-100K Playbook
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
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
                <span className="ml-1">4.9/5 rating</span>
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
              {/* Main mockup container */}
              <div className="relative">
                {/* Ebook mockup */}
                <div className="relative z-10 bg-gradient-to-br from-primary to-primary/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <span className="text-xl sm:text-2xl font-bold gradient-text">0K</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">0-100K Followers Playbook</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      The complete system to grow your Instagram from scratch
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        PDF Guide
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        Templates
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating phone mockup - hidden on very small screens */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 sm:-right-8 top-1/4 z-20 hidden sm:block"
                >
                  <div className="w-24 sm:w-32 h-40 sm:h-56 bg-foreground rounded-2xl sm:rounded-3xl p-1 shadow-xl">
                    <div className="w-full h-full bg-gradient-to-b from-primary/30 to-primary/10 rounded-xl sm:rounded-[20px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 mx-auto rounded-full bg-primary/30 flex items-center justify-center mb-2">
                          <Play className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-background">Reels</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating stats card - adjusted for mobile */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-2 sm:-left-4 bottom-12 sm:bottom-16 z-20"
                >
                  <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Followers</p>
                        <p className="font-bold text-sm sm:text-base">+12,847</p>
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