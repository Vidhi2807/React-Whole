import React from "react";

function App() {

  const fetchData = async () => {
    const response = await fetch("https://cg-node.onrender.com/users");
    const data = await response.json();
    console.log(data);   
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch API</button>
    </div>
  );
}

export default App;