import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Food from "./page/Food";
import Products from "./page/Products";
import Movies from "./page/Movies";
import Recipes from "./page/Recipes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/products" element={<Products />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;
