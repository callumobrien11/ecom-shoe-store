import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function ProductInfoPage(props) {

  const [state, setProduct] = useState({product: {}})
  const product = state.product
  console.log("product", product.image)

  const getId = useParams().id;

  useEffect(() => {
    (async function getProduct() {
      try {
        const fetchProductResponse = await fetch(`/api/${getId}`);
        let resProduct = await fetchProductResponse.json();
        setProduct(prevProduct => {
          return {...prevProduct, product: resProduct}
        })
        
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);
  return (
    <div>
    <Header />
        <img
          src={product.image}
          style={{width:484, height:605, objectFit:"contain"}}
        />
        {product.name}
        {product.price}
        <button>Add to cart</button>
    </div>
  );
}
