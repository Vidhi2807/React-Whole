import { useEffect, useState } from "react";
import Card from "../components/card";

function Food() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  return (
    <div className="container">
      <h2>Food API</h2>
      <div className="grid">
        {foods?.map((item) => (
          <Card
            key={item.idMeal}
            title={item.strMeal}
            image={item.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default Food;
