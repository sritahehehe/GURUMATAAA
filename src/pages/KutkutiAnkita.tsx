import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scene3D } from "@/components/3d/Scene3D";
import { Zap, ArrowLeft, Flame, AlertTriangle } from "lucide-react";

const KutkutiAnkita = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Scene3D variant="kutkuti" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 left-8"
        >
          <Link 
            to="/"
            className="tech-button flex items-center gap-2 text-foreground hover:text-primary-foreground"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="mb-12">
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center mb-6"
            >
              <Zap className="w-16 h-16 text-red-400 mr-4 animate-pulse" />
              <h1 className="text-7xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Kutkuti Ankita
              </h1>
              <Flame className="w-16 h-16 text-orange-400 ml-4 animate-pulse" />
            </motion.div>
          </div>

          {/* Angry Emoji Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <motion.div
              className="text-9xl"
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              😠
            </motion.div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="birthday-card max-w-3xl mx-auto mb-12 relative overflow-hidden"
          >
            {/* Fire effects background */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: -50, opacity: 0.4 }}
                  transition={{
                    delay: 1 + i * 0.2,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeOut"
                  }}
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${70 + (i % 2) * 20}%`
                  }}
                >
                  <Flame className="w-8 h-8 text-red-500/40 animate-pulse" />
                </motion.div>
              ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 p-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-2xl leading-relaxed text-foreground font-medium"
                style={{ fontFamily: 'system-ui' }}
              >
                "Kutkuti Ankita matlab khadus, gussel, ekdum jallad mode on! Choti si baat pe gussa karna aur logo ko dara dena iska favourite hobby hai. Agar coding ka bug aa jaye toh toh bas samajh lo duniya khatam hone wali hai!"
              </motion.p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400 animate-bounce" />
            </div>
            <div className="absolute bottom-4 left-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💥
              </motion.div>
            </div>
          </motion.div>

          {/* Error Messages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="space-y-4 mb-12"
          >
            {[
              "ERROR 404: Patience Not Found",
              "WARNING: Jallad Mode Activated",
              "CRITICAL: Bug Detected, Preparing Nuclear Response"
            ].map((error, i) => (
              <motion.div
                key={i}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.8 + i * 0.3, duration: 0.6 }}
                className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 font-mono text-red-400"
              >
                {error}
              </motion.div>
            ))}
          </motion.div>

          {/* Thunder animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="flex justify-center items-center space-x-4"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="text-6xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  delay: i * 0.4,
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚡
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground italic">
              "Anger is just passion with nowhere to go... except debugging!"
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              - Ankita in full Jallad mode 🔥
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KutkutiAnkita;