import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scene3D } from "@/components/3d/Scene3D";
import { Code, ArrowLeft, Terminal, Cpu } from "lucide-react";

const Gurumata = () => {
  const poem = [
    "Code ki devi, bugs ki dushman,",
    "Laptop ki screen pe, chalti lightning jaisi rum rum.",
    "Errors ko harati, logic se sabko sikhati,",
    "Ankita Gurumata, coding ki asli mata!"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Scene3D variant="gurumata" />
      
      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/30 font-mono text-sm"
            initial={{ y: -100 }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            {Array.from({ length: 20 }, () => 
              String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
            ).join('')}
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
              <Code className="w-16 h-16 text-green-400 mr-4 animate-pulse" />
              <h1 className="text-7xl font-black bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Gurumata
              </h1>
              <Terminal className="w-16 h-16 text-cyan-400 ml-4 animate-pulse" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground"
            >
              The Coding Goddess of Logic and Wisdom
            </motion.p>
          </div>

          {/* Poem Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="birthday-card max-w-3xl mx-auto mb-12 relative overflow-hidden"
          >
            {/* Holographic effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-cyan-400/10" />
            
            {/* Code symbols floating */}
            <div className="absolute inset-0">
              {['{ }', '< >', '[ ]', '( )', '&&', '||', '++', '--'].map((symbol, i) => (
                <motion.div
                  key={i}
                  className="absolute text-green-400/20 font-mono text-2xl"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ 
                    y: [-10, -30, -10], 
                    opacity: [0, 0.6, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    delay: 1 + i * 0.5,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + (i % 3) * 30}%`
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>

            {/* Poem content */}
            <div className="relative z-10 p-8">
              {poem.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.5, duration: 0.8 }}
                  className="mb-4"
                >
                  <p className="text-2xl leading-relaxed text-foreground font-medium">
                    {line}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <Cpu className="w-8 h-8 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="absolute bottom-4 left-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-2xl"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>

          {/* Laptop screens animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex justify-center items-center space-x-8 mb-12"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="text-6xl"
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  delay: i * 0.3,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                💻
              </motion.div>
            ))}
          </motion.div>

          {/* Code lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="space-y-2 font-mono text-green-400"
          >
            {[
              "class AnkitaGuru extends CodingMaster {",
              "  solve(impossibleBug) { return 'Fixed!'; }",
              "  teach(students) { return enlightenment; }",
              "  debug(reality) { return perfection; }",
              "}"
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                transition={{ 
                  delay: 3 + i * 0.3, 
                  duration: 1,
                  ease: "easeOut"
                }}
                className="overflow-hidden whitespace-nowrap text-left max-w-fit mx-auto"
              >
                <span className="bg-muted/20 px-2 py-1 rounded border border-green-400/30">
                  {line}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground italic">
              "In the realm of code, she is the Oracle of Solutions"
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              - The Matrix acknowledges Ankita Gurumata 🧘‍♀️💻
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gurumata;