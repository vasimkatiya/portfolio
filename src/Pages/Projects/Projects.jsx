import React, { useEffect, useRef } from 'react'
import './projects.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {    

  const conRef = useRef(null);

   useEffect(() => {
  const cards = gsap.utils.toArray(".pro-card");

  cards.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top 20%",
      end: "+=100%",
      pin: true,
    });

    if (index < cards.length - 1) {
      gsap.to(card, {
        scale: 0.9,
        opacity: 0.0,
        ease: "none",
        scrollTrigger: {
          trigger: cards[index + 1],
          start: "top 80%",
          end: "top top",
          scrub: true,
        },
      });
    }
  });

  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
}, []);
    

    const projects = [
        {
            name:'Portfolio Builder',

            tech:'MongoDB, Express.js, React, Node.js, GSAP',

            text:'Dev-Folio83 is a full-stack portfolio builder designed specifically for developers. It enables users to create and customize a professional portfolio website in under five minutes without writing code. The platform includes portfolio management features, responsive templates, smooth animations, and one-click deployment, allowing users to instantly publish and share their portfolios online.',

            source:'https://github.com/vasimkatiya/dev-folio-back.git',

            live:'https://dev-folio83.netlify.app/',

            video:'../videos/dev-folio.mp4',
            
            bg:'#9303c5'
          },
          {
            name:'Studio Namma Clone',
            
            tech:'React, GSAP',

            text:'A clone of the award-nominated Studio Namma landing page built with React and GSAP. The project focuses on advanced scroll-based animations, smooth page transitions, interactive user experiences, and modern creative web design principles. It demonstrates strong frontend development skills and attention to visual detail.',

            source:'https://github.com/vasimkatiya/STUDIO-NAMMA-LANDING-UI.git',

            live:'https://studio-namma83.netlify.app/',

            video:'../videos/namma.mp4',
            
            bg:'#66dfec'
        },
        {
            name:'Sociogram',

            tech:'MongoDB, Express.js, React, Node.js',

            text:'Sociogram is a mini social media platform that provides core social networking functionality. Users can create accounts, upload posts, follow other users, like and comment on posts, search profiles, and explore community content. Media uploads are stored securely in cloud storage, while the MERN stack powers authentication, data management, and real-time user interactions.',

            source:'https://github.com/vasimkatiya/newPro.git',

            live:'https://sociogram83.netlify.app/login',

            video:'../videos/socio.mp4',

            bg:'#0356c5'
        },
        {
            name:'Basic E-Commerce Frontend',

            tech:'React',

            text:'A responsive e-commerce frontend application built with React. The project fetches product data from external APIs and provides essential shopping features such as product browsing, cart management, item removal, quantity tracking, and automatic total price calculation. It showcases component-based architecture, state management, and API integration skills.',

            source:'https://github.com/vasimkatiya/shopping-cart-react.git',

            live:'https://vasimart.netlify.app/',

            video:'../videos/ecom-front.mp4',

            bg:"#c50337"
        },
         {
            name:'Battleship Game',

            tech:'JavaScript, HTML, CSS',

            text:'A single-player implementation of the classic Battleship game built using object-oriented programming principles in JavaScript. Players compete against a computer-controlled opponent, strategically placing ships and attempting to sink enemy fleets. The project demonstrates strong understanding of OOP concepts, game logic, state management, and algorithmic thinking.',

            source:'https://github.com/vasimkatiya/BattleShips.git',

            live:'https://battle-ship83.netlify.app/',

            video:'../videos/battle.mp4',

            bg:'#068562'
        },
        
    ]

  return (
    <div ref={conRef} id='projects'>
      <h2 className='h2' >projects/works</h2>
      {projects.map((e,i)=>{
        return <div className='pro-card' style={{background:`linear-gradient(${e.bg},#02060e)`}}>
                    <div className="part1">
                        <video src={e.video} autoPlay muted loop></video>
                    </div>
                    <div className="part2">
                        <h1>{e.name}</h1>
                        <h2>tech : {e.tech}</h2>
                        <h4>{e.text}</h4>
                        <div className="btns">
                            <button className='source' onClick={()=>{
                              return window.open(e.source,"_blank")
                            }} >source</button>
                            <button className='preview' onClick={()=>{
                                return window.open(e.live,"_blank")
                            }} >preview</button>
                        </div>
                    </div>
               </div>
      })}
    </div>
  )
}

export default Projects
