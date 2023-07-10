
import { useLocation, Link } from "react-router-dom";
import { useStore } from "zustand";
import { authStore } from "../stores/auth-store";
import { useState } from "react";
import LoginModal from "../components/login-modal";
import ProfileAvatar from "../components/profile-avatar";

import '../stylesheets/logout-btn.css'
const navigation = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Courses",
    href: "/courses"

  },
  {
    title: "Contact",
    href: "/contact"
  },

];

function Header() {
  let location = useLocation();
  const { connectedUser, deleteConnectedUser } = useStore(authStore);

  const [loginModal, setLoginModal] = useState(false);
  const toggleLoginModal = () => setLoginModal(!loginModal)

  const openMobileMenu = () => {
    document.getElementsByTagName('body')[0].classList.add('mobile-menu-visible')
  }

  const closeMobileMenu = () => {
    document.getElementsByTagName('body')[0].classList.remove('mobile-menu-visible')
  }


  return (
    <>
      <header className="main-header header-style-one">

        {/* Main box */}
        <div className="main-box">
          <div className="logo-box">
            <div className="logo"><a href="index.html">
              <img style={{ height: '50px', objectFit: 'contain' }} src="images/logo.png" alt="" title="Tronis" />
            </a>
            </div>
          </div>

          {/*Nav Box*/}
          <div className="nav-outer">

            <nav className="nav main-menu">
              <ul className="navigation">
                {navigation.map((nav, index) =>
                  <li key={index} className={
                    location.pathname === nav.href ? "current" : ""}>
                    <Link to={nav.href}>{nav.title}</Link>
                  </li>)}
                {(connectedUser) && <li className={
                  location.pathname === 'mycourses' ? "current" : ""}>
                  <Link to={'/mycourses'}>My Courses</Link>
                </li>}
              </ul>
            </nav>
            {/* Main Menu End*/}


            <div className="outer-box">
              <a href="tel:+92(8800)9806" className="info-btn">
                <i className="icon fa fa-phone"></i>
              </a>



              {(connectedUser)
                ? <div style={{ display: "flex", alignItems: 'center' }}>
                  <ProfileAvatar
                    firstName={connectedUser.firstName}
                    lastName={connectedUser.lastName}
                    radius={45}
                    style={{ marginRight: '5px' }}
                  />
                  <div style={{ marginRight: '5px', display: 'grid' }}>
                    {connectedUser.firstName}
                    <button onClick={deleteConnectedUser} className="logout-btn">Logout</button>
                  </div>

                </div>
                : <button id="loginBtn" onClick={toggleLoginModal} className="theme-btn btn-style-one">
                  <span className="btn-title">Login</span>
                </button>

              }

              {/* Mobile Nav toggler */}
              <div onClick={openMobileMenu} className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
            </div>
          </div>
        </div>
        {/* End Main Box */}

        {/* Mobile Menu  */}
        <div onClick={closeMobileMenu} className="mobile-menu">
          <div onClick={closeMobileMenu} className="menu-backdrop"></div>

          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo"><a href="index.html"><img src="images/logo-2.png" alt="" title="" /></a></div>
              <div onClick={closeMobileMenu} className="close-btn"><i className="icon fa fa-times"></i></div>
            </div>

            <ul className="navigation clearfix">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </ul>
            <ul className="contact-list-one">
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset"></i>
                  <span className="title">Call Now</span>
                  <a href="tel:+92880098670">+92 (8800) - 98670</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1"></span>
                  <span className="title">Send Email</span>
                  <a href="mailto:help@company.com">help@company.com</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock"></span>
                  <span className="title">Send Email</span>
                  Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                </div>
              </li>
            </ul>


            <ul className="social-links">
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </nav>
        </div>{/* End Mobile Menu */}

        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop"></span>
          <button className="close-search"><span className="fa fa-times"></span></button>

          <div className="search-inner">
            <form method="post" action="https://kodesolution.com/html/2022/edulerns-html/index.html">
              <div className="form-group">
                <input type="search" name="search-field" placeholder="Search..." required />
                <button type="submit"><i className="fa fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}

        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="inner-container">
              {/*Logo*/}
              <div className="logo">
                <a href="index.html" title="">
                  <img src="images/logo.png" alt="" title="" />
                </a>
              </div>

              {/*Right Col*/}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      {/*Keep This Empty / Menu will come through Javascript*/}
                    </ul>
                  </div>
                </nav>{/* Main Menu End*/}

                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header>


      <LoginModal isOpen={loginModal} toggle={toggleLoginModal} />
    </>

  )
}

export default Header