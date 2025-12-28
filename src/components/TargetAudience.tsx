import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Building2 } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Creators Starting From Scratch",
    outcomes: [
      "Build a strong niche presence",
      "Get your first 1K followers fast",
      "Learn what content actually works",
      "Stop wasting time on wrong strategies",
    ],
  },
  {
    icon: Briefcase,
    title: "Small Business Owners",
    outcomes: [
      "Turn followers into paying customers",
      "Build brand awareness locally",
      "Create content that sells",
      "Stand out from competitors",
    ],
  },
  {
    icon: GraduationCap,
    title: "Coaches & Educators",
    outcomes: [
      "Position yourself as an authority",
      "Attract high-quality leads",
      "Build a community around your expertise",
      "Launch courses with built-in audience",
    ],
  },
  {
    icon: Building2,
    title: "Agency Owners & Freelancers",
    outcomes: [
      "Use templates for client accounts",
      "Scale content production",
      "Deliver better results faster",
      "Increase client retention",
    ],
  },
];

const TargetAudience = () => {
  return (
    <section className="section-padding">
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
            Is This For You?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Built for Ambitious Creators
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're just starting or scaling — the Playbook adapts to your goals.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 text-center hover:border-primary/30 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-4">{audience.title}</h3>
              <ul className="space-y-2 text-left">
                {audience.outcomes.map((outcome, outcomeIndex) => (
                  <li key={outcomeIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">→</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
