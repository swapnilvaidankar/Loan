import React, { Component } from 'react';

class SuccessComponent extends Component {

    constructor(props) {
        super(props);
        this.calculateLoan = this.calculateLoan.bind(this);
        this._onChangeAmount=this._onChangeAmount.bind(this);
        this._onChangeRate = this._onChangeRate.bind(this);
        this._onChangePeriod = this._onChangePeriod.bind(this);
        this.state = {
            monthlyloan : 0,
            newAmount : this.props.amount,
            rateOfInterest : this.props.rateOfInterest,
            period : this.props.period,
            extraAmount : 0,
            finalAmount : 0,
          };
    }
    calculateLoan() {
        let amount = Number(this.state.newAmount);
        let interest = Number(this.state.rateOfInterest);
        let noOfMonths = Number(this.state.period) * 12;
        let differenceAmount = Number(((amount*interest)/100 * noOfMonths));
        let totalLoanAmount = Number(amount) + differenceAmount;
       
        console.log("totalLoanAmount" + totalLoanAmount);
        this.setState({
            monthlyloan : totalLoanAmount/noOfMonths,
            extraAmount : differenceAmount,
            finalAmount : totalLoanAmount,
        });
        console.log("monthlyloan" + this.state.monthlyloan);
    }
    _onChangeAmount(e){
        this.setState({newAmount:e.target.value,
            monthlyloan : 0,
            });
    }
    _onChangeRate(e){
        this.setState({rateOfInterest:e.target.value,
            monthlyloan : 0,
            });
    }
    _onChangePeriod(e){
        this.setState({period:e.target.value,
            monthlyloan : 0,
            });
    }
  render() {
    return (
        <div><h1>SuccessComponent !!!!!!!!!!!</h1>
        <span>Loan Name       = {this.props.loan}</span><br/>
        <span>Amount       = {this.props.amount}</span><br/>
        Amount : <input className="form-control" type="text" value={this.state.newAmount} onChange ={this._onChangeAmount}/>
        Rate Of Interest :  <input className="form-control" type="text" value={this.state.rateOfInterest} onChange ={this._onChangeRate}/>
        Period (yesrs) : <input className="form-control" type="text" value={this.state.period} onChange ={this._onChangePeriod}/>
        <button className="btn btn-primary" onClick={this.calculateLoan}>Calculate</button><br/>
        {this.state.monthlyloan >0 ? <span> Simple Interest Calculation = {this.state.monthlyloan}</span> : ''}<br/>
        {this.state.monthlyloan >0 ?<label> Difference Amount = {this.state.extraAmount}</label> : ''}<br/>
        {this.state.monthlyloan >0 ?<label> Total Payable Loan Amount = {this.state.finalAmount}</label> : ''}

        </div>

    );
  }
}

export default SuccessComponent;
