import { motion, useScroll } from 'framer-motion';
import DynamicBackground from './components/DynamicBackground';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Education from './components/Education';
import Achievements from './components/Achievements';
import InfiniteScrollText from './components/InfiniteScrollText';
import ParallaxWrapper from './components/ParallaxWrapper';

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen">
      <DynamicBackground />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="relative z-10">
        <Navbar />

        {/* Home Section with Parallax */}
        <ParallaxWrapper offset={100}>
          <Home />
        </ParallaxWrapper>

        {/* Infinite Scroll Text */}
        <InfiniteScrollText 
          text="UI/UX DESIGNER • FRONTEND DEVELOPER • CREATIVE THINKER"
          className="py-8 text-2xl font-bold text-gray-800/10 dark:text-white/10"
        />

        {/* About Section with Parallax */}
        <ParallaxWrapper offset={50}>
          <About />
        </ParallaxWrapper>

        {/* Skills with Reverse Scroll */}
        <InfiniteScrollText 
          text="HTML • CSS • JavaScript • React • TypeScript • Next.js • Tailwind"
          direction="right"
          className="py-8 text-xl font-bold text-gray-800/10 dark:text-white/10"
        />

        <ParallaxWrapper offset={75}>
          <Skills />
        </ParallaxWrapper>

        {/* Projects with Parallax */}
        <ParallaxWrapper offset={50}>
          <Projects />
        </ParallaxWrapper>

        {/* Education Section */}
        <ParallaxWrapper offset={50}>
          <Education />
        </ParallaxWrapper>

        {/* Another Infinite Scroll */}
        <InfiniteScrollText 
          text="LETS WORK TOGETHER • CREATE SOMETHING AMAZING"
          className="py-8 text-2xl font-bold text-gray-800/10 dark:text-white/10"
        />

        <ParallaxWrapper offset={25}>
          <Contact />
        </ParallaxWrapper>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;