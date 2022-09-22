import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";
import CartPage from "./pages/CartPage/CartPage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage";

class App extends Component {
  state = {
    user: null,
    brands: [],
    activeBrand: "",
    products: [],
  };

  setUserInState = (incomeingUserData) => {
    this.setState({ user: incomeingUserData });
  };

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
          console.log("products", this.state.products);
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
                />
              } 
            />
            <Route
              path="/cart"
              element={<CartPage setUserInState={this.setUserInState} />}
            />
            <Route
              path="/orderHistory"
              element={
                <OrderHistoryPage setUserInState={this.setUserInState} />
              }
            />
            <Route
              path="/communityPage"
              element={<CommunityPage setUserInState={this.setUserInState} />}
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
