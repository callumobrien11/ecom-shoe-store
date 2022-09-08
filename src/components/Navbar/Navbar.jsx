import { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.setUserInState(null);
  };

  render() {
    return (
      <nav>
        <h2>Greetings, {this.props.user.name}</h2>
        <ul>
          <li>
            <button onClick={this.handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    );
  }
}
