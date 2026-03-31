  import { motion } from 'motion/react';
  import { Cpu } from 'lucide-react';
  import resumeData from '../data/resume.json';

  export default function Skills() {
    return (
      <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
            <Cpu className="text-purple-500" size={36} />
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            {resumeData.skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <h3 className="text-lg font-bold text-white mb-4 font-mono text-purple-400">
                  {skillGroup.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }
