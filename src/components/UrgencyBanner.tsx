import { motion } from "framer-motion";
import { Flame, Users, TrendingUp } from "lucide-react";

const UrgencyBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-destructive via-destructive/90 to-destructive py-2 text-center"
    >
      <div className="container flex items-center justify-center gap-4 text-sm font-medium text-destructive-foreground">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="flex items-center gap-1"
        >
          <Flame className="w-4 h-4" />
          <span>FLASH SALE</span>
        </motion.div>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline flex items-center gap-1">
          <Users className="w-4 h-4" />
          47 people viewing right now
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          Price increases at midnight!
        </span>
      </div>
    </motion.div>
  );
};

export default UrgencyBanner;
