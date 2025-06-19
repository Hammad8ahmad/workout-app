import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout App</h1>
        </Link>
        <div className="links">
          <Link to="/about">
           <h1>About</h1>
          </Link>
        
          <Link to="/workouts">
           <h1>Workouts</h1>
          </Link>
          </div>
      </div>
    </header>
  );
};



export default Navbar;
