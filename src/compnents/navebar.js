import React from 'react'

import '../App.css';
function navebar() {
  return (
    <>
      <nav className="navbar shadow-lg bg-opacity-50 navbar-expand-lg navbar-light text-white">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            <h2 className="text-white">Subham</h2>
          </a>
          <div
            className="navbar-toggler border border-0"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <button className="btn btn-secondary  mx-1">
              <div className="fas fa-search" id="search-btn" />
            </button>
            <button className="btn btn-secondary mx-1 position-relative">
              <div className="fas fa-shopping-cart" id="cart-btn" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            <button className="btn btn-secondary mx-1 ">
              <div className="fas fa-user" id="login-btn" />
            </button>
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              className=" btn btn-secondary mx-1 "
            >
              <div className="navbar-toggler-icon " />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <b>Home</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownMenuClickableOutside"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                {/* <ul class="dropdown-menu bg-transparent border border-0 text-center text-light "
                      aria-labelledby="navbarDropdown"> */}
                <div
                  className="dropdown-menu text-white bg-transparent shadow-lg"
                  aria-labelledby="dropdownMenuClickableOutside"
                >
                  <div className=" d-flex  align-items-start">
                    <span className="material-icons  mx-2 ">home</span>
                    <div className="flex-grow-1">
                      <p style={{ marginBottom: "0rem" }}>Home </p>
                      <hr style={{ marginBottom: "0.5rem", marginTop: "0.2rem" }} />
                    </div>
                  </div>
                  <div className=" d-flex  align-items-start">
                    <span className="material-icons  mx-2 ">account_circle</span>
                    <div className="flex-grow-1">
                      <p style={{ marginBottom: "0rem" }}>About us</p>
                      <hr style={{ marginBottom: "0.5rem", marginTop: "0.2rem" }} />
                    </div>
                  </div>
                  <div className=" d-flex  align-items-start">
                    <span className="material-icons  mx-2 ">info</span>
                    <div className="flex-grow-1">
                      <p style={{ marginBottom: "0rem" }}>info </p>
                      <hr style={{ marginBottom: "0.5rem", marginTop: "0.2rem" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <div className=" 	d-sm-none d-md-block	d-md-none d-lg-block ">
                <button className="btn btn-secondary mx-1 ">
                  <div className="fas fa-search" id="search-btn" />
                </button>
                <button className="btn btn-secondary mx-1 ">
                  <div className="fas fa-shopping-cart" id="cart-btn" />
                </button>
                <button className="btn btn-secondary mx-1 ">
                  <div className="fas fa-user" id="login-btn" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end bg-transparent"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header text-white">
          <h3 id="offcanvasRightLabel">Manu</h3>
          <h3>
            <button
              type="button"
              className="btn-close btn-light text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </h3>
        </div>
        <div className="offcanvas-body text-white">
          <div className=" d-flex align-items-start">
            <span className="material-icons  mx-2 ">home</span>
            <div className="flex-grow-1">
              <p style={{ marginBottom: "0rem" }}>Home </p>
            </div>
          </div>
          <hr style={{ marginBottom: "1rem", marginTop: "0.2rem" }} />
          <div className=" d-flex m-0 align-items-start">
            <span className="material-icons  mx-2 ">home</span>
            <div className="flex-grow-1 d-flex justify-content-between">
              <p style={{ marginBottom: "0rem" }}>About us</p>
              <p style={{ marginBottom: "0rem" }}>99</p>
            </div>
          </div>
          <hr style={{ marginBottom: "1rem", marginTop: "0.2rem" }} />
          <div className=" d-flex  align-items-start">
            <span className="material-icons  mx-2 ">settings</span>
            <div className="flex-grow-1">
              <p style={{ marginBottom: "0rem" }}>Settings </p>
            </div>
          </div>
          <hr style={{ marginBottom: "1rem", marginTop: "0.2rem" }} />
          <div className=" d-flex  align-items-start">
            <span className="material-icons  mx-2 ">logout</span>
            <div className="flex-grow-1">
              <p style={{ marginBottom: "0rem" }}>Logout </p>
            </div>
          </div>
          <hr style={{ marginBottom: "0.5rem", marginTop: "0.2rem" }} />
        </div>
      </div>
    </>

  )
}

export default navebar
