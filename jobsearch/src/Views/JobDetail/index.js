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
      name: "",
      email: "",
      letter: "",
      file: null,
      preview: false,
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
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      (this.state.letter !== "" || this.state.file !== null)
    ) {
      this.setState({ open: false, preview: true });
    }
  };

  handleDone = () => {
    this.setState({
      preview: false,
    });
  };

  handleCloseApplyBox = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <div style={{ marginRight: "10%", marginLeft: "10%" }}>
          {this.state.job && (
            <Paper
              style={{
                marginTop: "5%",
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                height: "80vh",
                padding: "5%",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "2em" }}>
                {this.state.job.title}
              </div>
              <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                {this.state.job.type}
              </div>

              <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                {this.state.job.company}
              </div>
              <div style={{ fontWeight: "lighter", lineHeight: "20px" }}>
                {this.state.job.description}
              </div>
              <div>Location : {this.state.job.location}</div>
              <Button
                style={{
                  width: "150px",
                  background: "rgba(1,81,181,1)",
                  color: "#fff",
                }}
                onClick={this.handleApply}
              >
                Apply
              </Button>
            </Paper>
          )}
        </div>
        <Dialog
          close={this.handleCloseApplyBox}
          open={this.state.open}
          title={"Apply Job"}
        >
          <div style={{ marginBottom: "5%" }}>
            Please enter the following details.
          </div>
          <Textfield
            required
            label="Name"
            style={{ width: "100%", marginBottom: "2%" }}
            variant="outlined"
            onChange={(event) => this.handleInput("name", event)}
            value={this.state.language}
          />
          <Textfield
            required
            label="Email"
            style={{ width: "100%", marginBottom: "2%" }}
            variant="outlined"
            onChange={(event) => this.handleInput("email", event)}
            value={this.state.language}
          />
          <Textfield
            required
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
          <Paper
            style={{
              position: "absolute",
              top: "30vh",
              left: "35%",
              // marginRight: "30%",
              // marginLeft: "30%",
              minHeight: "25vh",
              height: "auto",
              padding: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <div>Name</div>
              <div> {this.state.name}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "2%",
                justifyContent: "space-evenly",
              }}
            >
              <div>Email</div>
              <div>{this.state.email}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "2%",
                justifyContent: "space-evenly",
              }}
            >
              <div>Cover letter</div>
              <div>
                {this.state.letter.length !== 0 ? (
                  this.state.letter
                ) : (
                  <img
                    style={{ height: "100px", width: "100px" }}
                    src={URL.createObjectURL(this.state.file)}
                  />
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "25%",
                justifyContent: "space-evenly",
              }}
            >
              Application submitted successfully
            </div>
            <div align="center">
              <Button
                onClick={this.handleDone}
                style={{
                  background: "rgba(1,81,181,1)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "5%",
                  justifyContent: "space-evenly",
                }}
              >
                Done
              </Button>
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
