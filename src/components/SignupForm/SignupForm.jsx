import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChangeName = (evt) => {
    this.setState({
      name: evt.target.value,
      error: "",
    });
  };
  handleChangeEmail = (evt) => {
    this.setState({
      email: evt.target.value,
      error: "",
    });
  };
  handleChangePassword = (evt) => {
    this.setState({
      password: evt.target.value,
      error: "",
    });
  };
  handleChangeConfirm = (evt) => {
    this.setState({
      confirm: evt.target.value,
      error: "",
    });
  };

  componentDidMount = () => {
    document.title = "Sign Up | Shoe Expo"
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        }),
      });

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json(); // 3. decode fetch response to get jwt from srv
      localStorage.setItem("token", token); // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split(".")[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc);
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <Container>
      <Form onSubmit={this.handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" style={{outline:"none", boxShadow:"none", borderColor:"black"}} type="name" placeholder="Name" onChange={this.handleChangeName} value={this.state.name} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" style={{outline:"none", boxShadow:"none", borderColor:"black"}} type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChangeEmail}required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" style={{outline:"none", boxShadow:"none", borderColor:"black"}} type="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChangePassword} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control name="confirm" style={{outline:"none", boxShadow:"none", borderColor:"black"}} type="password" placeholder="Confirm password" value={this.state.confirm} onChange={this.handleChangeConfirm} required/>
        </Form.Group>

        <Button style={{outline:"none", boxShadow:"none"}} variant="danger" type="submit" disabled={disable}>
          SIGN IN
        </Button>
      </Form>
      </Container>
    );
  }
}
{/* <div>
  <div className="form-container">
    <form autoComplete="off" onSubmit={this.handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={this.state.email}
        onChange={this.handleChange}
        required
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={this.state.password}
        onChange={this.handleChange}
        required
      />
      <label>Confirm</label>
      <input
        type="password"
        name="confirm"
        value={this.state.confirm}
        onChange={this.handleChange}
        required
      />
      <button type="submit" disabled={disable}>
        SIGN UP
      </button>
    </form>
  </div>
  <p className="error-message">&nbsp;{this.state.error}</p>
</div> */}
