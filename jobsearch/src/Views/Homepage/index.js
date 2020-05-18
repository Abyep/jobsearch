import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../../Components/Navbar";
import JobInput from "../JobInputDIalog";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      jobs: [],
    };
  }

  componentWillReceiveProps(props) {
    if (props.jobs.length !== 0) {
      // return (
      //   <Redirect
      //     to={{
      //       pathname: `/results`,
      //       state: {
      //         jobs: this.props.jobs,
      //       },
      //     }}
      //   />
      // );

      this.setState({
        jobs: props.jobs,
      });
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    if (this.state.jobs.length !== 0) {
      return (
        <Redirect
          to={{
            pathname: `/results`,
            state: {
              jobs: this.props.jobs,
            },
          }}
        />
      );
    } else {
      return (
        <div>
          <Navbar />
          <JobInput close={this.handleClose} open={this.state.open} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.reducer.jobs,
  };
};

export default connect(mapStateToProps)(Homepage);
