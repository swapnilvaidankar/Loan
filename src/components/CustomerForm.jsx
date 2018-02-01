import React, { Component } from 'react';
import '../scss/CustomerForm.scss';
import {form} from 'bootstrap-css';

class CustomerForm extends Component{
    render() {
        return(
            <div className="container customerform_container">
                <div className="row">
                    <div className="question col-sm-6">
                        <label>{this.props.que1}</label>
                    </div>
                    <div className="answer col-sm-6">
                        <input className="form-control" type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="question col-sm-6">
                        <label>{this.props.que2}</label>
                    </div>
                    <div className="answer col-sm-6">
                        <input className="form-control" type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="question col-sm-6">
                        <label>{this.props.que3}</label>
                    </div>
                    <div className="answer col-sm-6">
                        <input className="form-control" type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="question col-sm-6">
                        <label>{this.props.que4}</label>
                    </div>
                    <div className="answer col-sm-6">
                        <input className="form-control" type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="question col-sm-6">
                        <label>{this.props.que5}</label>
                    </div>
                    <div className="answer col-sm-6">
                        <input className="form-control" type="text"/>
                    </div>
                </div>                                                                
            </div>
        );
    }
}
export default CustomerForm;