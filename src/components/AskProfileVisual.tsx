import React from 'react';
import { motion } from 'framer-motion';

const visualContainer = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AskProfileVisual: React.FC = () => {
  return (
    <motion.div
      className="relative w-full h-full"
      initial="hidden"
      animate="visible"
      variants={visualContainer}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-violet-900/20" />
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <img
          src="/ask-profile.png"
          alt="Profile"
          className="w-full h-auto object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm">
          <div className="flex justify-between text-xs">
            <span className="text-purple-300">BACKEND ENGINEERING × AI</span>
            <span className="text-orange-300">AI SYSTEMS</span>
          </div>
          <div className="flex justify-between mt-1 text-xs">
            <span className="text-purple-300">SCALABLE BACKENDS</span>
            <span className="text-orange-300">SYSTEM DESIGN</span>
          </div>
          <div className="mt-2 text-xs">
            <span className="text-purple-300">BUILD</span>
            <span className="text-purple-300">LEARN</span>
            <span className="text-purple-300">SHIP</span>
            <span className="text-purple-300">REPEAT</span>
          </div>
          <div className="mt-3">
            <span className="text-white font-bold">UTKARSH MAHESHWARI</span>
            <span className="text-purple-300 text-xs">Computer Science Undergraduate</span>
          </div>
          <span className="text-purple-300 text-xs mt-1">Ask me anything.</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AskProfileVisual;

export { visualContainer };