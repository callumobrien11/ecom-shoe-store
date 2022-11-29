import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import formatCurrency from "../../utilities/formatCurrency";
import "./ProductListItem.css"

export default function ProductListItem(props) {
  return (
    <Card className="shoe-card d-flex justify-content-center border-0" style={{ width: "20rem"  }}>
      <Link to={props.id} style={{ textDecoration: 'none' }}>
      <Card.Img
        variant="top"
        src={props.image}
        height="200px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title className="shoe-card-text" style={{color:"black"}}>{props.name}</Card.Title>
        <Card.Text className="shoe-card-text" style={{color:"black"}}>{formatCurrency(props.price)}</Card.Text>
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
