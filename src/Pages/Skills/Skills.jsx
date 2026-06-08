import React from 'react'
import './skills.css'
const Skills = () => {

  const skills = [
    {
      cls:'js',
      name:"Javascript",
      img:'../skills/js.png'
    },
     {
      cls:'html',
      name:"HTML",
      img:'../skills/html.png'
    },
     {
      cls:'css',
      name:"CSS",
      img:'../skills/css.png'
    },
     {
      cls:'react',
      name:"React",
      img:'../skills/react.png'
    },
    {
      cls:'node',
      name:"Node",
      img:'../skills/node.png'
    },
    {
      cls:'mongo',
     name:"MongoDB",
     img:'../skills/mdb.png'
   },
   {
    cls:'ex',
      name:"Express",
      img:'../skills/ex.png'
    },
    {
      cls:'mysql',
      name:"MySQL",
      img:'../skills/msql.png'
    },
    {
      cls:'psql',
      name:"PostgreSQL",
      img:'../skills/psql.png'
    },
    {
      cls:'native',
      name:"React Native",
      img:'../skills/react.png'
    },
    {
      cls:'tailwind',
      name:"TailwindCSS",
      img:'../skills/tailwind.png'
    },
    {
      cls:'gsap',
      name:"GSAP",
      img:'../skills/gsap.jpg'
    },
    
  ]

  return (
    <div id='skills'>
      <h2>skills</h2>
      <div className="skills-con">
        {skills.map((e,i)=>{
          return <div className={`${e.cls} skill-card`}>
                    <img src={e.img} alt="" />
                    <h4>{e.name}</h4>
                  </div>
        })}
      </div>
    </div>
  )
}

export default Skills
