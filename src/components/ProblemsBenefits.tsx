import { motion } from "framer-motion";
import { TrendingDown, Eye, HelpCircle, IndianRupee, CheckCircle, Zap, Clock, Palette } from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    title: "Posting Daily But No Growth",
    description: "You're consistent but your follower count stays flat. Something's broken.",
  },
  {
    icon: Eye,
    title: "Low Reach on Reels",
    description: "Spending hours on Reels that get 200 views while others go viral.",
  },
  {
    icon: HelpCircle,
    title: "Confused About Niche & Hooks",
    description: "Don't know what content to make or how to grab attention in 3 seconds.",
  },
  {
    icon: IndianRupee,
    title: "No Idea How to Monetize",
    description: "Followers aren't turning into paying customers or brand deals.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "10x More Views",
    description: "Proven hook formulas and content strategies that actually get reach.",
  },
  {
    icon: CheckCircle,
    title: "Clear Growth Plan",
    description: "Step-by-step roadmap from 0 to 100K — no more guessing.",
  },
  {
    icon: Clock,
    title: "Save 10+ Hours/Week",
    description: "Ready-to-use templates so you stop wasting time on design.",
  },
  {
    icon: Palette,
    title: "Pro-Level Content",
    description: "High-graphics templates that make you look like a big creator.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProblemsBenefits = () => {
  return (
    <section id="problems" className="section-padding bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Sound Familiar?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Stuck at the Same Follower Count?
          </h2>
          <p className="text-lg text-muted-foreground">
            Most creators struggle with these exact problems. Here's how the Playbook fixes each one.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Pain Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-destructive/80 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-sm">
                ✕
              </span>
              The Frustrating Reality
            </h3>
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-elevated p-6 flex gap-4 hover:border-destructive/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                ✓
              </span>
              What Changes With the Playbook
            </h3>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-elevated p-6 flex gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsBenefits;
