import React, { Component } from "react";
import { connect } from "react-redux";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "../../Components/Dialog";

import DialogActions from "@material-ui/core/DialogActions";
import { startJob } from "../../Saga";
class JobInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      language: "",
    };
  }

  handleLanguage = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  handleClose = () => {
    const params = {
      language: this.state.language,
    };
    this.props.dispatch(startJob(params));
    this.props.close();
  };

  render() {
    return (
      <div>
        <Dialog open={this.props.open} title={"Search Job"}>
          <div style={{ marginBottom: "5%" }}>
            Please select a language you want to search jobs for
          </div>
          <Textfield
            style={{ width: "100%" }}
            variant="outlined"
            onChange={this.handleLanguage}
            value={this.state.language}
          />
          <DialogActions>
            <Button autoFocus onClick={this.handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    jobs: state.reducer.jobs,
  };
};

export default connect(mapStateToProps)(JobInput);
