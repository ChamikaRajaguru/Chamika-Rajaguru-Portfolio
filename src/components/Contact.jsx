import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS integration would go here
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto rounded-full glow-effect"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold leading-tight">
              Let's discuss your <br/>
              <span className="text-accent">next big project!</span>
            </h3>
            
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent border border-white/5">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Email Me</p>
                  <a href="mailto:contact@example.com" className="text-white hover:text-accent transition-colors font-medium">contact@example.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent border border-white/5">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              <a href="#" className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all duration-300 hover-glow">
                <FaGithub size={20} />
              </a>
              <a href="#" className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all duration-300 hover-glow">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-wider">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'Sending...'}
                className="w-full yellow-button flex justify-center items-center gap-2"
              >
                {status === 'Sending...' ? 'Sending...' : <><Send size={20} /> Send Message</>}
              </button>
              
              {status && status !== 'Sending...' && (
                <p className="text-accent text-center text-sm font-medium mt-4">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
