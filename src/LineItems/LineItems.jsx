import { Container, Stack, Card, Icon } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

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
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "50px" }}>{props.qty}</div>
              <div style={{ width: "100px" }}>
                {formatCurrency(props.price)}
              </div>
              <a href="#!" style={{ color: "#cecece" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
