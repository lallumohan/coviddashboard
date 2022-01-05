import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import  './india.css'
import Updated from "./Updated";


const Loader = () => (
  <div class="divLoader">
    <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
    </svg>
  </div>
);

export default class India extends Component {
  constructor() {
    super();
    this.state = {
      StateData: [],
      TestData: [], loading: true
    };
  }

  componentDidMount() {
    axios.get("https://www.mohfw.gov.in/data/datanew.json").then((res) => {
      console.log(res.data);
      const States = res.data;
      this.setState({ StateData: States,TestData: res.data , loading: false });
    });
  }

  compareByAsc(key) {
    return function(a, b) {
      if (a[key]  < b[key] ) return -1;
      if (a[key] > b[key] ) return 1;
      return 0;
    };
  }

  compareByDesc(key) {
    return function(a, b) {
      if (a[key]  < b[key] ) return 1;
      if (a[key] > b[key] ) return -1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.TestData.filter((itm, ky) => ky < 36)];
    const arrInStr = JSON.stringify(arrayCopy);
    arrayCopy.sort(this.compareByAsc(key));
    const arrInStr1 = JSON.stringify(arrayCopy);
    if (arrInStr === arrInStr1) {
      arrayCopy.sort(this.compareByDesc(key));
    }
    
    this.setState({ TestData : arrayCopy });
  }



  filterList = (event) => {
    var updatedList = this.state.StateData;
    updatedList = updatedList.filter(function(list) {
      return (
        list.state_name.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      );
    });
    this.setState({
      TestData: updatedList
    });
    }; 


  render() {
    var Newdata =[]
    var data = this.state.StateData[36];
     //if (data == null) return (<div> Loading</div> );
    var stat = this.state.StateData.filter((itm, ky) => ky < 36)
    console.log(this.state.TestData)
    this.state.TestData.filter((itm, ky) => ky < 36).forEach(statename => {
      statename.new_positive =  parseInt(statename.new_positive)
      statename.positive =  parseInt(statename.positive)
      statename.new_active =  parseInt(statename.new_active) 
      statename.new_cured =  parseInt(statename.new_cured) 
      statename.new_death =  parseInt(statename.new_death)     
      statename.new_case = parseInt(statename.new_positive) - parseInt(statename.positive) ;
      Newdata.push(statename)
  
  })
  let now = new Date();
        var forceHour;
        const hour = forceHour == null ? now.getHours() : forceHour;
        if (hour < 8) {
          now = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
        }

     
     
    return (
    
      <div>
        <div className="container-fluid mt-5">
         <div className= " mt-2" >  </div> 

        <div className="row mt-3 ">
        {this.state.loading ? <Loader /> : null}

        <div className="live-indicator-wrapper">
        <div className="pulse">    </div> 
        Last Updated: 
        {moment(now).format(' MMM Do YYYY')}, 8:00 am
        
        
 

        </div>
                    
                    
            
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#dc3545 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>New Cases</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}> { parseInt(data?.new_positive)-parseInt(data?.positive) }</h1>
                          <h6 class="card-subtitle mb-2 text-muted"></h6>
                    
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#4cd97a 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Active Cases</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}>{ data && data.new_active ? <div>  {data.new_active} </div> : <div>  No data </div> }</h1>
                          <h6 class="card-subtitle mb-2 text-muted"></h6>
                    
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mt-4">
                      <div class="card  text-center" style={{boxShadow: '#4db5ff 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 class="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400, color:'rgb(52, 224, 30)'}}>Total Cases</h4>
                          <h1 class="card-title" style={{fontFamily:'Rubik',fontWeight:700,}}>{data?.new_positive }</h1>
                          <h6 class="card-subtitle mb-2 text-muted"></h6>
                         
                        </div>
                      </div>
                    </div>
                
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#ffc107 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Deaths</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700  }}> {data?.new_death}</h1>
                          <h6 class="card-subtitle mb-2 text-muted"></h6>
                    
                        </div>
                      </div>
                    </div>
                    
                
</div>        
 <div className="search-wrap mt-4">
   
 <input type="text" placeholder="Search State " onChange={this.filterList}/>
 </div>
     
          <div className=" table-responsive mt-4 ">
            <table className="table table-bordered table-hover  ">
              <thead>
                <tr  className="text-center">
                  <th style={{ color:'#393b3e'}}  onClick={() => this.sortBy("state_name")}>Country<br/> <FontAwesomeIcon icon={faSort}  /> </th>
                  <th style={{ color:'#8050b1'}}onClick={() => this.sortBy("new_case")} >New Cases <br/><FontAwesomeIcon icon={faSort} /></th>
                  <th style={{ color:'#De6605'}} onClick={() => this.sortBy("new_positive")}>Total Cases <br/> <FontAwesomeIcon icon={faSort} /></th>
                  <th style={{ color:'#246bfd'}}  onClick={() => this.sortBy("new_active")}>Active <br/> <FontAwesomeIcon icon={faSort} /></th>
                  <th style={{ color:'#189a54'}} onClick={() => this.sortBy("new_cured")}>Recovered<br/> <FontAwesomeIcon icon={faSort}/></th>
                  <th style={{ color:'#Fd3052'}} onClick={() => this.sortBy("new_death")}>Death <br/><FontAwesomeIcon icon={faSort}  /></th>
                </tr>
              </thead>
              <tbody>
                { Newdata.map((filteredName, index) => {
                  return (
                    <tr>
                      <td className=" p-1" style= {{width: "20%"}}>{filteredName.state_name}</td>
                      <td className="text-end p-1 " >{filteredName.new_case}</td>
                      <td className="text-end p-1">{filteredName.new_positive}</td>
                      <td className="text-end p-1">{filteredName.new_active}</td>
                      <td className="text-end p-1">{filteredName.new_cured}</td>
                      <td className="text-end p-1">{filteredName.new_death}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
  
          <div>
            {/* { this.state.StateData.reduce((carry, item)=> parseInt(item.new_positive)  > parseInt (carry.new_positive) ? item : carry)}
          
              <h1>hahhdhd</h1> */}
           {/*

          {stat.reduce((prev, current)=> (parseInt(prev.new_positive)  > parseInt (current.new_positive)) ? prev : current ,0).new_positive}
          {stat.reduce((prev, current)=> (parseInt(prev.new_positive)  > parseInt (current.new_positive)) ? prev : current, 0).state_name}
           
<br/> 
           {stat.reduce((prev, current)=> (parseInt(prev.new_death)  > parseInt (current.new_death)) ? prev : current, 0).new_death}
           {stat.reduce((prev, current)=> (parseInt(prev.new_death)  > parseInt (current.new_death)) ? prev : current, 0).state_name}

           {stat.reduce((prev,current) => ((prev.new_positive-prev.positive)  > (current.new_positive-current.positive) ) ? prev : current,0 ).state_name}
           {stat.reduce((prev,current) => ((prev.new_positive-prev.positive)  > (current.new_positive-current.positive) ) ? prev : current,0 ).new_positive - 
           
           stat.reduce((prev,current) => ((prev.new_positive-prev.positive)  > (current.new_positive-current.positive) ) ? prev : current,0 ).positive}
           */}
          </div>
        </div>
      </div>
    );
  }
}
