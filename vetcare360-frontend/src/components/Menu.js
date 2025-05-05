import React from "react";
import { NavLink, useLocation } from "react-router-dom";  
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap-icons/font/bootstrap-icons.css"; 
import logo from '../assets/images/spring-logo-dataflow-mobile.png'; 
import '../assets/styles/Menu.css'; 

const MenuItem = ({ url, title, children }) => (
  <li className="nav-item">
    <NavLink className="nav-link" to={url} title={title}>
      {children}
    </NavLink>
  </li>
);

const Menu = () => {
  const location = useLocation();  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">

        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="VetCare360 Logo" /> 
        </NavLink>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav"> 
            <MenuItem url="/" title="Home Page">
              <span className="bi bi-house-door-fill"></span>&nbsp;
              <span>HOME</span>
            </MenuItem>

            <MenuItem url="/owners/search" title="Find Owners">
              <span className="bi bi-search"></span>&nbsp;
              <span>FIND OWNERS</span>
            </MenuItem>

            <MenuItem url="/veterinarians" title="Veterinarians">
              <span className="bi bi-list-ul"></span>&nbsp;
              <span>VETERINARIANS</span>
            </MenuItem>

            <MenuItem url="/error" title="Trigger an Error">
              <span className="bi bi-exclamation-triangle"></span>&nbsp;
              <span>ERROR</span>
            </MenuItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;