import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useThemeContext } from "../hooks/useThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeContext();

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
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <h3>Home</h3>
          </Link>
          <Link to="/workouts" onClick={() => setMenuOpen(false)}>
            <h3>Workouts</h3>
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <h3>About</h3>
          </Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
