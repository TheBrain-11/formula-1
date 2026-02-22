import React from 'react'

export default function Section1(props) {


  return (
    <section className="hero" style={{backgroundImage:`url(${props.bgimage})`}}>
    <div className="overlay"></div>
    <div className="hero-content">
      <h1 id='title'>Formula 1</h1>
      <p>
        Free & Open Source Web UI Kit built over ReactJS & MUI.
        Join over 1.6 million developers around the world.
      </p>
    </div>
  </section>
  )
}
