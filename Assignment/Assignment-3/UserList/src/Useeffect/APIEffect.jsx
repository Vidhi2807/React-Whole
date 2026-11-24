// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// function APIEffect(){
//     var [names,setName] = useState([]);
//     useEffect(()=>(
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>response.json())
//         .then((data)=>{
//             setName(data);
// })
// ),[])
//   return (
//     <div>
//       {names.map((user)=>{
//         return(
//           <div key = {user.id}>
//         <p>Name : {user.name}</p>
//         <p>Email : {user.email}</p>
//         <p>City : {user.address.city}</p>
//        <hr />
//           </div>
//         )
//       })}
      
//     </div>
//   )
// }

// export default APIEffect

import React, { useState, useEffect } from 'react';

function APIEffect() {
  const [names, setName] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setName(data);
      });
  }, []);

  return (
    <div>
      {names.map((user) => {
        return (
          <div key={user.id}>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>City : {user.address.city}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default APIEffect;