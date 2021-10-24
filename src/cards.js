import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    <div className='container-fluid' >
    
        <div className="row mt-5 ">
                    
        <div className="col-md-6 mt-3">
          <div class="card  text-center" style={{backgroundColor:'rgb(194, 160, 160)' ,boxShadow: 'rgb(52, 224, 30) 0 .125rem 1rem',borderRadius: '1rem',borderColor :'rgb(52, 224, 30)' }}> 
            <div class="card-body">
              <h5 class="card-title" style={{color:'rgb(52, 224, 30)'}}>Card title</h5>
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-3">
          <div class="card text-center"  style={{borderColor :'rgb(52, 224, 30)'}}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div class="card text-center" >
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on.
              </p>
            </div>
          </div>
        </div>
    
        <div className="col-md-6 mt-3">
          <div class="card text-center" >
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on.
              </p>
            </div>
          </div>
        </div>
    



      </div>
    </div>
    
  );
};

export default Cards;
