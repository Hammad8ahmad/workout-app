import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useThemeContext } from "../hooks/useThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeContext();

  // Track which link should blink
  const [blinkingLink, setBlinkingLink] = useState("/");

  

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2 className="main-heading">Train Log</h2>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <nav className={`links ${menuOpen ? "open" : ""}`}>
          <button onClick={toggleTheme} className="mode-btn">
            {isDarkMode ? "Light" : "Dark"}
          </button>

          <NavLink
            to="/"
            onClick={() => {
              setBlinkingLink("/");
              setMenuOpen(false);
            }}
          >
            <div className="blink-wrapper">
              <h3>Home</h3>
              {blinkingLink === "/" && <span className="blink-me"></span>}
            </div>
          </NavLink>

          <NavLink
            to="/workouts"
            onClick={() => {
              setBlinkingLink("/workouts");
              setMenuOpen(false);
            }}
          >
            <div className="blink-wrapper">
              <h3>Workouts</h3>
              {blinkingLink === "/workouts" && <span className="blink-me"></span>}
            </div>
          </NavLink>

        
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
