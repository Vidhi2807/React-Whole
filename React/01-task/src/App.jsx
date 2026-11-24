import { useState } from "react";
import Fake from "./pages/fake";
import Food from "./pages/food";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/food">Posts</Link> |{" "}
        <Link to="/fake">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/food" element={<Food />} />
        <Route path="/fake" element={<Fake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;