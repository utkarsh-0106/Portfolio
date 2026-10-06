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
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] to-[var(--accent-soft)]" />
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <img
          src="/ask-profile.png"
          alt="Profile"
          className="w-full h-auto object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm">
          <div className="flex justify-between text-xs">
            <span className="text-accent-strong">BACKEND ENGINEERING × AI</span>
            <span className="text-accent-2">AI SYSTEMS</span>
          </div>
          <div className="flex justify-between mt-1 text-xs">
            <span className="text-accent-strong">SCALABLE BACKENDS</span>
            <span className="text-accent-2">SYSTEM DESIGN</span>
          </div>
          <div className="mt-2 text-xs">
            <span className="text-accent-strong">BUILD</span>
            <span className="text-accent-strong">LEARN</span>
            <span className="text-accent-strong">SHIP</span>
            <span className="text-accent-strong">REPEAT</span>
          </div>
          <div className="mt-3">
            <span className="text-white font-bold">UTKARSH MAHESHWARI</span>
            <span className="text-accent-strong text-xs">Computer Science Undergraduate</span>
          </div>
          <span className="text-accent-strong text-xs mt-1">Ask me anything.</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AskProfileVisual;

export { visualContainer };