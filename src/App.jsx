import React, { useEffect, useRef, useState } from 'react'
import Home from './Pages/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import About from './Pages/About/About.jsx'
import Skills from './Pages/Skills/Skills.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Loader from './Components/Loader.jsx'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Lenis  from 'lenis'
import "lenis/dist/lenis.css";
// import LocomotiveScroll from "locomotive-scroll";
// import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const containerRef = useRef()

  const [loading, setloading] = useState(true)


useEffect(() => {
  if (loading) return;

  const lenis = new Lenis({
    duration: 1.5,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  let rafId;

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };
}, [loading]);

  useEffect(() => {
      const timer = setTimeout(() => {
        setloading(false);
      }, 3300);
    

  return () => clearTimeout(timer);
}, []);
  

  return (
    <main ref={containerRef} > 
      {!loading? <>
      <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </> : <Loader />}
    </main>
  )
}

export default App
