import React from 'react'

function Footer() {
  return (
    <footer className="main-footer">
    <div className="bg-image zoom-two" style={{ backgroundImage: "url(images/background/4.jpg)" }}></div>

    {/*Widgets Section*/}
    <div className="widgets-section">
      <div className="auto-container">
        <div className="row">
          {/*Footer Column*/}
          <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
            <div className="footer-widget about-widget">
              <div className="logo"><a href="index.html"><img src="images/logo.png" alt="" /></a></div>
              <ul className="social-icon-two">
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>



          {/*Footer Column*/}
          <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
            <div className="footer-widget">
              <h4 className="widget-title">Links</h4>
              <ul className="user-links">
                <li><a href="#">Acceuil</a></li>
                <li><a href="#">Cours</a></li>
                <li><a href="#">Contact</a></li>

              </ul>
            </div>
          </div>

          {/*Footer Column*/}
          <div className="footer-column col-xl-5 col-lg-4 col-md-6 col-sm-12">
            <div className="footer-widget contact-widget">
              <h4 className="widget-title">Contact</h4>
              <div className="widget-content">
                <ul className="contact-info">
                  <li><i className="fa fa-phone-square"></i> <a href="tel:+21628438848">+216 28 438 848</a></li>
                  <li><i className="fa fa-envelope"></i> <a href="mailto:hello@zerda.academy">hello@zerda.academy</a></li>
                  <li><i className="fa fa-map-marker-alt"></i> Lac 1, Tunis</li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

    {/*Footer Bottom*/}
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="inner-container">
          <div className="copyright-text">&copy; Copyright 2022 by  <a href="index.html">Company.com</a></div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer