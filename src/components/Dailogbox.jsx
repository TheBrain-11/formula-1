import React from 'react'
import { Link } from 'react-router-dom'

export default function Dailogbox() {
// body.addEventListener("click", ()=>{
//   let a = document.querySelector("#dg").style.display;
//   if(a == "flex"){
//     a = "none";
//   }
// })

  return (
    <div className="dailogbox" id='dg'>
        <div class="navbar2">
            <ul className='UL3'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="#">Contact</Link>
            </ul>
            <ul className="UL4">
            <Link to="https://www.facebook.com/login/"><img src="/facebook.png" alt="Facebook" className="userid" /></Link>
            <Link to="https://mobile.twitter.com/i/flow/login?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1499860946562465793%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url="><img src="/twitter.png" alt="Twitter" className="userid" /></Link>
            <Link to="https://accounts.google.co.in/"><img src="/Google.png" alt="Git" className="userid" /></Link>
            <Link to="#">👤 Login</Link>
            </ul>
        </div>
 </div>
  )
}
