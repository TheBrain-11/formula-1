import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Footer from '../components/Footer'
import Aboutele from '../components/Aboutele'
import Section4 from '../components/Section4'
export default function About() {
  return (
   <>
   
   <Navbar/>
   <Section1 bgimage={`/Aestatic.jpg`}/>
   <Aboutele/>
   <Section4/>
   <Footer/>
   </>
  )
}
