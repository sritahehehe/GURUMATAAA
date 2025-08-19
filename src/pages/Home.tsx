import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scene3D } from "@/components/3d/Scene3D";
import { Code, Heart, Zap, Cat } from "lucide-react";

const Home = () => {
  const sections = [
    {
      id: "achi",
      title: "Achi Wali Ankita",
      icon: Heart,
      gradient: "from-green-400 to-blue-500",
      description: "The caring and positive side",
      color: "text-green-400"
    },
    {
      id: "kutkuti", 
      title: "Kutkuti Ankita",
      icon: Zap,
      gradient: "from-red-500 to-orange-500",
      description: "The fierce jallad mode",
      color: "text-red-400"
    },
    {
      id: "gurumata",
      title: "Gurumata",
      icon: Code,
      gradient: "from-emerald-400 to-cyan-500", 
      description: "The coding goddess",
      color: "text-emerald-400"
    },
    {
      id: "meow",
      title: "Mujhe Bhi Pata Nehi",
      icon: Cat,
      gradient: "from-pink-500 to-violet-500",
      description: "The mysterious meow zone",
      color: "text-pink-400"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Scene3D variant="home" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-8xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
            4 Shades of
          </h1>
          <h2 className="text-9xl font-black text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text animate-bounce-in">
            ANKITA
          </h2>
          <p className="text-xl text-muted-foreground mt-6 animate-slide-in-up">
            Click and explore the different sides of Ankita!
          </p>
        </motion.div>

        {/* Navigation Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full"
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Link to={`/${section.id}`}>
                  <div className="birthday-card h-64 relative overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-4">
                      <div className="relative">
                        <Icon className={`w-16 h-16 ${section.color} group-hover:scale-110 transition-transform duration-300`} />
                        <div className={`absolute inset-0 w-16 h-16 ${section.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                        {section.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                        {section.description}
                      </p>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    </div>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Made with 💜 and lots of code for the amazing Ankita
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;