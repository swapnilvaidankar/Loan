import React, { Component } from 'react';
import '../scss/ChildComponent.scss';

class ChildComponent extends Component {
  render() {
    return (
      <div className="ChildComponent">
            <h2>This is Child Component</h2>
      </div>
    );
  }
}

export default ChildComponent;
