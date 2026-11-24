import { useEffect, useState } from "react";
import Card from "../components/card";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals));
  }, []);

  return (
    <div className="container">
      <h2>Recipes</h2>
      <div className="grid">
        {recipes?.map((r) => (
          <Card
            key={r.idMeal}
            title={r.strMeal}
            image={r.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
