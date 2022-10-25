import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import formatCurrency from "../../utilities/formatCurrency";
import "./ProductListItem.css"

export default function ProductListItem(props) {
  return (
    <Card className="shoe-card d-flex justify-content-center border-0" style={{ width: "20rem"  }}>
      <Link to={props.id}>
      <Card.Img
        variant="top"
        src={props.image}
        height="200px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title style={{color:"black", textDecoration:"none"}}>{props.name}</Card.Title>
        <Card.Text style={{color:"black", textDecoration:"none"}}>{formatCurrency(props.price)}</Card.Text>
        <Card.Text className="d-flex justify-content-center mb-4" >
          <Link to={props.id}>
            <Button variant="outline-danger" className="rounded">more</Button>
          </Link>
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
  );
}
