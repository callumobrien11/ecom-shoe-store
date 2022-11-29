import userEvent from '@testing-library/user-event';
import { Container } from 'react-bootstrap';
import OrderListItem from '../OrderListItem/OrderListItem';


export default function OrderList({ orders, activeOrder, handleSelectOrder, user }) {
  const orderItems = orders.map(o =>
    <OrderListItem
      order={o}
      isSelected={o === activeOrder} 
      handleSelectOrder={handleSelectOrder}
      key={o._id}
    />
  );

  return (
    <main className="OrderList">
      <Container>
      <div style={{fontSize:"20px", paddingBottom:"15px"}}>All orders for {user.name}</div>
      </Container>
      {orderItems.length ?
        orderItems
        :
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontWeight: 'bold'
        }} >No Previous Orders</div>
      }
    </main>
  );
}