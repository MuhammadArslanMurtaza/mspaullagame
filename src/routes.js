import React from 'react';
import {
     Router,
     Route,
     Switch
} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Splashscreen from './components/splashScreen';
import Selectgame from './components/selectGame';
import Rightwrong from './components/rightwrong';
import Nameitem from './components/nameitem';
import Fruits from './components/fruits';
import Alphabets from './components/alphabets';
import Vagetables from './components/vagetables';
import Herbs from './components/herbs';
import music from './music/music.mp3';

const custombrowserhistory = createBrowserHistory();
const url = music;
let audio = new Audio(url);

const Routes = () => (
     <Router history={custombrowserhistory}>
          <Switch>
               <Route exact path="/"  render={(props)=>
    <Splashscreen history={custombrowserhistory} audiodd={audio}  /> } />
               <Route exact path="/selection" render={(props)=>
    <Selectgame audiodd={audio} /> } />
               <Route exact path="/nameitemgame" render={(props)=>
    <Nameitem audiodd={audio} /> } />
               <Route exact path="/rightwronggame" render={(props)=>
    <Rightwrong audiodd={audio} /> } />
               <Route exact path="/fruits" render={(props)=>
    <Fruits history={custombrowserhistory} audiodd={audio} /> } />
               <Route exact path="/herbs" render={(props)=>
    <Herbs history={custombrowserhistory} audiodd={audio} /> } />
               <Route exact path="/quizs" render={(props)=>
    <Alphabets history={custombrowserhistory} audiodd={audio} /> } />
               <Route exact path="/vagetables" render={(props)=>
    <Vagetables history={custombrowserhistory} audiodd={audio} /> } />

          </Switch>
     </Router>
)

export default Routes;