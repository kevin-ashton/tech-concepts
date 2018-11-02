import React, { Component } from 'react';
import { render } from 'react-dom';
import NumberSystemWidget from './number-system-widget';
import './style.css';

interface AppProps { }
interface AppState {
  currentCount: number;
}


class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0
    };
  }

  count = () => {
    this.setState({currentCount: this.state.currentCount + 1})
  }

  reset = () => {
    this.setState({currentCount: 0})
  }

  handleChange = (e) => {
    this.setState({currentCount: parseInt(e.target.value) | 0});
  }

  render() {

    return (      
      <div className="container" style={{marginTop: "30px"}}>
        <div>
          <input type="number" value={this.state.currentCount} onChange={this.handleChange}/>
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.count}>Count</button>           
        </div>
        <hr /> 
        <div>
          <button className="btn btn-primary" onClick={this.reset}>Reset</button>
        </div>  
        <hr /> 

        <div>
          <NumberSystemWidget 
            characters={['0', '1']} 
            columns={8} 
            currentCount={this.state.currentCount}>
          </NumberSystemWidget>
          <div style={{width: 50, display: "inline-block"}}></div>          
          <NumberSystemWidget 
            characters={[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']} 
            columns={2} 
            currentCount={this.state.currentCount}>
          </NumberSystemWidget>
          <div style={{width: 50, display: "inline-block"}}></div>          
          <NumberSystemWidget 
            characters={[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']} 
            columns={2} 
            currentCount={this.state.currentCount}>
          </NumberSystemWidget>
          
        </div>

        
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
