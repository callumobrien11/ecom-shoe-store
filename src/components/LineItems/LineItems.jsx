import { Container, Stack, Card, Icon } from "react-bootstrap";
import formatCurrency from "../../utilities/formatCurrency";

export default function LineItems(props) {
  console.log('props', props)
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
              <div style={{paddingLeft:"40px"}}>
                {props.name}
              </div>
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
