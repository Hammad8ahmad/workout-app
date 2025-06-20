import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Correct import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

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
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <h2>Home</h2>
          </Link>
          <Link to="/workouts" onClick={() => setMenuOpen(false)}>
            <h2>Workouts</h2>
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <h2>About</h2>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
