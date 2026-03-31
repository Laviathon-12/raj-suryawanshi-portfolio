import { motion } from 'motion/react';
import { FileText, ChevronDown } from 'lucide-react';
import resumeData from '../data/resume.json';
import { generateResumePDF } from '../utils/generatePDF';

export default function Hero() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl"
      >
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-4 py-1.5 mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono tracking-wide"
            >
              {resumeData.basics.title}
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]">
              {resumeData.basics.name}
            </h1>
          </div>
          {resumeData.basics.image && (
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              src={resumeData.basics.image} 
              alt={resumeData.basics.name}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500/20 shadow-2xl shadow-blue-500/10 shrink-0"
              referrerPolicy="no-referrer"
            />
          )}
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
          {resumeData.basics.summary}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={scrollToExperience}
            className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            View Experience
            <ChevronDown size={18} />
          </button>
          <button 
            onClick={() => generateResumePDF()}
            className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            Download Resume
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
