import { useSignOut } from 'react-auth-kit'
import { useAuthUser } from 'react-auth-kit'

import { useNavigate } from "react-router-dom";
import { config } from '../config';

import '../stylesheets/navbar.css'
function Navbar() {



  const signOut = useSignOut()
  const navigate = useNavigate();
  const auth = useAuthUser()


  const logout = () => {
    if (signOut())
      navigate('/login')
  }

  const handleMenu = () => {
    window.Helpers.toggleCollapsed();
  }




  return (
    <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
      <div onClick={handleMenu} className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <div className="nav-item nav-link px-0 me-xl-4">
          <i className="bx bx-menu bx-sm"></i>
        </div>
      </div>

      <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0"></i>
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>


        <ul className="navbar-nav flex-row align-items-center ms-auto">

          <li className="nav-item me-2 me-xl-0">
            {/* <div onClick={handleToggle} className="nav-link style-switcher-toggle hide-arrow">
              {(theme === 'light')
                ? <i className="bx bx-sm bx-moon"></i>
                : <i className="bx bx-sm bx-sun"></i>
              }
            </div> */}
          </li>

          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <div className="nav-link dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
              <div className="avatar avatar-online">
                <img src={"./assets/img/avatars/1.png"} alt="pdp" className="rounded-circle fixed-size" />
              </div>
            </div>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <div className="dropdown-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img src={"./assets/img/avatars/1.png"} alt="pdp" className="rounded-circle fixed-size" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">{auth()!.firstName+" "+auth()!.lastName}</span>
                      <small style={{textTransform: 'capitalize'}} className="text-muted">{auth()!.role}</small>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <div className="dropdown-item">
                  <i className="bx bx-user me-2"></i>
                  <span className="align-middle">My Profile</span>
                </div>
              </li>
              <li>
                <div className="dropdown-item">
                  <i className="bx bx-cog me-2"></i>
                  <span className="align-middle">Settings</span>
                </div>
              </li>
              <li>
                <div className="dropdown-item">
                  <span className="d-flex align-items-center align-middle">
                    <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                    <span className="flex-grow-1 align-middle">Billing</span>
                    <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                  </span>
                </div>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <div onClick={logout} className="dropdown-item">
                  <i className="bx bx-power-off me-2"></i>
                  <span className="align-middle">Log Out</span>
                </div>
              </li>
            </ul>
          </li>

        </ul>




      </div>


    </nav>
  )
}

export default Navbar