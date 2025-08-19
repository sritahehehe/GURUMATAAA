import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scene3D } from "@/components/3d/Scene3D";
import { Cat, ArrowLeft } from "lucide-react";

const MeowPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Scene3D variant="meow" />
      
      {/* Floating ribbon background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: -200, 
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360 
            }}
            animate={{ 
              x: window.innerWidth + 200,
              rotate: 360 + Math.random() * 360
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          >
            <div 
              className="w-64 h-8 bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-pink-500/20 rounded-full blur-sm"
              style={{
                transform: `perspective(1000px) rotateX(45deg)`
              }}
            />
          </motion.div>
        ))}
      </div>
      
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
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          {/* Title */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-6xl font-black text-muted-foreground mb-4">
              Mujhe Bhi Pata Nehi
            </h1>
            <div className="flex justify-center">
              <Cat className="w-16 h-16 text-pink-400 animate-bounce" />
            </div>
          </motion.div>

          {/* MEOW Text */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 200 }}
            className="space-y-8"
          >
            {['MEOW', 'MEOW', 'MEOW', 'MEOW'].map((word, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -200 : 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  delay: 1.2 + i * 0.3, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 150
                }}
                className="relative"
              >
                <motion.h2
                  className="text-9xl font-black text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                    filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))'
                  }}
                >
                  {word}
                </motion.h2>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 text-9xl font-black text-pink-500/20 blur-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                >
                  {word}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cat emojis floating around */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-6xl"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  rotate: [0, 360],
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: 2 + Math.random() * 3,
                  ease: "easeInOut"
                }}
              >
                🐱
              </motion.div>
            ))}
          </div>

          {/* Mystery quote */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-20"
          >
            <p className="text-xl text-muted-foreground italic">
              "Some mysteries are meant to stay mysterious..."
            </p>
            <motion.p 
              className="text-lg text-pink-400 mt-4 font-bold"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              MEOW MEOW MEOW! 🐾
            </motion.p>
          </motion.div>

          {/* Question marks floating */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl text-purple-400/40"
                initial={{ y: 0, opacity: 0 }}
                animate={{ 
                  y: [-20, -60, -20], 
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  delay: 3.5 + i * 0.7,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`
                }}
              >
                ❓
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MeowPage;