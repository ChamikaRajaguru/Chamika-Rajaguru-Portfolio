import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Milestones } from './components/Milestones';
import { Contact } from './components/Contact';
import { Background } from './components/Background';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-primary selection:bg-accent selection:text-dark relative">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Milestones />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
