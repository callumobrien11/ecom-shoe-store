import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ProductListItem(props) {
  return (
    <Card className="d-flex justify-content-center border-0" style={{ width: "20rem"  }}>
      <Card.Img
        variant="top"
        src={props.image}
        height="200px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Card.Text className="d-flex justify-content-center mb-4" >
          <Link to={props.id}>
            <Button variant="outline-danger" className="rounded">more</Button>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
