import React from 'react';
import {
     Link
} from 'react-router-dom';
import '../selectgame.css';
import spsc from '../img/bg3.jpg';
import woodbgs from '../img/wood-bgs.png';
import fruits from '../img/btn_fruits.png';
import vegetables from '../img/btn_vegetables.png';
import herbs from '../img/btn_herbs.png';

class selectgame extends React.Component {
  constructor(props){
          super(props);
          this.state={
               prograss_width:1,
               play: false
          }
     }
     componentDidMount() {
           document.getElementById('root').style.backgroundImage = "url(" + spsc + ")";
           var playPromise = this.props.audiodd.play();
           if (playPromise !== undefined) {
                playPromise
                     .then(_ => {
                          // Automatic playback started!
                          // Show playing UI.
                          console.log("audio played auto");
                     })
                     .catch(error => {
                          // Auto-play was prevented
                          // Show paused UI.
                          console.log("playback prevented");
                     });
           }
     }
     componentWillUnmount() {
    this._isMounted = false;
  }
  render (){
    return(
    <div className="container-fluid">
               <div style={{height: '150px'}} className="tophead"></div>
               <div className="row">
                    <div className="col-md-3 col3"></div>
                    <div className="col-md-6 colbackss">
                         <img alt="selectgameimage" src={woodbgs} className="btn_back btn_bak rtwrbg" />
                         <Link to="/fruits">
                         <img alt="selectgameimage" src={fruits} className="select_itembtn" />
                         </Link>
                         <Link to="/vagetables">
                         <img alt="selectgameimage" src={vegetables} className="rightwrongbtn" />
                         </Link>
                         <Link to="/herbs">
                         <img alt="selectgameimage" src={herbs} className="quizbtn" />
                         </Link>
                    </div>
                    <div className="col-md-3"></div>
               </div>
          </div>
  );
}
}

export default selectgame;
