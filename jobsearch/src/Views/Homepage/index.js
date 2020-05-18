import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../../Components/Navbar";
import JobInput from "../JobInputDIalog";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <JobInput close={this.handleClose} open={this.state.open} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.reducer.jobs,
  };
};

export default connect(mapStateToProps)(Homepage);
