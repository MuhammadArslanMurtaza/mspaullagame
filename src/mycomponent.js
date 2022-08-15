import React from 'react';
import {
     Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class  Myapp extends React.Component {
     constructor(props){
          super(props);
          this.state={
               logo:logo,
               btntext:'click',
               bt:'d',
               currentTime:new Date().toLocaleString()
          }
          this.getformdata = this.getformdata.bind(this);
          this.updatetime = this.updatetime.bind(this);
     }
     componentDidMount() {
          this.updatetime();
     }
     updatetime(){ 
     //  setInterval(() => {
     //       this.setState({
     //            currentTime : new Date().toLocaleString()
     //       })
     //  }, 1000)
     }
     getformdata(event){
          console.log(this.state.btntext);
          console.log(this.thetitle.value);
          this.setState((prevState)=>{
               return {
                    bt: prevState.bt.concat('dd')
               };
          });
          console.log(this.state.bt);
          event.preventDefault();
     }
     render(){
          return (
          <div className="App">
               <h2>{this.props.match.params.id}</h2>
               <h2>{this.props.match.params.name}</h2>
               <button className="btn btn-primary"><Link className="text-light btn" to="/about">Nest</Link></button>
               <h1 nm='name'>{this.state.currentTime}</h1>
              <form onSubmit={this.getformdata}>
                   <input type="text" placeholder="Enter anything"
                   ref={(title) => this.thetitle = title}
                   />
                   <input type="submit" value="submit"/>
              </form>
          <button onClick={this.getformdata}>{this.state.btntext}</button>
          </div>
          );
     }
}

export default Myapp;
