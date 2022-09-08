import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthPage from "./pages/AuthPage/AuthPage";

class App extends Component {
  state = {
    user: null,
  };

  setUserInState = (incomeingUserData) => {
    this.setState({ user: incomeingUserData });
    {console.log("incomeingUserData", incomeingUserData)}
  };

  render() {
    return (
      <div className="App">{this.state.user ? <Navbar setUserInState={this.setUserInState} user={this.state.user} /> : <AuthPage setUserInState={this.setUserInState} />}</div>
    );
  }
}

export default App;
