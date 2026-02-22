import React, { useState } from 'react'
import Dailogbox from './Dailogbox'
import { Link } from 'react-router-dom'
export default function Navbar(promos) {
const [appers, disappers] = useState(false)

    const dailogboxrending = ()=>{
        if(appers == false){
            disappers(true)
        }
        if(appers == true){
            disappers(false)
        }
    }
    
  return (
    <>
<header id='navabar'>
  <nav className="navbar">
    <div className="logo"><img className='logo' src="/f1.png" alt="icon" /></div>
    <ul className='UL1'>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About</Link></li>
       <li><a href="">Contact</a></li>
    </ul>
    <ul className='UL2'>
      <button className="download-btn" id='Sign'>Sign In</button>
     <button className="download-btn" id='login'>Login</button>
     </ul>
    <div className="nav-right">
      <button className="download-btn" id='btn'>DOWNLOAD</button>
      <button className="menu" onClick={dailogboxrending}>☰</button>
    </div>
  </nav>
{appers && <Dailogbox/>}
</header>
 


    </>
  )
}
