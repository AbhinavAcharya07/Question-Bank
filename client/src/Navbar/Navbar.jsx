import React from "react";
import "./Navbar.css";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="NavBar">
      <div className="gridLeft">
        <p>MyNotes</p>
      </div>
      <div className="gridMiddle">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/createpost">CreatePost</Link>
          {/* <a>Notes</a> */}
        </ul>
      </div>
      <div className="gridRight">
        <input type="checkbox" id="DarkMoadeToggle" />
        <label htmlFor="DarkMoadeToggle">
          <img src={sun} alt="Theme toggle icon" className="iconSun" />
          <img src={moon} alt="Theme toggle icon" className="iconMoon" />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
