import React from "react";
import "./Navbar.css";
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
        <button>Light</button>
      </div>
    </div>
  );
};

export default Navbar;
