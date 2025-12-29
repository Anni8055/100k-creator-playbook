import { motion } from "framer-motion";
import { Star, TrendingUp, Eye, Users } from "lucide-react";
import analyticsFollowers from "@/assets/analytics-followers.png";
import analyticsReels from "@/assets/analytics-reels.png";
import analyticsEngagement from "@/assets/analytics-engagement.png";

const stats = [
  { icon: Users, value: "50K+", label: "Followers Gained" },
  { icon: Eye, value: "2M+", label: "Reel Views" },
  { icon: TrendingUp, value: "300%", label: "Engagement Boost" },
];

const testimonials = [
  {
    name: "Ananya Singh",
    handle: "@ananya.creates",
    avatar: "A",
    quote: "Went from 2K to 15K in just 2 months using the Playbook strategies. The Reel templates are gold!",
    result: "+13K followers",
  },
  {
    name: "Rohit Sharma",
    handle: "@rohit.grows",
    avatar: "R",
    quote: "Finally understood how the algorithm works. My Reels now get 10x more views than before.",
    result: "10x reach",
  },
  {
    name: "Priya Kapoor",
    handle: "@priyakapoor_",
    avatar: "P",
    quote: "The content calendar alone saved me 5 hours every week. No more stressing about what to post!",
    result: "5hrs saved/week",
  },
  {
    name: "Vikram Mehta",
    handle: "@vikram.digital",
    avatar: "V",
    quote: "Best investment for my creator journey. The DM scripts helped me land my first brand deal!",
    result: "₹25K brand deal",
  },
  {
    name: "Neha Gupta",
    handle: "@neha.lifestyle",
    avatar: "N",
    quote: "I was stuck at 500 followers for months. Now I'm at 8K and growing consistently every day.",
    result: "+7.5K followers",
  },
];

const ProofSection = () => {
  return (
    <section id="proof" className="section-padding bg-secondary/30">
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
            Proof It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Real Results from Real Creators
          </h2>
          <p className="text-lg text-muted-foreground">
            See what creators like you have achieved using the 0-100K Playbook.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card-elevated overflow-hidden rounded-xl">
              <img 
                src={analyticsFollowers} 
                alt="Follower Growth Analytics" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="card-elevated overflow-hidden rounded-xl">
              <img 
                src={analyticsReels} 
                alt="Reel Views Analytics" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="card-elevated overflow-hidden rounded-xl">
              <img 
                src={analyticsEngagement} 
                alt="Engagement Insights" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-elevated p-6 ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-4 leading-relaxed">"{testimonial.quote}"</p>
              
              {/* Result badge */}
              <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {testimonial.result}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.handle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
