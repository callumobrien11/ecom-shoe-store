import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

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
          <BiArrowBack color="black" fontSize="40px" className="mr-5" />
        </Link>
        <Row>
          <Col>
            <img
              src={product.image}
              style={{ width: 500, height: 305, objectFit: "contain" }}
            />
          </Col>
          <Col>
            <Card>
              <Container>
              <Card.Title className="mt-4 d-flex justify-content-center" style={{fontSize: "30px"}}>{product.name}</Card.Title>
              <Card.Body>
                <Card.Text>${product.price}</Card.Text>
                <Form.Group>
                  <Row>
                    <Col>
                      <Card.Text>Sizes</Card.Text>
                    </Col>
                    <Col>
                      <Form.Select>
                        {sizes?.map((s) => (
                          <option>{s}</option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                  <Card.Text>color</Card.Text>
                  </Col>
                  <Col>
                  <Form.Select>
                    {colors?.map((c) => (
                      <option>{c}</option>
                    ))}
                  </Form.Select>
                  </Col>
                  </Row>
                  <Button className="mt-4 mb-4 bg-danger border-0">Add to Cart</Button>
                </Form.Group>
              </Card.Body>
              </Container>
            </Card>
          </Col>
        </Row>
        {/* {product.favorite ? <AiOutlineHeart onClick={handleFavorite}/> : <AiFillHeart onClick={handleFavorite}/>} */}
      </Container>
    </div>
  );
}
