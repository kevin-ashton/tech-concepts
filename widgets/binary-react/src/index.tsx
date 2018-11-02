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
      <div className="container" style={{textAlign: "center"}}>
        <div className="row">
          <div className="col-12">
            <h2 style={{margin: "20px 0"}}>Number System Widget</h2>
          </div>        
        </div>
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={this.count}>Count</button>
          </div>        
          <div className="col-4">
            <input type="number" value={this.state.currentCount} onChange={this.handleChange}/>
          </div>        
          <div className="col-4">
            <button className="btn" onClick={this.reset}>Reset</button>
          </div>     
        </div>

        <div className="row">
          <div className="col-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <h4 style={{width: "100%"}}>Base 2 (or binary)</h4>
              <div style={{width: "100%"}}>
                <NumberSystemWidget 
                  characters={['0', '1']} 
                  columns={8} 
                  currentCount={this.state.currentCount}>
                </NumberSystemWidget> 
              </div>
            </div>
            <div className="row" style={{marginTop: "20px"}}>
              <h4 style={{width: "100%"}}>Base 10 (or decimal)</h4>
              <div style={{width: "100%"}}>
                <NumberSystemWidget 
                  characters={[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']} 
                  columns={3} 
                  currentCount={this.state.currentCount}>
                </NumberSystemWidget> 
              </div>
            </div>               
          </div> 
          <div className="col-6">
          <h4 style={{width: "100%"}}>Base 16 (or hexadecimal)</h4>
          <div style={{width: "100%"}}>
            <NumberSystemWidget 
              characters={[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']} 
              columns={2} 
              currentCount={this.state.currentCount}>
            </NumberSystemWidget> 
          </div>  
        </div>       
        </div>

                
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
