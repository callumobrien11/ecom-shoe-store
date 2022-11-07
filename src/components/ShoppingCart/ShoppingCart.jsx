import "./ShoppingCart.css";
import Header from "../../components/Header/Header";
import LineItems from "../../LineItems/LineItems";

export default function ShoppingCart(props) {
  if (!props.orders) return null;
  const order = props.orders

  const lineItems = order.lineItems?.map(lineItem => 
    <LineItems 
      name={lineItem.item.name} 
      price={lineItem.item.price} 
      image={lineItem.item.image} 
      qty={lineItem.qty}
    />
    )

  return (
    <>
    <div>
      <Header setUserInState={props.setUserInState} />
    </div>
    <div>
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={props.handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="hungry">Hungry?</div>
        }
      </div>
      </>
  );
}
