import React from 'react';
import {
     Link
} from 'react-router-dom';
import spsc from '../img/bg3.jpg';
import logo_img from '../img/name.png';
import setting_img from '../img/settings.png';
import alphabet from '../img/btn_alphabet.png';
import title_img from '../img/title_right-or-wrong.png';
import fruits from '../img/btn_fruits.png';
import vegetables from '../img/btn_vegetables.png';
import herbs from '../img/btn_herbs.png';
import quiz from '../img/btn_quiz.png';


class rightwrong extends React.Component {
  constructor(props){
          super(props);
          this.state={
               prograss_width:1
          }
          this.sleep = this.sleep.bind(this);
     }
     componentDidMount() {
           document.getElementById('root').style.backgroundImage = "url(" + spsc + ")";
     }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
    this.props.history.push('/selection');
  }
  render (){
    return(
    <div>
          <div>
         <img src={logo_img} className="mt-5 ml-5 float-left" />
         <img src={setting_img} className="mt-5 mr-5 float-right" />
          </div>
              <div className="selectiondiv container">
         <img src={title_img} className="selectbtn offset-2" style={{width: "22%",marginTop:'60px'}} />
         <div className="row">
              <div className="col-md-6">
                  <Link to="/nameitemgame">
         <img src={alphabet} className="nameitemactintbtn" style={{width: "100%",marginTop:'50px',display:'block',margin:'160px auto 0'}} />
         </Link>
         <Link to="/rightwronggame">
         <img src={fruits} className="rightactintbtn" style={{width: "100%"}} />
         </Link>
          <Link to="/rightwronggame">
         <img src={vegetables} className="rightactintbtn" style={{width: "100%"}} />
         </Link>
              </div>
              <div className="col-md-6">
                 <Link to="/rightwronggame">
         <img src={herbs} className="rightactintbtn" style={{width: "100%",marginTop:'50px',display:'block',margin:'210px auto 0'}} />
         </Link>
          <Link to="/rightwronggame">
         <img src={quiz} className="rightactintbtn" style={{width: "100%"}} />
         </Link>
              </div>
         </div>
              </div>
    </div>
  );
}
}

export default rightwrong;
