import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"

export default function ProductListItem(props) {
  return (
    <Card style={{ width: "18rem" }}>
        <Link to={props.id}>Link</Link>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          ${props.price}
        </Card.Text>
        <Button variant="info">More</Button>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}
