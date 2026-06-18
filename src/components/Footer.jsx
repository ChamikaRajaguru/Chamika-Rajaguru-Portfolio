import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-dark py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter mb-1">
              Chamika <span className="text-accent">Rajaguru</span>
            </h2>
            <p className="text-gray-400 text-sm">Full Stack & Mobile App Developer</p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">GitHub</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-accent hover:-translate-y-1 transition-all duration-300"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Chamika Rajaguru. Crafted with passion.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
