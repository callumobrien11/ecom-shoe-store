import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import formatCurrency from "../../utilities/formatCurrency";

export default function OrderListItem({ order }) {
  return (
    
    <Container>
    <Card style={{marginBottom: "15px"}}>
      <Card.Header>Order Id: {order.orderId}</Card.Header>
      <Card.Body>
          <p>
            Total Paid: {formatCurrency(order.orderTotal)}
         </p>
         <p>
            Qty: {order.totalQty} Item{order.totalQty > 1 ? 's' : ''}
          </p>
          <footer className="footer">
            {new Date(order.updatedAt).toLocaleDateString()}
          </footer>
      </Card.Body>
    </Card>
    </Container>
  );
}