import Header from "../../components/Header/Header";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { useState, useEffect } from "react";
import OrderList from "../../components/OrderList/OrderList";
import * as ordersAPI from "../../utilities/orders-api"

export default function OrderHistoryPage(props) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function () {
    // Load previous orders (paid)
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory();
      setOrders(orders);
      // If no orders, activeOrder will be set to null below
      setActiveOrder(orders[0] || null);
    }
    fetchOrderHistory();
  }, []);

  function handleSelectOrder(order) {
    setActiveOrder(order);
  }

  return (
    <div>
      <Header setUserInState={props.setUserInState} />
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        handleSelectOrder={handleSelectOrder}
      />
      <ShoppingCart order={activeOrder} />
    </div>
  );
}
