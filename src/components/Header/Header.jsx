import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Header.css";

export default class Header extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.setUserInState(null);
  };

  componentDidMount() {
    this.setState({ products: this.props.products });
  }
  render() {
    return (
      <Navbar
        sticky="top"
        className="shadow-lg mb-3"
        style={{ backgroundColor: "#f4f4f4" }}
      >
        <Container className="container">
          <Nav className="d-flex justify-content-center">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/orderHistory" as={NavLink}>
              Previos Orders
            </Nav.Link>
          </Nav>
          <Nav>
            <Link to="/ShoppingCart">
              <Button
                style={{
                  width: "3rem",
                  height: "3rem",
                  position: "relative",
                  outline: "none",
                  boxShadow: "none",
                }}
                variant="outline-danger"
                className="rounded-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-cart"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </Button>
            </Link>
            <Button
              onClick={this.handleLogout}
              style={{ background: "#c82333", border: "none", marginLeft: 30 }}
            >
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
