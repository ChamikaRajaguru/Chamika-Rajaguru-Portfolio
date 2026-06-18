import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Monitor, Smartphone, Server, Database, Wrench } from 'lucide-react';

const icons = {
  "Frontend Development": <Monitor className="text-accent mb-4" size={32} />,
  "Mobile Development": <Smartphone className="text-accent mb-4" size={32} />,
  "Backend Development": <Server className="text-accent mb-4" size={32} />,
  "Database": <Database className="text-accent mb-4" size={32} />,
  "Tools & Platforms": <Wrench className="text-accent mb-4" size={32} />
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Skills
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto rounded-full glow-effect"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col group hover:-translate-y-2 hover-glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                {icons[category.category]}
                <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
              </div>
              
              <div className="space-y-5 flex-1">
                {category.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-accent">{skill.percentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-dark rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (skillIdx * 0.1) }}
                        className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(255,214,10,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
