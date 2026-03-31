/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30 font-sans">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <AnimatedBackground />
          <div className="relative z-10">
            <Navigation />
            <main className="max-w-7xl mx-auto">
              <Hero />
              <Experience />
              <Achievements />
              <Projects />
              <Skills />
              <Education />
            </main>
            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-24">
              <p>© {new Date().getFullYear()} Raj Suryawanshi. All rights reserved.</p>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}
