import React, { Component } from "react";
import axios from "axios";
import styles from './india.css'
import Updated from "./Updated";
export default class India extends Component {
  constructor() {
    super();
    this.state = {
      StateData: [],
    };
  }

  componentDidMount() {
    axios.get("https://www.mohfw.gov.in/data/datanew.json").then((res) => {
      console.log(res.data);
      const States = res.data;
      this.setState({ StateData: States });
    });
  }

  render() {
    var data = this.state.StateData[36];
     if (data == null) return (<div> Loading</div> );
    var stat = this.state.StateData.filter((itm, ky) => ky < 36)

     
     
    return (
    
      <div>
        <div className="container-fluid mt-5">
         <div className= " mt-2" >  </div> 

        <div className="row mt-3 ">

        <Updated/>
                    
                    <div className="col-md-6 mt-4">
                      <div class="card  text-center" style={{boxShadow: '#4db5ff 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 class="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400, color:'rgb(52, 224, 30)'}}>Total Cases</h4>
                          <h1 class="card-title" style={{fontFamily:'Rubik',fontWeight:700,fontSize: "3rem"}}>{ data && data.new_positive ? <div>  {data.new_positive} </div> : <div>  No data </div> }</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                         
                        </div>
                      </div>
                    </div>
            
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#dc3545 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Active Cases</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}> { data && data.new_active ? <div>  {data.new_active} </div> : <div>  No data </div> }</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#4cd97a 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Active Cases</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}>{ data && data.new_active ? <div>  {data.new_active} </div> : <div>  No data </div> }</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    
                        </div>
                      </div>
                    </div>
                
                    <div className="col-md-6 mt-4">
                      <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)',boxShadow: '#ffc107 0 .125rem 0.8rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
                        <div class="card-body">
                          <h4 className="card-title mb-5" style={{fontFamily:'Rubik',fontWeight:400 }}>Active Cases</h4>
                          <h1 class="card-title " style={{fontFamily:'Rubik',fontWeight:700 ,fontSize: "3rem" }}>{ data && data.new_active ? <div>  {data.new_active} </div> : <div>  No data </div> }</h1>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    
                        </div>
                      </div>
                    </div>
                
</div>        


          <div className="table-responsive mt-4 ">
            <table className="table table-hover table-bordered">
              <thead>
                <tr className="text-center">
                  <th>Country</th>
                  <th>Total cases</th>
                  <th>New Cases</th>
                  <th>Recovered</th>
                  <th>Death</th>
                </tr>
              </thead>
              <tbody>
                {this.state.StateData.filter((itm, ky) => ky < 36).map((filteredName) => {
                  return (
                    <tr>
                      <td>{filteredName.state_name}</td>
                      <td className="text-end">{filteredName.new_positive}</td>
                      <td className="text-end">{parseInt(filteredName.new_positive)-parseInt(filteredName.positive)}</td>
                      <td className="text-end">{filteredName.new_positive}</td>
                      <td className="text-end">{filteredName.new_death}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
  
          <div>
            {/* { this.state.StateData.reduce((carry, item)=> parseInt(item.new_positive)  > parseInt (carry.new_positive) ? item : carry)}
          */}
             <h1>hahhdhd</h1>
           

          {stat.reduce((prev, current)=> (parseInt(prev.new_positive)  > parseInt (current.new_positive)) ? prev : current).new_positive}
          {stat.reduce((prev, current)=> (parseInt(prev.new_positive)  > parseInt (current.new_positive)) ? prev : current).state_name}
           
<br/> 
           {stat.reduce((prev, current)=> (parseInt(prev.new_death)  > parseInt (current.new_death)) ? prev : current).new_death}
           {stat.reduce((prev, current)=> (parseInt(prev.new_death)  > parseInt (current.new_death)) ? prev : current).state_name}

           {stat.reduce((prev,current) => ((prev.new_positive-prev.positive)  > (current.new_positive-current.positive) ) ? prev : current ).state_name}
           {stat.reduce((prev,current) => ((prev.new_positive-prev.positive)  > (current.new_positive-current.positive) ) ? prev : current ).new_positive - 
           
           stat.reduce((prev,current) => ((prev.new_positive-prev.positive)  > (current.new_positive-current.positive) ) ? prev : current ).positive}
           
          </div>
        </div>
      </div>
    );
  }
}
