import React, { useEffect, useState } from 'react'



const Fake = () =>{
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const productData = async () =>{
            const fetchData = await fetch("https://fakestoreapi.com/products/");
            const respData = await fetchData.json();
            setProduct(respData);
        };
        productData();
    },[]);

  return (
    <div>
      <h1>Product Page</h1>
      {product.map((ele) =>{
        return <>
        <h4 key={ele.id}>{ele.title}</h4>
        <h3> whatever we have to do </h3>


        <img src={ele.image} alt="" />
        </>
      })}
    </div>
  )
}

export default Fake
 