import React, { Component } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <div style={{ marginRight: "10%", marginLeft: "10%", marginTop: "5%" }}>
          <div
            style={{
              marginBottom: "3%",
              fontSize: "2.1em",
              fontWeight: "bold",
            }}
          >
            Job Results
          </div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead style={{ background: "grey" }}>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">URL</TableCell>
                  <TableCell align="center">Created at </TableCell>
                  <TableCell align="center">Company</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.jobs.map((job, index) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {job.id}
                    </TableCell>
                    <TableCell align="center">{job.type}</TableCell>
                    <TableCell align="center">{job.url}</TableCell>
                    <TableCell align="center">{job.created_at}</TableCell>
                    <TableCell align="center">{job.company_url}</TableCell>
                    <TableCell align="center">{job.location}</TableCell>
                    <TableCell align="center">{job.title}</TableCell>
                    <TableCell align="center">
                      <Link
                        to={{ pathname: "/job_detail", state: { id: job.id } }}
                      >
                        <Button
                          style={{
                            color: "#fff",
                            background: "rgba(1,81,181,1)",
                          }}
                        >
                          Details
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.reducer.jobs,
  };
};

export default connect(mapStateToProps)(Result);
