import { Container, Card, Button } from "react-bootstrap";
import formatCurrency from "../../utilities/formatCurrency";
import "./LineItems.css";

export default function LineItems(props) {
  console.log("props", props);
  return (
    <Container>
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <Card.Img
                  src={props.image}
                  fluid
                  className="rounded-3"
                  style={{ width: "100px" }}
                />
              </div>
              <div style={{ paddingLeft: "40px" }}>{props.name}</div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div className="itemQty" style={{ width: "50px" }}>
                {props.qty}
              </div>
              <div style={{ width: "100px" }}>
                {formatCurrency(props.price)}
              </div>
              <Button
                variant="danger"
                onClick={() =>
                  props.handleChangeQty(
                    props.lineItem.item._id,
                    props.lineItem.qty - 1
                  )
                }
              >
                X
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
