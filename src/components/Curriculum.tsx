import { motion } from "framer-motion";
import { Target, TrendingUp, Rocket, Crown } from "lucide-react";

const phases = [
  {
    icon: Target,
    phase: "Phase 1",
    range: "0 → 1K",
    title: "Foundation",
    color: "from-blue-500 to-cyan-500",
    topics: [
      "Niche selection & positioning",
      "Profile optimization secrets",
      "Content pillar strategy",
      "First 100 followers tactics",
      "Building posting consistency",
    ],
  },
  {
    icon: TrendingUp,
    phase: "Phase 2",
    range: "1K → 10K",
    title: "Momentum",
    color: "from-cyan-500 to-teal-500",
    topics: [
      "Hook formulas that stop scroll",
      "Reel trends & timing",
      "Story engagement tricks",
      "Hashtag strategy 2024",
      "Collaboration playbook",
    ],
  },
  {
    icon: Rocket,
    phase: "Phase 3",
    range: "10K → 50K",
    title: "Acceleration",
    color: "from-teal-500 to-emerald-500",
    topics: [
      "Viral content frameworks",
      "Advanced analytics reading",
      "Cross-platform growth",
      "Building your personal brand",
      "First monetization moves",
    ],
  },
  {
    icon: Crown,
    phase: "Phase 4",
    range: "50K → 100K",
    title: "Authority",
    color: "from-emerald-500 to-green-500",
    topics: [
      "Brand deal negotiations",
      "Building multiple income streams",
      "Team & delegation basics",
      "Sustaining growth long-term",
      "Becoming the go-to creator",
    ],
  },
];

const Curriculum = () => {
  return (
    <section className="section-padding bg-secondary/30">
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
            Inside the Playbook
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Your Roadmap to{" "}
            <span className="gradient-text">100K Followers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four strategic phases designed to take you from unknown to unforgettable.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 via-teal-500 to-green-500 rounded-full" />

          <div className="grid lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Phase indicator */}
                <div className="lg:text-center mb-6">
                  <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-primary">{phase.phase}</div>
                  <div className="text-2xl font-bold">{phase.range}</div>
                  <div className="text-muted-foreground">{phase.title}</div>
                </div>

                {/* Topics card */}
                <div className="card-elevated p-5">
                  <ul className="space-y-3">
                    {phase.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color} mt-2 shrink-0`} />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
