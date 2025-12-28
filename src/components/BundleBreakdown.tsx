import { motion } from "framer-motion";
import { BookOpen, Film, FileText, Calendar, MessageSquare, Check } from "lucide-react";

const bundleItems = [
  {
    icon: BookOpen,
    title: "0-100K Followers Ebook",
    subtitle: "The Core System",
    color: "primary",
    details: [
      "Complete step-by-step growth strategies",
      "Niche selection & positioning framework",
      "Hook formulas that stop the scroll",
      "Algorithm secrets for 2024",
    ],
  },
  {
    icon: Film,
    title: "50 High-Graphics Reel Templates",
    subtitle: "Canva Editable",
    color: "primary",
    details: [
      "Viral-worthy transitions & effects",
      "Text overlays that grab attention",
      "Trending audio pairings included",
      "Fully customizable in Canva",
    ],
  },
  {
    icon: FileText,
    title: "50 Caption & Hook Templates",
    subtitle: "Google Docs/Notion",
    color: "primary",
    details: [
      "Proven hooks for any niche",
      "Call-to-action templates that convert",
      "Story captions for engagement",
      "Copy-paste ready formats",
    ],
  },
  {
    icon: Calendar,
    title: "30-Day Content Calendar",
    subtitle: "Growth Focused",
    color: "primary",
    details: [
      "Daily posting schedule",
      "Content pillar rotation system",
      "Optimal posting times included",
      "Never run out of ideas again",
    ],
  },
  {
    icon: MessageSquare,
    title: "DM & Collab Pitch Scripts",
    subtitle: "Bonus Material",
    color: "primary",
    details: [
      "Brand collaboration templates",
      "DM scripts for networking",
      "Negotiation frameworks",
      "Follow-up sequences",
    ],
  },
];

const BundleBreakdown = () => {
  return (
    <section id="bundle" className="section-padding">
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
            What's Included
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Everything You Need to Grow to{" "}
            <span className="gradient-text">100K Followers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete bundle designed to take you from zero to viral creator — no experience required.
          </p>
        </motion.div>

        {/* Bundle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-elevated p-6 hover:scale-[1.02] transition-all duration-300 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <span className="text-sm text-primary font-medium">{item.subtitle}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Total Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold">
            <span>Total Bundle Value:</span>
            <span className="line-through text-muted-foreground">₹4,999</span>
            <span className="text-xl">Get it for just ₹999</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BundleBreakdown;
