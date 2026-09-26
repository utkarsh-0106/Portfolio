import { motion } from 'framer-motion';
import { Bot, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AskAIRobot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      className="fixed bottom-7 right-7 z-[9999]"
    >
      <Link
        to="/ask"
        aria-label="Ask AI about Utkarsh's work"
        className="group block"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          {/* Speech bubble */}
          <div className="absolute -top-16 right-0 w-52 rounded-2xl border border-blue-400/20 bg-[#0b1020]/95 px-4 py-3 shadow-2xl shadow-blue-500/10 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/40">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-300">
              <Sparkles className="h-3.5 w-3.5" />
              ASK AI
            </div>
            <p className="mt-1 text-xs leading-5 text-white/70">
              Ask me anything about my work.
            </p>

            <div className="absolute -bottom-2 right-7 h-4 w-4 rotate-45 border-b border-r border-blue-400/20 bg-[#0b1020]" />
          </div>

          {/* Robot */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-[24px] border border-blue-400/30 bg-gradient-to-br from-[#18264d] via-[#111a35] to-[#090d1b] shadow-[0_12px_45px_rgba(37,99,235,0.28)] transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/60 group-hover:shadow-[0_15px_55px_rgba(37,99,235,0.4)]">
            {/* antenna */}
            <div className="absolute -top-4 left-1/2 h-4 w-px -translate-x-1/2 bg-blue-400/60" />
            <div className="absolute -top-5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" />

            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
              <Bot className="h-8 w-8 text-blue-300" strokeWidth={1.6} />

              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            </div>

            {/* subtle glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-blue-500/10 blur-xl" />
          </div>

          {/* Label */}
          <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors group-hover:text-blue-300">
            Ask AI
            <ArrowUpRight className="h-3 w-3" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
