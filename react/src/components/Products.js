import React, { useState, useEffect } from 'react'

const Products = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch('https://fakestoreapi.com/products', {
            method: "GET"
        });
        const jsonData = await data.json();
        setProducts(jsonData)
      }
      fetchData();
    }, [])
    

    console.log(products)

  return (
    <div>Products</div>
  )
}

export default Products