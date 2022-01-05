import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./World.css"
//const data = this.state.datae[0].country
//if (data == null) return null;

const Loader = () => (
  <div class="divLoader">
    <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
    </svg>
  </div>
);






export default class World extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    axios.get("https://disease.sh/v3/covid-19/countries").then((res) => {
      console.log(res.data);
      this.setState({ data: res.data , loading: false });
    });
  }

  render() {
    return (
      <div>
         <h5 className="  mb-5 text-center">Covid cases Worldwide </h5>
        <h3 className="  mt-5 text-center">Covid cases Worldwide </h3>
        {this.state.loading ? <Loader /> : null}
  
        <div className="container-fluid mt-5">
          <div className="table-responsive ">
            <table className="table table-hover table-bordered ">
              <thead>
                <tr className="text-center">
                  <th>Country</th>
                  <th>New Cases</th>
                  <th>Total Cases</th>
                  <th>Active</th>
                  <th>Recovered</th>
                  <th>Death</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((itm, ky) => {
                  return (
                    <tr>
                      <td>{itm.country}</td>
                      <td className="text-end">{itm.todayCases}</td>
                      <td className="text-end">{itm.cases}</td>
                      <td className="text-end">{itm.active}</td>
                      <td className="text-end">{itm.recovered}</td>
                      <td className="text-end">{itm.deaths}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
