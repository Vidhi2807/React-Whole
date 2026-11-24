// task 2:


// function App() {
//   const fruits = [
//     { id: 1, name: "Apple" },
//     { id: 2, name: "Banana" },
//     { id: 3, name: "Mango" }
//   ];

//   const handleClick = (fruitName) => {
//     alert(`You selected ${fruitName}`);
//   };

//   return (
//     <div>
//       <h1>Fruits </h1>

//       {fruits.map((fruit) => (
//         <div key={fruit.id}>
//           <p>{fruit.name}</p>
//           <button onClick={() => handleClick(fruit.name)}>
//             Click  
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


//Task 3:


// import React, { useState } from "react";

// function App() {
//   const [fruits, setFruits] = useState({
//     1: "Apple",
//     2: "Banana",
//     3: "Mango",
//    });

//   const removeFruit = (keyToRemove) => {
//     const updatedFruits = { ...fruits };
//     delete updatedFruits[keyToRemove];
//     setFruits(updatedFruits);
//   };

//   return (
//     <div>
//       <h1>Fruits </h1>
//       <ul>
//         {Object.entries(fruits).map(([key, fruit]) => (
//           <li key={key}>
//             {fruit}{" "}
//             <button onClick={() => removeFruit(key)}>Remove</button>
//           </li>
//         ))} 
//       </ul>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    "Apple",
    "Mango",
    "Oranges",
    "Grapes",
    "Papaya",
    "Guava"
  ]);

  const handleSortChange = (e) => {
    const value = e.target.value;

    if (value === "az") {
      const sortedFruits = [...fruits].sort((a, b) =>
        a.localeCompare(b)
      );
      setFruits(sortedFruits);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sorting</h2>

      <label>
        SORT BY:{" "}
        <select onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="az">A → Z</option>
        </select>
      </label>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;