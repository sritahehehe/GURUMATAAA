import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-muted to-background overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-primary rounded-full opacity-60" />
          </div>
        ))}
      </div>

      <div className="text-center space-y-8 z-10">
        {/* Ankita's Image Placeholder */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent p-2"
        >
          <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">A</span>
          </div>
        </motion.div>

        {/* Birthday Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-4"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
            Happy Birthday
          </h1>
          <h2 className="text-8xl font-black text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text animate-bounce-in">
            ANKITA
          </h2>
        </motion.div>

        {/* Floating birthday elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Balloons */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`balloon-${i}`}
              className="absolute"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: -20, opacity: 1 }}
              transition={{
                delay: 1 + i * 0.2,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`
              }}
            >
              <div className={`w-8 h-10 rounded-full ${
                ['bg-primary', 'bg-accent', 'bg-secondary'][i % 3]
              } opacity-80`} />
              <div className="w-px h-12 bg-foreground/30 mx-auto" />
            </motion.div>
          ))}

          {/* Confetti */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`confetti-${i}`}
              className="absolute w-2 h-2 rotate-45"
              initial={{ y: -50, opacity: 1, scale: 0 }}
              animate={{ 
                y: window.innerHeight + 50, 
                opacity: 0, 
                scale: 1,
                rotate: 360 
              }}
              transition={{
                delay: 2 + Math.random() * 2,
                duration: 3 + Math.random() * 2,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--secondary))'][i % 3]
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-80 mx-auto"
        >
          <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Loading birthday magic... {progress}%
          </p>
        </motion.div>

        {/* Cake animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.8, type: "spring" }}
          className="absolute bottom-10 right-10"
        >
          <div className="text-6xl animate-bounce">🎂</div>
        </motion.div>
      </div>
    </div>
  );
};