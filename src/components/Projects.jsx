import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Play } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {
  const [filter, setFilter] = useState('All Projects');
  
  const categories = ['All Projects', 'Web Apps', 'Mobile Apps'];
  
  const filteredProjects = projects.filter(project => 
    filter === 'All Projects' ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto rounded-full glow-effect mb-8"
          />
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? 'bg-accent text-dark shadow-[0_0_15px_rgba(255,214,10,0.3)]' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Tech Stack Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-20">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs font-semibold bg-dark/80 backdrop-blur-md text-accent px-2 py-1 rounded-md border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-1 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.githubLink}
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors border border-white/5"
                    >
                      <FaGithub size={16} /> GitHub
                    </a>
                    {project.category === 'Mobile Apps' ? (
                      <a 
                        href={project.liveLink}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 text-sm font-medium transition-colors border border-accent/20"
                      >
                        <Play size={16} /> App Demo
                      </a>
                    ) : (
                      <a 
                        href={project.liveLink}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 text-sm font-medium transition-colors border border-accent/20"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
