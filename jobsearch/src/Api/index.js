import axios from "axios";

const api = {
  getJobs(params) {
    const myInit = {
      "Content-Type": "application/json;charset=UTF-8",
      method: "GET",
      mode: "no-cors",
      "Access-Control-Allow-Origin": "*",
    };

    const myRequest = new Request(
      "https://jobs.github.com/positions.json?description=ruby&page=1",
      myInit
    );
    return fetch(myRequest, { cors: true })
      .then((response) => {
        return response.json();
        // console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};

export default api;
