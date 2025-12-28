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
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Limited Time Launch Offer
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 text-balance">
              Go From{" "}
              <span className="gradient-text">0 to 100K</span>
              {" "}Followers — Step-By-Step Playbook
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Proven system + templates to grow your Instagram faster in Hindi/English. No fluff, just actionable strategies that actually work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("pricing")}
                className="group"
              >
                Get the 0-100K Playbook
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollToSection("bundle")}
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
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background"
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
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Main mockup container */}
              <div className="relative">
                {/* Ebook mockup */}
                <div className="relative z-10 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="bg-background/95 rounded-2xl p-6 space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold gradient-text">0K</span>
                    </div>
                    <h3 className="text-xl font-bold">0-100K Followers Playbook</h3>
                    <p className="text-sm text-muted-foreground">
                      The complete system to grow your Instagram from scratch
                    </p>
                    <div className="flex gap-2 pt-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        PDF Guide
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Templates
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating phone mockup */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-1/4 z-20"
                >
                  <div className="w-32 h-56 bg-foreground rounded-3xl p-1 shadow-xl">
                    <div className="w-full h-full bg-gradient-to-b from-primary/20 to-primary/5 rounded-[20px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-10 h-10 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                          <Play className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-medium">Reels</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating stats card */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-4 bottom-16 z-20"
                >
                  <div className="bg-card border border-border rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Followers</p>
                        <p className="font-bold">+12,847</p>
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
