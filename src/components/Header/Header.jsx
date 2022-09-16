import { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, FormControl, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
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
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Text className="Search">
            <FormControl
              placeholder="Search Shoes"
              className="m-auto search-bar"
              style={{ width: 380 }}
            />
          </Navbar.Text>
          <NavDropdown title="Menu" id="nav-dropdown">
            <NavDropdown.Item eventKey="1">
              <Link to="/communityPage">Community Page</Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="2">
              <Link to="/orderHistory">Previos Orders</Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="3">Favorites </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4" onClick={this.handleLogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          <Link to="/cart">
            <FaShoppingCart color="white" fontSize="25px" />
          </Link>
        </Container>
      </Navbar>
    );
  }
}
