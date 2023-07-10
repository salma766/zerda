import React from 'react'

function CountdownSection() {
  return (
    <section className="countdown-section">
    <div className="bg-image zoom-two" style={{ backgroundImage: "url(images/background/2.jpg)" }}></div>
    <div className="auto-container">
      <div className="content-box">
        <div className="sec-title light text-center">
          <span className="sub-title">Book your seat now</span>
          <h2>Upcoming study trip</h2>
        </div>
        <div className="time-counter wow fadeInUp">
          <div className="time-countdown" data-countdown="2/2/2023"></div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CountdownSection