import { Component } from "react";
import {Navbar, Container, Button, FormControl} from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa"
import "./Header.css";

export default class Header extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.setUserInState(null);
  };

  render() {
    return (
      <Navbar className="navbar">
        <Container className="container">
          <Navbar.Brand>
            <a>Home</a>
          </Navbar.Brand>
          <Navbar.Text className="Search">
            <FormControl
              placeholder="Search Shoes"
              className="m-auto search-bar"
              style={{ width:380 }}
            />
          </Navbar.Text>
          <Button onClick={this.handleLogout} variant="danger" size="md" active className="logout-btn">
              Logout
          </Button>
          <FaShoppingCart color="white" fontSize="25px" />
        </Container>

      </Navbar>
    );
  }
}
