import React, { Component } from 'react';
import './CustomerForm.scss';

class CustomerForm extends Component{
    render() {
        return(
            <div className="customerform_container">
                <div className="question">
                    <label>{this.props.que1}</label>
                </div>
                <div className="answer">
                </div>
            </div>
        );
    }
}
export default CustomerForm;