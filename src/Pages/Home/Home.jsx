import React from 'react'
import './home.css'

const Home = () => {

  

  return (
    <div id='home'>
        <div className="overlay"></div>
      <div className="home-con">
        <h1>{`{"Name" : "Vasim Katiya" }`}</h1>
        <div className="profession">
            <h2 className='role'>Javascript Developer</h2>
            <h2 className='role'>Full Stack Developer</h2>
            <h2 className='role'>MERN Stack Developer</h2>
            <h2 className='role'>Front-end Developer</h2>
            <h2 className='role'>Backend Developer</h2>
        </div>
        <h4>
            I'm a passionate Full-Stack JavaScript Developer. I create websites with smooth and seamless user experiences using animation libraries and modern tech stacks.
        </h4>
      </div>
      
    </div>
  )
}

export default Home
