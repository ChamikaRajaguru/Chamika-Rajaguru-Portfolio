import { motion } from 'framer-motion';
import { BookOpen, Code2, Smartphone, Lightbulb, CheckCircle, Database, Calendar, Award } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: "Projects Completed", value: "20+", icon: <CheckCircle className="text-accent" size={24} /> },
    { label: "Technologies Learned", value: "15+", icon: <Database className="text-accent" size={24} /> },
    { label: "Years of Learning", value: "3+", icon: <Calendar className="text-accent" size={24} /> },
    { label: "Internship Experience", value: "6 Mo", icon: <Award className="text-accent" size={24} /> },
  ];

  const features = [
    {
      icon: <BookOpen className="text-accent" size={28} />,
      title: "Education",
      desc: "Software Engineering Undergraduate"
    },
    {
      icon: <Code2 className="text-accent" size={28} />,
      title: "Web Development",
      desc: "React, Next.js, Node.js"
    },
    {
      icon: <Smartphone className="text-accent" size={28} />,
      title: "Mobile Development",
      desc: "Flutter & Dart"
    },
    {
      icon: <Lightbulb className="text-accent" size={28} />,
      title: "Problem Solving",
      desc: "Clean Architecture & Scalable Systems"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 border-white/5">
              <div className="w-full h-full rounded-2xl bg-[#111] overflow-hidden">
                <img 
                  src="https://placehold.co/800x1000/1a1a1a/FFD60A?text=About+Image" 
                  alt="About Professional Profile" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-accent/40 rounded-br-3xl" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Architecting <span className="text-accent glow-effect">Digital</span> Experiences.
              </h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  I am a Software Engineering Undergraduate passionate about Full Stack Development and Mobile App Development.
                </p>
                <p>
                  I specialize in building scalable web applications using React, Next.js, Node.js, and MongoDB while creating modern cross-platform mobile applications using Flutter.
                </p>
                <p>
                  My goal is to become a professional software engineer capable of delivering high-quality web and mobile solutions.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 mt-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="text-center space-y-2"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
