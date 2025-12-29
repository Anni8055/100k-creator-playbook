import { motion } from "framer-motion";
import { TrendingDown, Eye, HelpCircle, IndianRupee, CheckCircle, Zap, Clock, Palette, AlertTriangle, X } from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    title: "Posting Daily But ZERO Growth",
    description: "You're burning out creating content while others with less effort go viral. Something is seriously wrong.",
  },
  {
    icon: Eye,
    title: "Reels Getting KILLED by Algorithm",
    description: "Spending 3+ hours on Reels that get 200 views. Meanwhile, 15-year-olds are getting millions. Frustrating, right?",
  },
  {
    icon: HelpCircle,
    title: "Confused & Overwhelmed",
    description: "Everyone's giving different advice. You don't know what content to make or how to stand out anymore.",
  },
  {
    icon: IndianRupee,
    title: "Followers BUT No Money",
    description: "Even if you have followers, they're not buying anything. You're popular but BROKE.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "10x More Views GUARANTEED",
    description: "Copy-paste hook formulas that are PROVEN to go viral. No more guessing.",
  },
  {
    icon: CheckCircle,
    title: "Clear 0→100K Roadmap",
    description: "Step-by-step blueprint. Do exactly this. No confusion, no overwhelm.",
  },
  {
    icon: Clock,
    title: "Save 10+ Hours Every Week",
    description: "Pre-made templates = post in minutes, not hours. Work smart, not hard.",
  },
  {
    icon: Palette,
    title: "Look Like a PRO Creator",
    description: "High-end graphics that make even beginners look like established influencers.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const ProblemsBenefits = () => {
  return (
    <section id="problems" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-destructive/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 text-destructive font-bold text-sm uppercase tracking-wider"
          >
            <AlertTriangle className="w-4 h-4" />
            Warning: This Might Hurt
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Why You're <span className="text-destructive">STUCK</span> While Others Explode
          </h2>
          <p className="text-lg text-muted-foreground">
            Be honest with yourself. How many of these problems are killing your growth RIGHT NOW?
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
            <h3 className="text-xl font-bold text-destructive flex items-center gap-2">
              <motion.span 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </motion.span>
              Your Current Reality (Painful Truth)
            </h3>
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="card-elevated p-6 flex gap-4 border-destructive/30 hover:border-destructive/50 transition-all group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl bg-destructive/20 flex items-center justify-center shrink-0 group-hover:bg-destructive/30 transition-colors"
                >
                  <point.icon className="w-7 h-7 text-destructive" />
                </motion.div>
                <div>
                  <h4 className="font-bold mb-1 text-lg">{point.title}</h4>
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
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
              >
                <Zap className="w-5 h-5" />
              </motion.span>
              What Changes With the Playbook
            </h3>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="card-elevated p-6 flex gap-4 border-primary/30 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors"
                >
                  <benefit.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-bold mb-1 text-lg">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.p
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg font-semibold text-destructive"
          >
            ⚠️ Every day you wait is another day your competitors are growing instead of you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsBenefits;
