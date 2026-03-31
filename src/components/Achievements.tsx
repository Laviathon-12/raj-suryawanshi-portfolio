import { motion } from 'motion/react';
import { Trophy, Target, Zap } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Achievements() {
  const icons = [Trophy, Target, Zap];

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
          <Trophy className="text-yellow-500" size={36} />
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {resumeData.achievements.map((ach, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon className="text-blue-400 mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-3">{ach.title}</h3>
                <p className="text-gray-400 leading-relaxed">{ach.context}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
