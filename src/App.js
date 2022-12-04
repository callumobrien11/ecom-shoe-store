import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage";
import * as ordersAPI from './utilities/orders-api';

class App extends Component {
  state = {
    user: null,
    brands: [],
    activeBrand: "",
    products: [],
    cart: null,
    orders: [],
    activeOrder: null
  };


  setUserInState = (incomeingUserData) => {
    this.setState({ user: incomeingUserData });
    window.location.reload()
  };

 handleAddToOrder = (itemId) => {
      ordersAPI.addItemToCart(itemId)
      .then(data => this.setState({ cart: data}))
  }

  handleCheckout = () => {
    ordersAPI.checkout();
    this.setState({cart: null})
  }

  handleChangeQty = (itemId, newQty) => {
     ordersAPI.setItemQtyInCart(itemId, newQty)
    .then(data => this.setState({cart: data}))
  }

  async componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      let payload = JSON.parse(atob(token.split(".")[1])); // decode jwt token
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        token = null;
      } else {
        this.setState({ user: payload.user });
        try {
          const fetchProductsResponse = await fetch("/api/products");
          const fetchBrandsResponse = await fetch("/api/brands");
          let products = await fetchProductsResponse.json();
          let brandsObject = await fetchBrandsResponse.json();
          let brands = brandsObject.map((b) => b.name);
          this.setState({ brands: brands, products: products });
          const getCart = await ordersAPI.getCart()
          if (getCart){
            this.setState({ cart: getCart})
          }
        } catch (err) {
          console.error("ERROR: ", err);
        }
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.user ? (
          <Routes>
            <Route
              path="/"
              element={
                <ProductPage
                  setUserInState={this.setUserInState}
                  user={this.state.user}
                  brands={this.state.brands}
                  products={this.state.products}
                />
              }
            />
            <Route 
              path="/:id" 
              element={
                <ProductInfoPage  
                  setUserInState={this.setUserInState}
                  brands={this.state.brands} 
                  products={this.state.products} 
                  handleAddToOrder={this.handleAddToOrder}
                />
              } 
            />
            <Route
              path="/ShoppingCart"
              element={<ShoppingCart 
                setUserInState={this.setUserInState} 
                orders={this.state.cart} 
                handleCheckout={this.handleCheckout}
                handleChangeQty={this.handleChangeQty}
  
                />
              }
            />
            <Route
              path="/orderHistory"
              element={
                <OrderHistoryPage setUserInState={this.setUserInState} user={this.state.user} />
              }
            />
          </Routes>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </div>
    );
  }
}

export default App;
