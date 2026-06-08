import React, { useRef } from 'react'
import './about.css';
import ScratchCard from 'react-scratchcard-v2';

const About = () => {

  const scratchRef = useRef(null);



  return (
    <div id='about'>
      <div className="about-con">
        <div className="first">
          <h3>scratch it</h3>
          <ScratchCard ref={scratchRef} brush={50} finishPercent={100} width={400} height={400} coverBackground={<h2>scratch</h2>} cover={<h2>scratch it</h2>}>
            <img src="./me.webp" alt="" />
          </ScratchCard>
        </div>
        <div className="second">
          <p>

            I'm a Full-Stack Developer who enjoys transforming ideas into modern, interactive, and scalable web applications. I specialize in both frontend and backend development, combining clean architecture with thoughtful UI/UX design to create engaging digital experiences.
          </p>

          <p>
            My tech stack includes JavaScript, React, Node.js, Express.js, MongoDB, PostgreSQL, HTML, CSS, Tailwind CSS, and Git. Alongside full-stack development, I have a strong interest in creative development, building smooth animations and immersive user experiences using GSAP and Lenis.
          </p>

          <p>
            I've built a variety of projects ranging from dynamic web applications to interactive games. Some of my notable projects include a Full-Stack Portfolio Builder for developers, Studio Namma—an animation-rich creative website clone, Sociogram—a mini social media platform built with the MERN stack, and classic games such as Battleship and Memory Card.
          </p>

          <p>
            I focus on writing clean, maintainable code and creating applications that are not only functional but also visually engaging. I'm constantly learning new technologies and pushing my skills further to build better products and deliver exceptional user experiences.
          </p>


        </div>
      </div>
    </div>
  )
}

export default About
