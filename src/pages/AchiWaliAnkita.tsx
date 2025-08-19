import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scene3D } from "@/components/3d/Scene3D";
import { Heart, ArrowLeft, Sparkles, Smile } from "lucide-react";

const AchiWaliAnkita = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Scene3D variant="achi" />
      
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
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center mb-6"
            >
              <Heart className="w-16 h-16 text-green-400 mr-4 animate-pulse" />
              <h1 className="text-7xl font-black bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Achi Wali Ankita
              </h1>
              <Heart className="w-16 h-16 text-blue-400 ml-4 animate-pulse" />
            </motion.div>
          </div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="birthday-card max-w-3xl mx-auto mb-12 relative overflow-hidden"
          >
            {/* Floating hearts background */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: -20, opacity: 0.3 }}
                  transition={{
                    delay: 1 + i * 0.3,
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + (i % 3) * 30}%`
                  }}
                >
                  <Heart className="w-6 h-6 text-green-400/30" />
                </motion.div>
              ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 p-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-2xl leading-relaxed text-foreground font-medium"
                style={{ fontFamily: 'system-ui' }}
              >
                "Achi wali Ankita sabka help karti hai, dil se care karti hai aur uska nature hamesha positive rehta hai. Jo bhi uske paas hota hai, woh uski smile aur support se khush ho jata hai. Ankita ek dum best dost hai!"
              </motion.p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Smile className="w-8 h-8 text-blue-400 animate-bounce" />
            </div>
          </motion.div>

          {/* Animated helping hands */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex justify-center items-center space-x-8 mb-12"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="text-6xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  delay: i * 0.2,
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🤝
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground italic">
              "Kindness is a language the deaf can hear and the blind can see."
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              - Just like our Ankita 💚
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AchiWaliAnkita;