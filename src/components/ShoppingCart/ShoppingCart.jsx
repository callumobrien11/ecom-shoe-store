import "./ShoppingCart.css";
import Header from "../Header/Header"

export default function ShoppingCart(props) {
  return (
    <div>
      <Header setUserInState={props.setUserInState} />
      Hello, Welcome to the Shopping Card Page
    </div>
  );
}

