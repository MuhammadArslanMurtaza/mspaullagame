import React from 'react';
import {
     BrowserRouter as Routers,
     Router,
     Route,
     Link
} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import App from './App';
import Myapps from './mycomponent';

const custombrowserhistory = createBrowserHistory();

const Cutomroute =() => (
     <Router history={custombrowserhistory}>
          <div>
               <Link style={{color:'green',backgroundColor:"yellow",textDecoration:'none',display:'inline-block'}} to="/">Home</Link>
               <hr />
               <Route exact path="/:name/:id" component={Myapps} />
               <Route exact path="/about" component={App} />
          </div>
     </Router>
)

export default Cutomroute;