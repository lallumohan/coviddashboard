import React from 'react'
import Testtrack from './testtrack.js';
import Statewise from './Statewise';
//import Teste from './teste.js';
import Cards from './cards.js';
import Header from './header.js';
import World from './World.js';
import India from './India.js';
import Vaccine from './vaccine.js';
import Updated from './Updated.js';


import {HashRouter as Router,
    Link ,
    Switch, Route
} from 'react-router-dom'




function App() {
    return (
        <div>
            <Router>
               {/* <Header/>  */} 
                <Switch>
                  <Route exact path="/">
                      <Cards/>
                      <India/>
                   </Route>
                  <Route path="/india">
                      
                      <India/>

                  </Route>
                 <Route path="/world">
                     
                     <World/>
                        
                 </Route>
                 <Route path="/vaccine">
                     
                     <Vaccine/>
                        
                 </Route>
                </Switch>


        </Router>
           
            
        </div>
    )
}

export default App
