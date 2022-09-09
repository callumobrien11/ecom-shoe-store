import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
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
      <div className="App">{this.state.user ? <Header setUserInState={this.setUserInState} user={this.state.user} /> : <AuthPage setUserInState={this.setUserInState} />}</div>
    );
  }
}

export default App;
