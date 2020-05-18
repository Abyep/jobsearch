import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../../Components/Navbar";
import { getJobDetail } from "../../Saga";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Dialog from "../../Components/Dialog";
import Textfield from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: "asas",
      email: "asas",
      letter: "asas",
      file: null,
      preview: true,
    };
  }

  componentDidMount() {
    this.props.jobs.map((job) => {
      if (job.id == this.props.location.state.id) {
        this.setState({
          job: job,
        });
      }
    });
  }

  handleApply = () => {
    this.setState({
      open: true,
    });
  };

  handleUpload = () => {
    this.refs.fileUploader.click();
  };

  handleFile = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  handleInput = (type, event) => {
    this.setState({
      [type]: event.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({ open: false, preview: true });
  };

  render() {
    return (
      <>
        <Navbar />
        <div style={{ marginRight: "10%", marginLeft: "10%" }}>
          {this.state.job && (
            <Paper>
              <div>{this.state.job.title}</div>
              <div>{this.state.job.type}</div>

              <div>{this.state.job.company}</div>
              <div>{this.state.job.location}</div>
              <Button onClick={this.handleApply}>Apply</Button>
            </Paper>
          )}
        </div>
        <Dialog open={this.state.open} title={"Apply Job"}>
          <div style={{ marginBottom: "5%" }}>
            Please enter the following details.
          </div>
          <Textfield
            label="Name"
            style={{ width: "100%", marginBottom: "2%" }}
            variant="outlined"
            onChange={(event) => this.handleInput("name", event)}
            value={this.state.language}
          />
          <Textfield
            label="Email"
            style={{ width: "100%", marginBottom: "2%" }}
            variant="outlined"
            onChange={(event) => this.handleInput("email", event)}
            value={this.state.language}
          />
          <Textfield
            label="Cover Letter"
            style={{ width: "100%" }}
            variant="outlined"
            onChange={(event) => this.handleInput("letter", event)}
            value={this.state.language}
          />
          <div
            onClick={this.handleUpload}
            style={{
              color: "#3d87f1",
              textDecoration: "underline",
              marginTop: "2%",
              cursor: "pointer",
            }}
          >
            Or attach a cover Letter
          </div>
          <DialogActions>
            <Button autoFocus onClick={this.handleSubmit} color="primary">
              Apply
            </Button>
          </DialogActions>
        </Dialog>

        <input
          type="file"
          ref="fileUploader"
          onChange={this.handleFile}
          style={{ display: "none" }}
        />

        {this.state.preview && (
          <Paper style={{ position :"sticky", top : 20, marginRight: "25%", marginLeft :"25%", height :"20vh", padding : "5%"}}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>Name</div>
              <div>{this.state.name}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>Email</div>
              <div>{this.state.email}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>Cover letter</div>
              <div>
                {this.state.letter.length !== 0 ? (
                  this.state.letter
                ) : (
                  <img src={URL.createObjectURL(this.state.file)} />
                )}
              </div>
            </div>
          </Paper>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.reducer.jobs,
  };
};

export default connect(mapStateToProps)(JobDetail);
