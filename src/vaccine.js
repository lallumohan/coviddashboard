import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
//import styles from './india.css'
export default class Vaccine extends Component {
  constructor() {
    super();
    this.state = {
      StateData: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports").then((res) => {
      console.log(res.data);
      const States = res.data;
      this.setState({ StateData: States });
    });
  }

  render() {
    var data = this.state.StateData.getBeneficiariesGroupBy;
    if (data == null) return null;
    

     var x_sum = this.state.StateData.getBeneficiariesGroupBy.reduce((acc, curr) => acc + curr.totally_vaccinated, 0);
    
    let time =  this.state.StateData.timestamp
    

     
     
    return (
    
      <div>
        <div className="container-fluid mt-5">

        

        <div className="row mt-5 ">
        <div className="live-indicator-wrapper">
        <div className="pulse">    </div> 
        
         <span>Last Updated: {moment(time).format(' h:mm a , MMMM Do YYYY')}</span>

        </div>
    
                    
                    <div className="col-md-6 mt-4">
                      <div class="card  text-center" style={{boxShadow: '#4db5ff 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 class="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400, color:'rgb(52, 224, 30)'}}>Total Vaccinations</h4>
                          <h1 class="card-title" style={{fontFamily:'Rubik',fontWeight:700,fontSize: "3rem"}}>{this.state.StateData.topBlock.vaccination.total}</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                         
                        </div>
                      </div>
                    </div>
            
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#dc3545 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Dose 1</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}>{this.state.StateData.topBlock.vaccination.tot_dose_1}</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#4cd97a 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Dose 2</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}>{this.state.StateData.topBlock.vaccination.tot_dose_2}</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    
                        </div>
                      </div>
                    </div>
                
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#ffc107 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Today Vaccination</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}>{this.state.StateData.topBlock.vaccination.today}</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    
                        </div>
                      </div>
                    </div>
    
                
</div>        


          <div className="table-responsive mt-4 ">
            <table data- className="table table-hover table-bordered">
              <thead>
                <tr className="text-center">
                  <th>STATE/UT</th>
                  <th>TOTAL VACCINATIONS</th>
                  <th>PARTIALLY VACCINATED</th>
                  <th>FULLY VACCINATED</th>
                  <th>VACCINATION TODAY</th>
                </tr>
              </thead>
              <tbody>
              {this.state.StateData.getBeneficiariesGroupBy.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{item.state_name}</td>
                      <td className="text-end">{item.total}</td>
                      <td className="text-end">{item.partial_vaccinated}</td>
                      <td className="text-end">{item.totally_vaccinated}</td>
                      <td className="text-end">{item.today}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
  
          gggh
          {x_sum}
          
        </div>
      </div>
    );
  }
}
