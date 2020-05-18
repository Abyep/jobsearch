import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "../../Components/Dialog";
import Textfield from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import { Redirect } from "react-router-dom";
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      name: "",
      password: "",
      email: "",
    };
  }

  handleInput = (type, event) => {
    this.setState({
      [type]: event.target.value,
    });
  };

  handleSignUp = () => {
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.password !== ""
    ) {
      localStorage.setItem("user", this.state.name);
      localStorage.setItem("session", true);
      window.location.reload();
    }
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
    window.href = "/";
  };

  render() {
    if (localStorage.getItem("session") == "true") {
      return <Redirect to="/" />;
    } else {
      return (
        <Dialog
          close={this.handleClose}
          open={this.state.open}
          title={"Become a member"}
        >
          <div style={{ marginBottom: "5%" }}>Sign up</div>
          <Textfield
            required
            label="Name"
            style={{ width: "100%", marginBottom: "2%" }}
            variant="outlined"
            onChange={(event) => this.handleInput("name", event)}
            value={this.state.language}
          />
          <Textfield
            type="email"
            required
            label="Email"
            style={{ width: "100%", marginBottom: "2%" }}
            variant="outlined"
            onChange={(event) => this.handleInput("email", event)}
            value={this.state.language}
          />
          <Textfield
            type="password"
            required
            label="Password"
            style={{ width: "100%", marginBottom: "2%" }}
            variant="outlined"
            onChange={(event) => this.handleInput("password", event)}
            value={this.state.language}
          />

          <DialogActions>
            <Button autoFocus onClick={this.handleSignUp} color="primary">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
  }
}

export default Auth;
