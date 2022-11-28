import { Container, Stack, Card, Icon } from "react-bootstrap";
import formatCurrency from "../../utilities/formatCurrency";

export default function LineItems(props) {
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
              <div className="ms-3">
                {props.name}
                <p className="small mb-0">256GB, Navy Blue</p>
              </div>
            </div>
            <div className="qty" style={{ justifyContent: props.isPaid && "center" }}>
              {!props.isPaid && (
                <button
                  className="btn-xs"
                  onClick={() =>
                    props.handleChangeQty(props._id, props.qty - 1)
                  }
                >
                  −
                </button>
              )}
              <span>{props.qty}</span>
              {!props.isPaid && (
                <button
                  className="btn-xs"
                  onClick={() =>
                    props.handleChangeQty(props._id, props.qty + 1)
                  }
                >
                  +
                </button>
              )}
            </div>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "50px" }}>{props.qty}</div>
              <div style={{ width: "100px" }}>
                {formatCurrency(props.price)}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
