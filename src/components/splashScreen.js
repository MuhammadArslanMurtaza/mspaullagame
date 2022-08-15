import React from 'react';
import '../slpashscreen.css';
import spsc from '../img/sc_1.jpg';

class splashscreen extends React.Component {
  constructor(props){
          super(props);
          this.state={
               prograss_width:1
          }
          this.updatetime = this.updatetime.bind(this);
          this.sleep = this.sleep.bind(this);
     }
     componentDidMount() {
        document.getElementById('root').style.backgroundImage = "url("+spsc+")";
        // let dem = ;
        // this.setState({ play: !this.state.play }, () => {
        //        this.state.play ? this.audio.play() : this.audio.pause();
        //   });
        // this.props.audiodd.play();
        var playPromise = this.props.audiodd.play();
           if (playPromise !== undefined) {
             playPromise
               .then(_ => {
                 // Automatic playback started!
                 // Show playing UI.
                 console.log("audio played auto");
               })
               .catch(error => {
                 console.log("playback prevented");
               });
           }
          this.updatetime();
     }
     inter = '';
  updatetime() {
     this.inter = setInterval(() => {
        if (parseInt(this.state.prograss_width) < 11) {
          this.setState((prevState) => {
            return {
               prograss_width: prevState.prograss_width+1
            }
          })
        } else if (parseInt(this.state.prograss_width) < 50 && parseInt(this.state.prograss_width) > 10) {
          this.setState((prevState) => {
            return {
              prograss_width: prevState.prograss_width + 10
            }
          })
        }else if (parseInt(this.state.prograss_width) < 93 && parseInt(this.state.prograss_width) > 50) {
          this.setState((prevState) => {
            return {
              prograss_width: prevState.prograss_width + 14
            }
          })
        }
        else if (parseInt(this.state.prograss_width) < 100 && parseInt(this.state.prograss_width) > 92) {
          console.log(this.state.prograss_width);
          this.setState((prevState) => {
            return {
              prograss_width: prevState.prograss_width + 1
            }
          })
        }
          else if(parseInt(this.state.prograss_width) >= 100) {
            console.log(this.state.prograss_width);
            console.log('df');
            this.setState((prevState) => {
              return {
                prograss_width: prevState.prograss_width + 1
              }
            })
            this.sleep(1000);
          }
     }, 200)
  }
  sleep(milliseconds) {
    // this.props.audiodd.play();
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
    clearInterval(this.inter);
    this.props.history.push('/selection');
  }
  render (){
    return(
    <div className="fluid-container">
          <div className="prograss_bar">
            <div className="progress">
              <div className="progress-bar" style={{ width: this.state.prograss_width+'%',backgroundColor:'#30c34b' }}>{this.state.prograss_width}%</div>
            </div>
          </div>
    </div>
  );
}
}

export default splashscreen;
