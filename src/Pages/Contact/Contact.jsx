import React, { useState } from 'react'
import './contact.css'
const Contact = () => {
  
    const [name, setname] = useState("");
    const [emai, setemai] = useState("");
    const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("")


    const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Name: ${name}

Email: ${emai}

Subject:${subject}

Message: ${message}
    `;

    const url = `https://wa.me/918849291780?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };


    const socials = [
    {
      cls:'github socio',
      img:'../socials/gith.png',
      url:'https://github.com/vasimkatiya'
    },
    {
      cls:'insta socio',
      img:'../socials/insta.png',
      url:'https://www.instagram.com/vasim._.katiya/'
    },
    {
      cls:'linkedin socio',
      img:'../socials/in.png',
      url:'https://linkedin.com/in/vasim-katiya'
    },
  ]

    return (
    <div id='contact'>
        <h2>get in touch</h2>
      <div className="form-con">
            <form onSubmit={(e)=>{
              handleSubmit(e)
            }} >
                <input type="text" onChange={(e)=>setname(e.target.value)} name='name' required className="name" placeholder='Full Name' />

                <input type="email" onChange={(e)=>setemai(e.target.value)}  name="email" required placeholder='example@gmail.com' className="email" />

                <input type="text" onChange={(e)=>setsubject(e.target.value)}  className='subject' required placeholder='subject' name='subject' />

                <textarea name="message" onChange={(e)=>setmessage(e.target.value)}  className='msg' placeholder='write message'></textarea>
    <button className='sub' type='submit'>submit</button>
            </form>
      </div>
      <div className="social">
        {
          socials.map((e,i)=><div onClick={()=> window.open(e.url,"_blank")} className={e.cls} >
            <img src={e.img} alt="" />
          </div>)
        }
      </div>
      <div className="e">
        vasimkatiya97@gmail.com
      </div>
    </div>
  )
}

export default Contact
