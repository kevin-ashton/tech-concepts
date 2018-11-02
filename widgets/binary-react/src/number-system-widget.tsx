import React, { Component } from 'react';
import { render } from 'react-dom';

interface CompProps { 
  characters: string[];
  columns: number;
  currentCount: number;
  }
interface CompState {}

const boxSize = 30;

export default class NumberSystemWidget extends Component<CompProps, CompState> {
  constructor(props) {
    super(props);
  }

  render() {

    let n = this.props.characters.length;

    let maxValue = Math.pow(n, this.props.columns) - 1;
    let exceedsMaxSupportedValue = this.props.currentCount > maxValue;

    let columnOffsetIncrements = [];
    let tracker = this.props.currentCount;
    for(let i = this.props.columns; i > 0; i--) {      
      // Substract one to calculate power of column
      let x = i - 1;
      // Figure out value of each increment for each column
      let v = Math.pow(n,x);      

      let maxValueSupported = v * this.props.columns;
      
      let z = tracker / v;
      if(exceedsMaxSupportedValue) {
        console.log('Too big')
        columnOffsetIncrements.push(this.props.characters.length - 1);
      }
      else if(z > 0) {        
        let increments = Math.floor(z);
        tracker = tracker - increments * v;
        columnOffsetIncrements.push(increments);
      } else {
        columnOffsetIncrements.push(0);
      }
    }

    let columns = [];
    for(let i = 0; i < this.props.columns; i++) {
      columns.push(
        (        
        <div style={ {...columnStyles, ...{ transform: `translate(0, -${boxSize * columnOffsetIncrements[i]}px)` } } } key={i}>
          {this.props.characters.map((c, ci) => <div key={ci} style={ characterStyles}>{c}</div>)}
        </div>
        )
        );
    }

    return (      
      <div style={{ display: 'inline-block', position: 'relative', paddingTop: boxSize * this.props.characters.length, paddingLeft: boxSize, paddingRight: boxSize, paddingBottom: boxSize, outline: '1px solid gray'}}>
        <div style={{ position: 'absolute', top: boxSize * this.props.characters.length, left: boxSize, display: 'inline-block', backgroundColor: 'yellow', opacity: .5, height: boxSize, width: boxSize * this.props.columns}}></div>
        {columns}
      </div>
    );
  }
}

const columnStyles = {
  display: "inline-block",
  outline: "1px solid gray",
  boxSize: "border-box",
  width: boxSize,
  transition: ".1s ease-in-out"
}

const characterStyles = {
  width: boxSize,
  height: boxSize,
  border: "1px solid green",
  display: "flex",
  alignItems: "center" as 'center',
  justifyContent: "center" as 'center'
}

