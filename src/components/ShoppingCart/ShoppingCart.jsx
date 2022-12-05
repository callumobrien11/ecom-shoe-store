import "./ShoppingCart.css";
import Header from "../../components/Header/Header";
import LineItems from "../LineItems/LineItems";
import formatCurrency from "../../utilities/formatCurrency";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

export default function ShoppingCart(props) {
  const order = props.orders;

  document.title = "Cart Page | Shoe Expo";

  function getOrders() {
    const lineItems = order.lineItems?.map((lineItem) => (
      <LineItems
        name={lineItem.item.name}
        price={lineItem.item.price}
        image={lineItem.item.image}
        handleChangeQty={props.handleChangeQty}
        qty={lineItem.qty}
        isPaid={lineItem.isPaid}
        lineItem={lineItem}
      />
    ));
    return lineItems;
  }

  return (
    <>
      <div>
        <Header setUserInState={props.setUserInState} />
      </div>
      <Container>
        {props.orders ? (
          <>
            <div>{getOrders()}</div>
            <section className="mt-4 d-flex justify-content-center">
              <span>TOTAL&nbsp;&nbsp;</span>
              Qty {order.totalQty}&nbsp;&nbsp;
              {formatCurrency(order.orderTotal)}
            </section>
            <section className="d-flex justify-content-center">
              <Link to="/">
                <Button
                  style={{
                    marginRight: "10px",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  className="mt-4 mb-4 bg-dark border-0"
                >
                  Shop
                </Button>
              </Link>
              <Link to="/orderHistory">
                <Button
                  style={{ outline: "none", boxShadow: "none" }}
                  className="mt-4 mb-4 bg-danger border-0"
                  onClick={props.handleCheckout}
                  disabled={!getOrders().length}
                >
                  Checkout
                </Button>
              </Link>
            </section>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
              fontWeight: "bold",
            }}
          >
            No Shoes Selected
          </div>
        )}
      </Container>
    </>
  );
}
