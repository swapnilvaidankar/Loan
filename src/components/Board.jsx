import React, { Component } from 'react';
import '../scss/Board.scss';

const arr1 =["Home","Debt","Car"];
const doubled = arr1.map((number) => <li>{number}</li>);
console.log(doubled);
class Board extends Component {
    constructor(props) {
		super(props);
        this.callChildMethod = this.callChildMethod.bind(this);
    }
    callChildMethod () {
        this.props.backToParent(this.props.name, this.props.type);
    }
  render() {
    return (
        <li><div class="round" onClick = {this.callChildMethod}></div>{this.props.name}</li>
    );
  }
}

export default Board;
