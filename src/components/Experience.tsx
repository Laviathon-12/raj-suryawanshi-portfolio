import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
          <Briefcase className="text-blue-500" size={36} />
          Experience
        </h2>

        <div className="space-y-6 max-w-4xl">
          {resumeData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-mono text-sm mt-1">{exp.company} • {exp.location}</p>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <span className="text-gray-500 text-sm">{exp.dates}</span>
                  {expandedIndex === index ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                </div>
              </button>
              
              <motion.div 
                initial={false}
                animate={{ height: expandedIndex === index ? 'auto' : 0, opacity: expandedIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 text-gray-300">
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                    {exp.bullets.length === 0 && (
                      <li className="text-gray-500 italic">Details available upon request.</li>
                    )}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
