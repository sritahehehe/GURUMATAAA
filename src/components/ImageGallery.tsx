import { useState } from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const ankitaImages = [
    {
      src: "/lovable-uploads/8300425c-ed26-40da-a3cb-7d857362b6f9.png",
      alt: "Ankita in traditional red dress",
      caption: "Beautiful in red ❤️"
    },
    {
      src: "/lovable-uploads/b4dcb228-0e48-407d-924b-0a443feea93a.png", 
      alt: "Ankita in blue traditional dress",
      caption: "Elegant in blue 💙"
    },
    {
      src: "/lovable-uploads/8bc2f6c5-7b30-41eb-af63-c915864ff2f2.png",
      alt: "Ankita with colorful face paint",
      caption: "Festival vibes 🎨"
    },
    {
      src: "/lovable-uploads/2f617c6e-f30e-4c3d-9d0e-8ef369a04d44.png",
      alt: "Ankita with face paint smiling",
      caption: "Happy moments 😊"
    },
    {
      src: "/lovable-uploads/0f76dc6a-d729-44dc-909b-58f76256e1f6.png",
      alt: "Ankita in casual outfit",
      caption: "Casual chic 💚"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="birthday-card p-4 max-w-xs"
      >
        <div className="relative">
          <img
            src={ankitaImages[currentImage].src}
            alt={ankitaImages[currentImage].alt}
            className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-primary"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <p className="text-xs text-center mt-2 text-muted-foreground">
            {ankitaImages[currentImage].caption}
          </p>
        </div>
        
        {/* Image navigation dots */}
        <div className="flex justify-center mt-3 space-x-1">
          {ankitaImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImage ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ImageGallery;