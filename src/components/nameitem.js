import React from 'react';
import {
     Link
} from 'react-router-dom';
import '../nameitem.css';
import spsc from '../img/bg1.jpg';
import nm_img from '../img/name.png';
import onmusic_img from '../img/onmusic.png';
import offmusic_img from '../img/offmusic.png';
import wood_bg from '../img/wood-bg.png';
import wood_bg_mb from '../img/wood-container.png';
import bubble_fruits from '../img/bubble_fruits.png';
import bubble_vegetables from '../img/bubble_vegetables.png';
import bubble_herbs from '../img/bubble_herbs.png';
import imgpsh_fullsize_anim from '../img/imgpsh_fullsize_anim.png';


class nameitem extends React.Component {
  constructor(props){
          super(props);
          this.state={
               prograss_width:1,
               play:true
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
                  this.setState({
                    play: false
                  });
                 console.log("playback prevented");
               });
           }
     }
     
     togglePlay = () => {
          this.setState({ play: !this.state.play }, () => {
               this.state.play ? this.props.audiodd.play() : this.props.audiodd.pause();
          });
          }
  render (){
    return(
    <div>
          <nav className="navbar navbar-expand" style={{padding: '1.5rem 1rem'}}>
      <Link className="navbar-brand" to="/"><img alt="nameitemimage" src={nm_img} style={{width:'100%'}} /></Link>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" onClick={this.togglePlay}><img alt="nameitemimage" src={this.state.play ?onmusic_img:offmusic_img} style={{width:'100%'}} /> <span className="sr-only">(current)</span></a>
          </li>
          
        </ul>
        
      </div>
    </nav>
    <div className="container mt-sm-5" style={{textAlign:'center'}}>
          <img alt="nameitemimage" src={wood_bg} className="woodimg" />
          <img alt="nameitemimage" src={wood_bg_mb} className="woodimgmb" style={{display:'none'}} />
          <img alt="nameitemimage" src={imgpsh_fullsize_anim} className="centered_t" />
         <Link to="/fruits">
         <img alt="nameitemimage" src={bubble_fruits} className="centered_f" />
         </Link>
           <Link to="/vagetables">
         <img alt="nameitemimage" src={bubble_vegetables} className="centered_v" />
         </Link>
         <Link to="/herbs">
         <img alt="nameitemimage" src={bubble_herbs} className="centered_h" />
         </Link>
         </div>
    </div>
  );
}
}

export default nameitem;
