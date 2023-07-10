import React from 'react'

function AboutSection() {
  return (
    <section className="about-section">
    <div className="anim-icons">
      <span className="icon icon-dotted-map"></span>
    </div>
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight" data-wow-delay="600ms">
          <div className="inner-column">
            <div className="sec-title">
              <span className="sub-title">À propos de nous</span>
              <h2>Developez vos competences avec Zerda</h2>
              <div className="text">Nous avons créé Zerda Academy afin de réunir le meilleur d’une formation théorique et du savoir acquis sur le terrain par une équipe de professionnels expérimentés en marketing digital.</div>
            </div>

            <ul className="list-style-one two-column">
              <li><i className="icon fa fa-check"></i> Certification Canadienne</li>
              <li><i className="icon fa fa-check"></i> Des professeurs spécialisés</li>
              <li><i className="icon fa fa-check"></i> 100% pratique</li>
              <li><i className="icon fa fa-check"></i> Cours du soir et du weekend</li>
            </ul>

            <div className="btn-box">
              <a href="page-about.html" className="theme-btn btn-style-one"><span className="btn-title">Découvrir plus</span></a>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="image-column col-lg-6 col-md-12">
          <div className="anim-icons">
            <span className="icon icon-dotted-map-2"></span>
            <span className="icon icon-paper-plan"></span>
            <span className="icon icon-dotted-line"></span>
          </div>
          <div className="inner-column wow fadeInLeft">
            <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about-6.png" alt="" /></figure>
            <div className="experience bounce-y"><span className="count">10</span> ans d'expérience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection