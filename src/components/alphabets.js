import React from 'react';
import {
     Link
} from 'react-router-dom';
import Popup from "reactjs-popup";
import ReactTooltip from "react-tooltip";
import '../fireworkss.css';
import '../alphabets.css';
import {
     GetRandom,
     Randomherbs,
     Selectedherbs,
     Selectedherbslenght,
     Selectedherbsarray,
     updateansarray,
     arraysAreIdentical,
     changeansarray,
     createherbsarr,
     checkarrayempty,
     updatecheckarray
} from './randomquis';
import title_alphabet from '../img/title_alphabet.png';
import showans from '../img/ic_eye.png';
import spsc from '../img/bg3.jpg';
import thankyoubg from '../img/thankyoubg.png';
import nm_img from '../img/back.png';
import onmusic_img from '../img/onmusic.png';
import offmusic_img from '../img/offmusic.png';
import wood_bg from '../img/wood-bg.png';
import fruit_bg from '../img/fruit-bg.png';
import wood_container from '../img/wood-container.png';
import wrong_ans from '../img/wrong_ans.png';
import wrong_ans_1 from '../img/wrong_ans_1.png';
import correct_ans from '../img/correct_ans.png';
import correct_ans_1 from '../img/correct_ans_1.png';
import correct_ansmusic from '../music/CorrectBling1.mp3';
import wrong_ansmusic from '../music/Lose1.wav';
import completegamemusic from '../music/Children_Cheering.wav';



class alphabets extends React.Component {
  constructor(props){
          super(props);
          this.state={
               selectedNote: 0,
               play: true,
               showResults: false,
               showcorrectResults: false,
               anscheckimg: correct_ans_1,
               anscheckimg2: correct_ans,
               selectedNoteval:Selectedherbs(0),
               selectedNoteval2:Selectedherbs(0),
               fruits:GetRandom('ant',Randomherbs('ant')),
               tagval:null,
               changest: 0,
               anslength:Selectedherbslenght('ant'),
               trueans: Selectedherbsarray('ant'),
               anscheck:false,
               ansclick:0,
               ansarray:Selectedherbsarray('ant'),
               hide:'block',
               correctanwss: createherbsarr('ant'),
               gameover:false,
               thankyoutxt:'none',
               thankyoumsg:'block'
          }
          this.handleFuritClick = this.handleFuritClick.bind(this);
          this.changeansg = this.changeansg.bind(this);
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
     i = 0;
     correctanws = [];
     changeansg(event){
          let tagid = event.target.getAttribute('data-ids');
          this.setState({
               ansarray: changeansarray(tagid, this.state.anslength),
               correctanwss: updatecheckarray(tagid, '', this.state.correctanwss)
          })
          this.correctanws[tagid] = '';
          this.i = this.i-1;
     }
     wronanschk = 0;
     handleFuritClick(event) {
       console.log('alpha');
       let tagval = event.target.value;
       if(this.i<this.state.ansarray.length){
            let inx = checkarrayempty(this.state.correctanwss);
            if(inx !== true){
            this.setState({
               ansarray: updateansarray(inx, tagval, this.state.anslength),
               correctanwss: updatecheckarray(inx, tagval, this.state.correctanwss)
          })
          this.correctanws[inx] = tagval;
          this.i++;
        }
       }
       if (this.i === this.state.ansarray.length) {
            if (arraysAreIdentical(this.correctanws, this.state.trueans) === true) {
              if (this.state.selectedNoteval[0][0] === 24){
            this.setState({
              hide: 'none',
            })
            this.completegamemusicaudio.play();
            setTimeout(this.thankoyoumsg,3000);
         }else{
               this.setState({
                    anscheckimg: correct_ans_1,
                    anscheckimg2: correct_ans,
                    anscheck:true,
                    changest: 0,
                    ansclick:1,
                    showcorrectResults: true,
                    selectedNote: this.state.selectedNote + 1,
                    selectedNoteval: Selectedherbs(this.state.selectedNote + 1),
               })
              }
              this.correct_ansmusicaudio.play();
              // this.wronanschk = 0;
            }else{
               this.setState({
                    anscheck:true,
                    ansclick:0,
                    anscheckimg: wrong_ans_1,
                    anscheckimg2: wrong_ans
               })
               this.wrong_ansmusicaudio.play();
               this.wronanschk = this.wronanschk+1;
         if(this.wronanschk >= 3){
           this.setState({
             gameover:true
           });
           setTimeout(this.waitfunc,3000);
         }
            }
            this.setState({
               showResults: true
          })
       }
        }
        inter = '';
        sleep() {
          this.inter = setInterval(() => {
            if (this.state.anscheck === true) {
            if (parseInt(this.state.changest) === 4) {
              this.setState((prevState) => {
                return {
                  changest: 1
                }
              })
              if(this.state.ansclick === 1){
              this.setState({
                   anscheck:false,
                anslength: Selectedherbslenght(this.state.selectedNoteval[0][2]),
               trueans: Selectedherbsarray(this.state.selectedNoteval[0][2]),
               ansarray: Selectedherbsarray(this.state.selectedNoteval[0][2]),
               correctanwss: createherbsarr(this.state.selectedNoteval[0][2]),
                selectedNoteval2: Selectedherbs(this.state.selectedNote),
                fruits: GetRandom(this.state.selectedNoteval[0][2], Randomherbs(this.state.selectedNoteval[0][2])),
                showResults: false,
                showcorrectResults: false,
               //  anscheckimg: null
              });
              this.correctanws = [];
            }else if(this.state.ansclick === 0){
              this.setState({
                   anscheck:false,
                   correctanwss:createherbsarr(this.state.selectedNoteval[0][2]),
                   anslength:Selectedherbslenght(this.state.selectedNoteval[0][2]),
                   ansarray: Selectedherbsarray(this.state.selectedNoteval[0][2]),
                showResults: false,
                showcorrectResults: false,
              });
            }
            }else{
              this.setState((prevState) => {
                return {
                  changest: prevState.changest + 1
                }
              })
            }
            this.i = 0;
          }
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
          <Link to="/selection" className="navbar-brand"><img alt="alphabetsimage" src={nm_img} style={{width:"100%"}} className="barndimg" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active nav_f">
                <a className="nav-link" onClick={this.togglePlay}><img alt="alphabetsimage" src={this.state.play ?onmusic_img:offmusic_img} className="setimg"
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
        <img alt="alphabetsimage" src={title_alphabet} className="fruit_tag" />
        <div className="container mt3" style={{textAlign: "center"}}>
          <img alt="alphabetsimage" src={wood_bg} className="woodimg" />
          <img alt="alphabetsimage" src={wood_container} className="woodimgmb" style={{display:'none'}} />
          <span style={{display:this.state.hide==="none" || this.state.hide==="none2" || this.state.gameover===true?'none':'block'}}>
                      <p className="chancechk">Chances { 3-this.wronanschk }</p>
          <div className="alphgrid-container">
                    <div className="alphgrid-item alphitem1">
                        <p style={{fontFamily:'DK Jambo',fontSize:'40px'}} className="alph_qs">{ this.state.selectedNoteval2[0][1] }</p>
                        <Popup trigger={<img alt="eyeimage" src={showans} className="eyeimage" />} position="bottom">
                        {close => (
                          <div className="ansdiv">
                            { this.state.selectedNoteval[0][2] }
                          </div>
                            )}
                          </Popup>
                          <ReactTooltip />
                          { this.state.showcorrectResults===true ?<span>
                          <img alt="fruitsimage" src={fruit_bg} className="harbsbg" />
                          <img alt="fruitsimage" src={this.state.selectedNoteval2[0][3]} className="harbsans" /></span>:null}
                               { this.state.showResults ?<img alt="alphabetsimage" src={this.state.anscheckimg2} style={{marginTop: '50px',display:'none'}} className="alphcorrectans" />:null }
                         <div className="ans_div row">
                              {this.state.anslength.map((value, index) => {
                              return <div className="ans_alph" data-tip="select if wrong" style={{height:value[0],lineHeight:value[0]}} onClick={this.changeansg} key={index} data-ids={index}>{value[1]}</div>
                              })}
                         </div>
                          <div className="ans_divopt">
                               <button className="ans_alphopt" onClick={this.handleFuritClick} value={this.state.fruits[0] } >{this.state.fruits[0] }</button>
                               <button className="ans_alphopt" onClick={this.handleFuritClick} value={this.state.fruits[1] } >{this.state.fruits[1] }</button>
                               <button className="ans_alphopt" onClick={this.handleFuritClick} value={this.state.fruits[2] } >{this.state.fruits[2] }</button>
                               <button className="ans_alphopt" onClick={this.handleFuritClick} value={this.state.fruits[3] } >{this.state.fruits[3] }</button>
                               <button className="ans_alphopt" onClick={this.handleFuritClick} value={this.state.fruits[4] } >{this.state.fruits[4] }</button>
                         </div>
                         <div className="ans_divopt">
                               <button className="ans_alphopt" onClick={this.handleFuritClick} value={this.state.fruits[5] } >{this.state.fruits[5] }</button>
                               <button className="ans_alphopt" onClick={this.handleFuritClick} value={this.state.fruits[6] } >{this.state.fruits[6] }</button>
                               <button className="ans_alphopt" onClick={this.handleFuritClick} value={this.state.fruits[7] } >{this.state.fruits[7] }</button>
                               <button className="ans_alphopt" onClick={this.handleFuritClick} value={this.state.fruits[8] } >{this.state.fruits[8] }</button>
                               <button className="ans_alphopt" onClick={this.handleFuritClick} value={this.state.fruits[9] } >{this.state.fruits[9] }</button>
                          </div>
                     </div>
                    <div className="alphgrid-item alphitem2" style={{height:'336px',width:'235px'}}>
                          { this.state.showResults ?<img alt="alphabetsimage" src={this.state.anscheckimg} className="anscht" />:null }
                    </div>
          </div>
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

export default alphabets;
