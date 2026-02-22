import React from 'react'

export default function Section3() {
  return (
    <>

  <section className="cars">
    <h2>Featured Cars</h2>

    <div className="car-container">
      <div className="card" id='card1'>
        <h3>BMW M4</h3>
        <p>Starting at $70,000</p>
      </div>

      <div className="card" id='card2'>
        <h3>Audi R8</h3>
        <p>Starting at $120,000</p>
      </div>

      <div className="card" id='card3'>
        <h3>Mercedes</h3>
        <p>Starting at $95,000</p>
      </div>
    </div>
  </section>
</>
  )
}
