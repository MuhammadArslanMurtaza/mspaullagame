import React from 'react';

class App extends React.Component {
  oprationopt() {
    console.log('called');
    this.props.history.push('/asrlan/123');

  }
  render (){
    return(
    <div className="App">
               <h1 nm='name'>Hello</h1>
               <button onClick={this.oprationopt.bind(this)}>aboutus</button>
              <form>
                   <input type="text" placeholder="Enter anything"
                   
                   />
                   <input type="submit" value="submit"/>
              </form>
          <button>submit</button>
          </div>
  );
}
}

export default App;
