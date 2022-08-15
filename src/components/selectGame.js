import React from 'react';
import {
     Link
} from 'react-router-dom';
import '../selectgame.css';
import spsc from '../img/bg1.jpg';
import anmsimg from '../img/imgpsh_fullsize_anims.png';
import nm_itme from '../img/btn_name-the-item.png';
import rw_img from '../img/btn_right-wrong.png';
import quiz from '../img/btn_quiz.png';

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
                         <img alt="selectgameimage" src={anmsimg} className="btn_back btn_bak" />
                         <Link to="/nameitemgame">
                         <img alt="selectgameimage" src={nm_itme} className="select_itembtn" />
                         </Link>
                         <Link to="/rightwronggame">
                         <img alt="selectgameimage" src={rw_img} className="rightwrongbtn" />
                         </Link>
                         <Link to="/quizs">
                         <img alt="selectgameimage" src={quiz} className="quizbtn" />
                         </Link>
                    </div>
                    <div className="col-md-3"></div>
               </div>
          </div>
  );
}
}

export default selectgame;
