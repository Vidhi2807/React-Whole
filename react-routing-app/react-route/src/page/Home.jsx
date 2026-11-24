import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>React Routing & API Project</h1>
      <p>
        This project demonstrates routing, navigation, and API integration using
        React.
      </p>

      <div className="grid">
        <Link to="/food" className="card link-card">
          🍔 <h3>Food API</h3>
          <p>Browse food items</p>
        </Link>

        <Link to="/products" className="card link-card">
          🛒 <h3>Products API</h3>
          <p>Fake store products</p>
        </Link>

        <Link to="/movies" className="card link-card">
          🎬 <h3>Movies API</h3>
          <p>Popular movies</p>
        </Link>

        <Link to="/recipes" className="card link-card">
          🍲 <h3>Recipes API</h3>
          <p>Delicious recipes</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
