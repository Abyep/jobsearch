import React, { Component } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Navbar from "../../Components/Navbar";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <div
          style={{ marginRight: "10%", marginLeft: "10%", marginTop: "5%" }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">URL</TableCell>
                  <TableCell align="right">Created at </TableCell>
                  <TableCell align="right">Company</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Title</TableCell>
                  {/* <TableCell align="right">Description</TableCell> */}
                  <TableCell align="right">How to apply</TableCell>
                  <TableCell align="right">Logo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.jobs.map((job, index) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {job.id}
                    </TableCell>
                    <TableCell align="right">{job.type}</TableCell>
                    <TableCell align="right">{job.url}</TableCell>
                    <TableCell align="right">{job.created_at}</TableCell>
                    <TableCell align="right">{job.company_url}</TableCell>
                    <TableCell align="right">{job.location}</TableCell>
                    <TableCell align="right">{job.title}</TableCell>
                    {/* <TableCell align="right">{job.description}</TableCell> */}
                    <TableCell align="right">{job.how_to_apply}</TableCell>
                    <TableCell align="right">{job.componay_logo}</TableCell>
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
