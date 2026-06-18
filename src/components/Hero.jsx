import { motion } from 'framer-motion';
import { Mail, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <div className="inline-block px-4 py-2 rounded-full glass-card border-accent/20 text-accent text-xs font-semibold tracking-wider">
              FULL STACK & MOBILE DEVELOPER
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Full Stack & <br />
              <span className="text-accent glow-effect">Mobile App</span> <br />
              Developer.
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              I build scalable web applications using React, Next.js, Node.js and MongoDB while creating high-performance cross-platform mobile applications using Flutter.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="yellow-button flex items-center gap-2">
                View Projects <ChevronRight size={20} />
              </a>
              <a href="#contact" className="glass-button">
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8">
              {[
                { icon: <FaGithub size={20} />, href: '#' },
                { icon: <FaLinkedin size={20} />, href: '#' },
                { icon: <Mail />, href: 'mailto:contact@example.com' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="text-gray-400 hover:text-accent transition-colors hover-glow p-2 rounded-full"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image & Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Image Container with Glow */}
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-3xl z-10 p-2 bg-gradient-to-tr from-accent/40 to-transparent">
              <div className="w-full h-full rounded-2xl bg-dark overflow-hidden border border-white/10 relative">
                <img 
                  src="https://placehold.co/800x800/1a1a1a/FFD60A?text=Profile+Image" 
                  alt="Profile" 
                  className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                />
              </div>
            </div>

            {/* Floating Badges */}
            {[
              { label: 'React', top: '10%', left: '0%', delay: 0 },
              { label: 'Next.js', top: '25%', right: '0%', delay: 1 },
              { label: 'Flutter', bottom: '20%', left: '-5%', delay: 2 },
              { label: 'Node.js', bottom: '10%', right: '5%', delay: 1.5 },
              { label: 'MongoDB', top: '60%', right: '-10%', delay: 0.5 },
            ].map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, delay: badge.delay, ease: "easeInOut" }}
                className="absolute glass-card px-4 py-2 text-sm font-semibold text-white/90 z-20 shadow-lg border-white/5"
                style={{ top: badge.top, left: badge.left, right: badge.right, bottom: badge.bottom }}
              >
                {badge.label}
              </motion.div>
            ))}
            
            {/* Accent corner decorations */}
            <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-accent/50 rounded-tr-3xl" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border-b-2 border-l-2 border-accent/50 rounded-bl-3xl" />
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
