import { Component } from "react";
//import ProductList from "../ProductList/ProductList";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  FormControl,
  NavDropdown,
  Nav,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

export default class Header extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.setUserInState(null);
  };

  componentDidMount = () => {
    this.setState({ products: this.props.products });
  };

  render() {
    return (
      <Navbar sticky="top" className="bg-dark shadow-sm mb-3">
        <Container className="container">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Logo
            </Nav.Link>
            <NavDropdown title="Menu" id="nav-dropdown">
              <NavDropdown.Item eventKey="1">Community Page</NavDropdown.Item>
              <NavDropdown.Item eventKey="2">
                <Nav.Link to="/orderHistory">Previos Orders</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="3">Favorites </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4" onClick={this.handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            style={{
              width: "3rem",
              height: "3rem",
              position: "relative",
            }}
            variant="outline-danger"
            className="rounded-circle"
          >
            {/* <FaShoppingCart color="white" fontSize="25px" /> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-shopping-cart"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <div
              className="rounded-circle bg-dark d-flex justify-content-center align-items-center"
              style={{
                color: "danger",
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              3
            </div>
          </Button>
        </Container>
      </Navbar>
    );
  }
}
