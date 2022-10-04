import Header from "../../components/Header/Header";
import "./CartPage.css"

export default function CartPage(props) {
  return (
    <div>
      <Header setUserInState={props.setUserInState} />
      Cart
      </div>
  );
}
