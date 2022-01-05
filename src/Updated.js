import React, { Component } from "react";
import axios from "axios";
//import './Updated.css';
export default class Updated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://www.mygov.in/sites/default/files/covid/covid_state_counts_ver1.json", {mode: "cors"})
      .then((res) => {
        console.log(res.data);
        this.setState({ StateData: res.data });
      });
  }

  render() {
    const data = this.state.StateData.as_on;
       console.log(data)
    {/*

      if (data == null) return null; */}
    return (
      <div>
        
        <div className="live-indicator-wrapper">
        <div className="pulse">    </div> 
         <span>Last Updated:{data} </span>
         

        </div>
    
       
        

      </div>
    )
  }
}
