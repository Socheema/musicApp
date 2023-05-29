import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="Navbar-container">
      <ul className="nav-link">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Discovery">
          <li>Discovery</li>
        </Link>
        <Link to="/Room">
          <li>Room</li>
        </Link>
      </ul>

      <div className="logo-img">
        <img src={require("../../image/logomusiky.png")} alt="logo" />
      </div>
    </nav>
  );
}
