import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductListItem(props) {
  return (
    <Card style={{ width: "18rem" }}>
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
