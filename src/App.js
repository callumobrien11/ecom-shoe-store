import { Component } from "react";
import { Routes, Route } from 'react-router-dom'
import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";
import CartPage from "./pages/CartPage/CartPage";
import ProductPage from "./pages/ProductPage/ProductPage";

class App extends Component {
  state = {
    user: null,
  };

  setUserInState = (incomeingUserData) => {
    this.setState({ user: incomeingUserData });
  };

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      let payload = JSON.parse(atob(token.split('.')[1])) // decode jwt token
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem("token")
        token = null
      } else {
        this.setState({user: payload.user})
      }  
    }
  }

  render() {
    return (
      <div>
        {this.state.user ? (
          <Routes>
            <Route path="/" element={<ProductPage
            setUserInState={this.setUserInState}
            user={this.state.user}/> }/>
            <Route path="/cart" element={<CartPage setUserInState={this.setUserInState} />} />
          </Routes>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </div>
    );
  }
}

export default App;
