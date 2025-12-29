import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, AlertTriangle } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-destructive/20 border border-destructive/50"
    >
      <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium text-destructive">Offer ends in:</span>
        <div className="flex items-center gap-1 ml-2">
          <div className="bg-destructive text-destructive-foreground px-2 py-1 rounded font-bold text-sm min-w-[32px] text-center">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-destructive font-bold">:</span>
          <div className="bg-destructive text-destructive-foreground px-2 py-1 rounded font-bold text-sm min-w-[32px] text-center">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-destructive font-bold">:</span>
          <div className="bg-destructive text-destructive-foreground px-2 py-1 rounded font-bold text-sm min-w-[32px] text-center">
            {formatNumber(timeLeft.seconds)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
