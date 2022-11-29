import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleChangeEmail = (evt) => {
    this.setState({
      email: evt.target.value,
    });
  };
  handleChangePassword = (evt) => {
    this.setState({
      password: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
        // 1. POST our new user info to the server
        const fetchResponse = await fetch('/api/users/login', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.state.email, password: this.state.password, })
        })
  
        // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
  
        let token = await fetchResponse.json() // 3. decode fetch response: get jwt token from srv
        localStorage.setItem('token', token);  // 4. Stick token into localStorage
  
        const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
        this.props.setUserInState(userDoc)
  
      } catch (err) {
        console.log("SignupForm error", err);
        this.setState({ error: "Sign Up Failed - Try Again" });
      }
    };
    
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control style={{outline:"none", boxShadow:"none", borderColor:"black"}} type="Email" placeholder="Email" onChange={this.handleChangeEmail} value={this.state.email}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control style={{outline:"none", boxShadow:"none", borderColor:"black"}} type="Password" placeholder="Password" onChange={this.handleChangePassword} value={this.state.password}/>
        </Form.Group>

        <Button type="submit"  variant="danger">LOG IN</Button>
        </Form>
      </Container>
    );
  }
}
{/* <div>
        <div className="form-container" onSubmit={this.handleSubmit}>
          <form autoComplete="off">
            <label>Email</label>
            <input
              type="text"
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
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div> */}
