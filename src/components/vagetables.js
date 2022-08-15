import React from 'react';
import {
     Link
} from 'react-router-dom';
import '../fireworkss.css';
import '../fruits.css';
import {GetRandom,Randomvagitables,Selectedvagitables} from './randomvagitables';
import spsc from '../img/bg3.jpg';
import thankyoubg from '../img/thankyoubg.png';
import nm_img from '../img/back.png';
import onmusic_img from '../img/onmusic.png';
import offmusic_img from '../img/offmusic.png';
import wood_bg from '../img/wood-bg.png';
import wood_container from '../img/wood-container.png';
import fruit_bg from '../img/fruit-bg.png';
import fruit_title from '../img/title_vegetables.png';
import correct_ans from '../img/correct_ans.png';
import wrong_ans from '../img/wrong_ans.png';
import correct_ansmusic from '../music/CorrectBling1.mp3';
import wrong_ansmusic from '../music/Lose1.wav';
import completegamemusic from '../music/Children_Cheering.wav';


class vagetables extends React.Component {
  constructor(props){
          super(props);
          this.state={
               selectedNote:0,
               clicked: false,
               prograss_check:0,
               showResults: false,
               showcorrectResults: false,
               anscheckimg:null,
               selectedNoteval:Selectedvagitables(0),
               fruits:GetRandom(0,Randomvagitables(0)),
               tagval:null,
               changest:0,
               hide:'block',
               play: true,
               gameover:false,
               thankyoutxt:'none',
               thankyoumsg:'block'
            }
            
        this.handleFuritClick = this.handleFuritClick.bind(this);
        this.sleep = this.sleep.bind(this);
        this.waitfunc = this.waitfunc.bind(this);
        this.thankoyoumsg = this.thankoyoumsg.bind(this);
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
                          this.setState({
                            play: false
                          });
                          console.log("Browser playback prevented");
                     });
           }
           this.correct_ansmusicaudio = new Audio(correct_ansmusic);
        this.correct_ansmusicaudio.load()
        this.wrong_ansmusicaudio = new Audio(wrong_ansmusic);
        this.wrong_ansmusicaudio.load()
        this.completegamemusicaudio = new Audio(completegamemusic);
        this.completegamemusicaudio.load()
           this.sleep();
     }
     togglePlay = () => {
       this.setState({
         play: !this.state.play
       }, () => {
         this.state.play ? this.props.audiodd.play() : this.props.audiodd.pause();
       });
     }
     wronanschk = 0;
     handleFuritClick(event) {
       let tagval = event.currentTarget.dataset.tag;
       this.setState({
       tagval : tagval
        });
       if(tagval === this.state.selectedNoteval[0][1]){
         if (this.state.selectedNoteval[0][0] === 24){
            this.setState({
              hide: 'none',
            })
            this.completegamemusicaudio.play();
            setTimeout(this.thankoyoumsg,3000);
         }else{
         this.setState({
           clicked: true,
           selectedNote: this.state.selectedNote + 1,
           changest: 0,
           anscheckimg: correct_ans,
           showResults: true,
           showcorrectResults:true
         })
        }
        this.correct_ansmusicaudio.play();
        // this.wronanschk = 0;
       }else{
         this.setState({
           showResults: true,
           showcorrectResults:false,
           anscheckimg: wrong_ans
         });
         this.wrong_ansmusicaudio.play();
         this.wronanschk = this.wronanschk+1;
         if(this.wronanschk >= 3){
           this.setState({
             gameover:true
           });
           setTimeout(this.waitfunc,3000);
         }
       }
        }
        inter = '';
        sleep() {
          this.inter = setInterval(() => {
            if (this.state.clicked === true) {
            if (parseInt(this.state.changest) === 2) {
              this.setState((prevState) => {
                return {
                  changest: prevState.changest + 1
                }
              })
              this.setState({
                fruits: GetRandom(this.state.selectedNote, Randomvagitables(this.state.selectedNote)),
                selectedNoteval: Selectedvagitables(this.state.selectedNote),
                showResults: false,
                showcorrectResults: false,
                anscheckimg: null
              });
            }else{
              this.setState((prevState) => {
                return {
                  changest: prevState.changest + 1
                }
              })
            }}
          }, 500)
        }
        waitfunc(){
          this.props.history.push('/');
        }
        thankoyoumsg(){
          document.getElementById('root').style.backgroundImage = "url(" + thankyoubg + ")";
          this.setState({
              hide: 'none2',
              thankyoutxt:'show',
               thankyoumsg:'none'
            })
          setTimeout(this.waitfunc,15000);
        }
  render (){
    return(
    <div style={{display:this.state.thankyoumsg}}>
        <nav className="navbar navbar-expand" style={{padding:" 1.5rem 1rem"}}>
          <Link to="/selection" className="navbar-brand"><img alt="fruitsimage" src={nm_img} style={{width:"100%"}} className="barndimg" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active nav_f">
                <a className="nav-link" onClick={this.togglePlay}><img alt="fruitsimage" src={this.state.play ?onmusic_img:offmusic_img} className="setimg"
                  style={{width:"100%"}} /> <span className="sr-only">(current)</span></a>
              </li>

            </ul>

          </div>
        </nav>
        { this.state.hide==='none' ?
          <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
            </div>:null}
        <img alt="fruitsimage" src={fruit_title} className="fruit_tag" />
        <div className="container mt3" style={{textAlign: "center"}}>
          <img alt="fruitsimage" src={wood_bg} className="woodimg" />
          <img alt="fruitsimage" src={wood_container} className="woodimgmb" style={{display:'none'}} />
          <span style={{display:this.state.hide==="none" || this.state.hide==="none2" || this.state.gameover===true?'none':'block'}}>
          <p style={{fontFamily:'DK Jambo'}} className="fruit_t">{ this.state.selectedNoteval[0][1] }</p>
          <p className="chancechk">Chances { 3-this.wronanschk }</p>
          <div className="grid-container">
            <div className="grid-item item1">
              <img alt="fruitsimage" src={fruit_bg} className="fruitbg" />
              { this.state.showcorrectResults ?
              <div className="inner-grid">
                <div className="inneritem1 ans1">
                  <img alt="fruitsimage" src={this.state.selectedNoteval[0][2]} style={{width:"100%"}} />
                </div>
                <div className="inneritem2 ans2">
                  <img alt="fruitsimage" src={this.state.selectedNoteval[0][3]} style={{width:"120px"}} />
                </div>
              </div>:null}
            </div>
            <div className="grid-item item2">
              <div className="inner-grid_1" onClick={this.handleFuritClick} data-tag={this.state.fruits[0][1]} style={{cursor:'pointer'}}>
                <div className="inneritem1">
                  <img alt="fruitsimage" src={this.state.fruits[0][2]} style={{width:"50px"}} />
                </div>
                <div className="inneritem2">
                  <img alt="fruitsimage" src={this.state.fruits[0][3]} style={{width:"70px"}} />
                </div>
              </div>
            </div>
            <div className="grid-item item5">
              <div className="inner-grid_2" onClick={this.handleFuritClick} data-tag={this.state.fruits[1][1]} style={{cursor:'pointer'}}>
                <div className="inneritem1">
                  <img alt="fruitsimage" src={this.state.fruits[1][2]} style={{width:"50px"}} />
                </div>
                <div className="inneritem2">
                  <img alt="fruitsimage" src={this.state.fruits[1][3]} style={{width:"70px"}} />
                </div>
              </div>
            </div>
            <div className="grid-item item3">
              <div className="inner-grid_3" onClick={this.handleFuritClick} data-tag={this.state.fruits[2][1]} style={{cursor:'pointer'}}>
                <div className="inneritem1">
                  <img alt="fruitsimage" src={this.state.fruits[2][2]} style={{width:"50px"}} />
                </div>
                <div className="inneritem2">
                  <img alt="fruitsimage" src={this.state.fruits[2][3]} style={{width:"70px"}} />
                </div>
              </div>
            </div>
          </div>
          { this.state.showResults ?<img alt="fruitsimage" src={this.state.anscheckimg} className="ans_alert" />:null }
          </span>
          { this.state.gameover===true ?
          <span>
          <p style={{fontFamily:'DK Jambo'}} className="gameover1">Game</p>
          <p style={{fontFamily:'DK Jambo'}} className="gameover2">Over</p></span>:null}
          { this.state.hide==='none' ?
          <span>
          <p style={{fontFamily:'DK Jambo'}} className="fruit_fsh1">Mission</p>
          <p style={{fontFamily:'DK Jambo'}} className="fruit_fsh2">Completed!</p></span>:null}
          { this.state.thankyoutxt==='show' ?
          <span>
          <p style={{fontFamily:'DK Jambo'}} className="thnkmsg1">Thank you for playing our game. Purchase the book at Writersblockproduction, Amazon, and all other online outlets.</p>
          <p style={{fontFamily:'DK Jambo'}} className="thnkmsg2">Join us for more fun at writersblockkids website.</p></span>:null}
        </div> 
    </div>
  );
}
}

export default vagetables;
