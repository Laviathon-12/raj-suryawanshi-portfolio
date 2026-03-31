import { motion } from 'motion/react';
import { Code2, Terminal } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
          <Code2 className="text-emerald-500" size={36} />
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="text-emerald-400" size={24} />
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 text-gray-300">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1.5 text-xs">▹</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
