import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";

export default function ProductInfoPage() {
  const [products, setProduct] = useState({ product: {} });
  const product = products.product;
  const sizes = product.size;
  const colors = product.color;
  const getId = useParams().id;

  useEffect(() => {
    (async function getProduct() {
      try {
        const fetchProductResponse = await fetch(`/api/${getId}`);
        let resProduct = await fetchProductResponse.json();
        setProduct((prevProduct) => {
          return { ...prevProduct, product: resProduct };
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Link to="/">
          <BiArrowBack color="black" fontSize="40px" />
        </Link>
        <img
          src={product.image}
          style={{ width: 484, height: 605, objectFit: "contain" }}
        />
        <Form.Group className="mb-3">
          <Form.Label>{product.name}</Form.Label>
          <Form.Label>${product.price}</Form.Label>
          <Form.Label>size</Form.Label>
          <Form.Select>
            {sizes?.map((s) => (
              <option>{s}</option>
            ))}
          </Form.Select>
          <Form.Label>color</Form.Label>
          <Form.Select>
            {colors?.map((c) => (
              <option>{c}</option>
            ))}
          </Form.Select>
        </Form.Group>
        {/* {product.favorite ? <AiOutlineHeart onClick={handleFavorite}/> : <AiFillHeart onClick={handleFavorite}/>} */}
        <button>Add to cart</button>
      </Container>
    </div>
  );
}
