import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>React APIs</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/food">Food</Link>
        <Link to="/products">Products</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recipes">Recipes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
