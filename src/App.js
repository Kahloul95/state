import './App.css';
import React , {Component} from 'react';
import Counter from './Components/Counter'

class App extends Component {
  state = {
    isVisible : false,
  }
  toogleVisibility = () =>{
    this.setState({isVisible : !this.state.isVisible})

  }
 
  render () {
    return (
      <div className="App">
        Workshop state
        <br/>
      <button className="visibility-btn" onClick={this.toogleVisibility}>
        {this.state.isVisible ? "Hide Counter" : "Show Counter"}
        </button>
      {this.state.isVisible ? <Counter/> : ""}

      </div>
    );

  }
 
}

export default App;
