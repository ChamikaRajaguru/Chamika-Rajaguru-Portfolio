import { motion } from 'framer-motion';
import { milestones } from '../data/milestones';
import { GraduationCap, Code, Database, Smartphone, CheckCircle, Briefcase, Globe } from 'lucide-react';

const icons = {
  graduation: <GraduationCap size={20} className="text-dark" />,
  code: <Code size={20} className="text-dark" />,
  database: <Database size={20} className="text-dark" />,
  smartphone: <Smartphone size={20} className="text-dark" />,
  checkCircle: <CheckCircle size={20} className="text-dark" />,
  briefcase: <Briefcase size={20} className="text-dark" />,
  globe: <Globe size={20} className="text-dark" />
};

export const Milestones = () => {
  return (
    <section id="milestones" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Milestones
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto rounded-full glow-effect"
          />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center md:justify-between ${!isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-[0_0_15px_rgba(255,214,10,0.5)] z-10 border-4 border-dark">
                    {icons[item.icon]}
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />

                  {/* Content Card */}
                  <div className="w-full pl-16 md:pl-0 md:w-5/12">
                    <div className="glass-card p-6 group hover:-translate-y-1 transition-transform duration-300 relative">
                      {/* Connection arrow (desktop only) */}
                      <div className={`hidden md:block absolute top-6 w-0 h-0 border-y-[8px] border-y-transparent ${
                        isEven 
                          ? 'right-[-16px] border-l-[16px] border-l-white/10' 
                          : 'left-[-16px] border-r-[16px] border-r-white/10'
                      }`} />
                      
                      <div className="text-accent text-sm font-bold mb-2 tracking-wider uppercase">
                        {item.date}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
