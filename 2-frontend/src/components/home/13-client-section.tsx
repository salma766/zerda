import React from 'react'

function ClientSection() {
  return (
    <section className="clients-section">
    <div className="auto-container">
      {/* Sponsors Outer */}
      <div className="sponsors-outer">
        {/*clients carousel*/}
        <ul className="clients-carousel owl-carousel owl-theme">
          <li className="slide-item"> <a href="#"><img src="images/resource/client.png" alt="" /></a> </li>
          <li className="slide-item"> <a href="#"><img src="images/resource/client.png" alt="" /></a> </li>
          <li className="slide-item"> <a href="#"><img src="images/resource/client.png" alt="" /></a> </li>
          <li className="slide-item"> <a href="#"><img src="images/resource/client.png" alt="" /></a> </li>
          <li className="slide-item"> <a href="#"><img src="images/resource/client.png" alt="" /></a> </li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default ClientSection