import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

export default class AuthPage extends Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <main className="AuthPage">
        <Container>
          <h3
            onClick={() => this.setState({ showLogin: !this.state.showLogin })}
          >
            <Button
              variant="outline-dark"
              style={{ outline: "none", boxShadow: "none", marginTop: "30px" }}
            >
              {this.state.showLogin ? "SIGN UP" : "LOG IN"}
            </Button>
          </h3>
        </Container>
        {/* If showLogin is true, show the login form. If false, show the signup form */}
        {this.state.showLogin ? (
          <LoginForm setUserInState={this.props.setUserInState} />
        ) : (
          <SignupForm setUserInState={this.props.setUserInState} />
        )}
      </main>
    );
  }
}
