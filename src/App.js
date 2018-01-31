import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SiteHeader from './SiteHeader';
import Board from './Board';
import CustomerForm from './CustomerForm';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-xs-8">
            <SiteHeader/>
          </div>
          <div className="col-xs-2">

          </div>
          <div className="col-xs-2">
              <Board val1="props"/>
          </div>
        </div>
        <div className="row"> 
          <div className="col-sm-12">
            <CustomerForm que1={"Application"}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
