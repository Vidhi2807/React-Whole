import React, { useState, useEffect } from 'react'

const Food = () =>{
    const [food, setFood] = useState([]);
    useEffect(() => {
        const foodData = async () =>{
            const fetchData = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const respData = await fetchData.json();
            setFood(respData);
        };
        foodData();
    },[]);
  return (
    <div>
      <h1>Food Page</h1>
      {food.categories?.map((ele) =>{
        return <div key={ele.idCategory}>
        <h4>{ele.strCategory}</h4>
        <img src={ele.strCategoryThumb} alt="" />
        </div>
      })}
    </div>
  )
}

export default Food