import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
// import logo from "../Images/logo6.png";

const Navbar=()=>{
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/Home"> 
   {/* <img src={logo} alt="logo"></img> */}
   NAVBAR</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Home">Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Customer</a>
      </li> */}
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Routes
        </NavLink>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" to="#">Create</a>
          <a className="dropdown-item" to="#">Read</a>
          <a className="dropdown-item" to="#">Update</a>
          <a className="dropdown-item" to="#">Delete</a>
        </div>
        </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/ContactUs">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Login">Login </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Register">Register</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}
export default Navbar;