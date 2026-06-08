import React, { useState } from 'react'
import { TbMenu4 } from "react-icons/tb";
import './navbar.css'

const Navbar = () => {

    const [open, setopen] = useState(false)

  return (
    <header>
        <nav className='flex'>
            <div className="logo">{"</VAS!M>"}</div>
            <div className="menu" onClick={()=>{
                setopen(!open);
            }}><TbMenu4 /></div>
            <ul className='f'>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>

            <ul className={open ? "show" : 's'} >
                <li onClick={()=>{
                setopen(!open);
            }}><a href="#home">home</a></li>
                <li onClick={()=>{
                setopen(!open);
            }}><a href="#about">about</a></li>
                <li onClick={()=>{
                setopen(!open);
            }}><a href="#skills">skills</a></li>
                <li onClick={()=>{
                setopen(!open);
            }}><a href="#projects">projects</a></li>
                <li onClick={()=>{
                setopen(!open);
            }}><a href="#contact">contact</a></li>
            </ul>

        </nav>
    </header>
  )
}

export default Navbar