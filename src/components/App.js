import React, { Component } from 'react';
import logo from '../logo.svg';
import '../scss/App.css';
import SiteHeader from '../components/SiteHeader';
import Board from '../components/Board';
import CustomerForm from '../components/CustomerForm';
import ModuleHeader from '../components/ModuleHeader';
import SuccessComponent from '../components/SuccessComponent';
import _ from 'lodash';

// const arr1 = [{
//       option1: "Home Improvement",
//       option2: 'Debt',
//       option3: 'Car',
//       option4: 'Wedding',
//       option5: 'Holiday',
//       option6: 'Something'
//   },
//   {
    
//   },
//   ]

class App extends Component {
  constructor(props) {
		super(props);
    this.backToParent = this.backToParent.bind(this);
    this.successMethod = this.successMethod.bind(this);
    this.state = {
      loan : '',
      amount : 0,
      period : 0,
      rateOfInterest : 0,
    };
    }
  backToParent(selectedValue, type){
    console.log("selectedValue");
    console.log(selectedValue);
    this.setState({
      successFlag : false,
    });
    if (type === 'loantype') {
      this.setState({
        loan : selectedValue,
      });
    } else if (type === 'amounttype') {
      this.setState({
        amount : selectedValue,
      });
    } else if (type === 'period') {
      this.setState({
        period : selectedValue,
      });
    }  else {
      this.setState({
        rateOfInterest : selectedValue,
      });
    }
  }

  renderRoundItem(length, type) {
    let returnVar =  _.map(length,(arr, i)=><Board index={i} name={arr.name} backToParent = {this.backToParent} type = {type}/>);
    return (<ul>{returnVar}</ul>);
  }
  successMethod() {
    this.setState({
      successFlag : true,
    });
  }

  render() {
    let array1 = [ {
        name : 'Home Improvement',
      },{
        name : 'Debt',
      },{
        name : 'Car',
      },{
        name : 'Wedding',
      },{
        name : 'Holiday',
      },{
        name : 'Something Else'
      }
    ];
    let array2 = [{
        name : 1000,
      },{
        name : 5000,
      },{
        name : 10000,
      },{
        name : 15000,
      },{
        name : 20000,
      },{
        name : 25000,
      }
    ];
    let array3 = [{
        name : 1,
      },{
        name : 2,
      },{
        name : 3,
      },{
        name : 4,
      },{
        name : 5,
      },{
        name : 6,
      }
    ];  
    let array4 = [{
      name : 10,
    },{
      name : 11,
    },{
      name : 12,
    },{
      name : 13,
    },{
      name : 14,
    },{
      name : 15,
    },
  ];    
    return (
      this.state.successFlag ? <SuccessComponent loan = {this.state.loan} amount={this.state.amount} 
      period = {this.state.period} rateOfInterest = {this.state.rateOfInterest}/> :
      <div className="App container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <SiteHeader/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ModuleHeader headerText="What will you use this money for?"/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {this.renderRoundItem(array1, 'loantype')}  
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ModuleHeader headerText="How much would you like to borrow?"/>
          </div>
        </div>        
        <div className="row">
          <div className="col-sm-12">
            {this.renderRoundItem(array2, 'amounttype')}  
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ModuleHeader headerText="Rate of Interest"/>
          </div>
        </div>        
        <div className="row">
          <div className="col-sm-12">
            {this.renderRoundItem(array4, 'rateOfInterest')}  
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ModuleHeader headerText="Select Period in Year(s)"/>
          </div>
        </div>        
        <div className="row">
          <div className="col-sm-12">
            {this.renderRoundItem(array3, 'period')}  
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-12">
            <ModuleHeader headerText="What's your annual income?"/>
          </div>
        </div>        
        <div className="row">
          <CustomerForm que1={"Annual Income"} que2={"What is your email address"} que3={"Please re-enter your email address"} que4={"What's your name"} que5={"Date of Birth"} que6={"Your Address"}/>
        </div>
        <div>
            <span>Loan Name       = {this.state.loan}</span><br/>
            <span>Amount       = {this.state.amount}</span><br/>
            <span>Rate Of Interest       = {this.state.rateOfInterest}</span><br/>
            <span>Period       = {this.state.period}</span><br/>
            <button className="btn btn-primary" onClick={this.successMethod}>Get Results</button>
        </div>

      </div>
    );
  }
}

export default App;
