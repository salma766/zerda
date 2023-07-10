import { Outlet } from 'react-router-dom';
import Footer from '../layouts/footer';
import Navbar from '../layouts/navbar';
import Sidebar from '../layouts/sidebar';

function FullLayout() {

  const handleMenu = () => {
    window.Helpers.toggleCollapsed();
  }

  return (
    <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      <Sidebar />

      <div className="layout-page">
        <Navbar />


        <div className="content-wrapper">
          <Outlet />
          <Footer />
          <div className="content-backdrop fade"></div>
        </div>
        

      </div>

    </div>

    <div onClick={handleMenu} className="layout-overlay layout-menu-toggle"></div>
  </div>
  )
}

export default FullLayout