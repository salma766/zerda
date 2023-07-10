import React from 'react'

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="auto-container">
        <div className="row">
          {/* Feature Block */}
          <div className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
            <div className="inner-box ">
              <i className="icon flaticon-online-learning"></i>
              <h5 className="title">Certifications <br />Online </h5>
            </div>
          </div>

          {/* Feature Block */}
          <div className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-box ">
              <i className="icon flaticon-elearning"></i>
              <h5 className="title">Les meilleurs<br /> instructeurs  </h5>
            </div>
          </div>

          {/* Feature Block */}
          <div className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="800ms">
            <div className="inner-box ">
              <i className="icon flaticon-web-2"></i>
              <h5 className="title">Cours en ligne <br />illimités  </h5>
            </div>
          </div>

          {/* Feature Block */}
          <div className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
            <div className="inner-box ">
              <i className="icon flaticon-users"></i>
              <h5 className="title">Membres <br />expérimentés  </h5>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default FeaturesSection