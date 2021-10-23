import React, { useEffect } from 'react'
import { useHistory, NavLink } from "react-router-dom";
function Navbar() {
  let history = useHistory();
  const logout = () => {
    localStorage.setItem("jwtData", null);
    history.push("/login");

  }
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid container">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>


            </ul>
            <form className="d-flex">
              {localStorage.getItem("jwtData") == 'null' ? <div className=""><NavLink type="" class="btn btn-primary" to="/login">lOGIN</NavLink>
          <NavLink type="" to="/Singup" class="btn mx-2 btn-primary">Sing up</NavLink></div> : <button type="button" class="btn btn-primary" onClick={logout} >log out</button>



              }

            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
