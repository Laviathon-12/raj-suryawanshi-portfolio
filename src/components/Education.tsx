import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Award, BookOpen, ExternalLink, X } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Education() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-4xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
          <GraduationCap className="text-orange-500" size={36} />
          Education & Certifications
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-orange-400" size={24} />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {resumeData.certifications.map((cert, i) => (
                <div key={i} className="flex flex-col overflow-hidden rounded-xl border border-orange-500/20 bg-orange-500/5 transition-all hover:border-orange-500/40 hover:bg-orange-500/10">
                  {cert.image && (
                    <div 
                      className="w-full h-48 overflow-hidden bg-black/50 border-b border-orange-500/20 relative group cursor-pointer"
                      onClick={() => setSelectedImage(cert.image)}
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.name} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
                        <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-lg flex items-center gap-2 shadow-lg">
                          <ExternalLink size={16} /> View Certificate
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="text-orange-100 font-bold text-lg leading-tight mb-2">{cert.name}</div>
                    {cert.issuer && (
                      <div className="text-orange-200/80 text-sm flex items-center gap-2">
                        <Award size={14} className="text-orange-500" /> {cert.issuer} {cert.date && `• ${cert.date}`}
                      </div>
                    )}
                    {cert.id && (
                      <div className="text-orange-500/80 text-xs mt-3 font-mono bg-orange-500/10 inline-block px-2 py-1 rounded border border-orange-500/20">
                        ID: {cert.id}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <BookOpen className="text-orange-400" size={24} />
              Education
            </h3>
            {resumeData.education.map((edu, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                <p className="text-orange-400 font-mono text-sm mt-2">{edu.institution}</p>
                <p className="text-gray-500 text-sm mt-1">{edu.dates}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-orange-400" size={24} />
              Training & Labs
            </h3>
            <ul className="space-y-3 text-gray-300">
              {resumeData.extra.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5 text-xs">▹</span>
                  <span>{item.replace('Training & Lab Experience: ', '')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Modal for full screen certificate */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage} 
                alt="Certificate Full View" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
