import React, { Component } from 'react';
import '../scss/ModuleHeader.scss';
import {form} from 'bootstrap-css';

class CustomerForm extends Component{
    render() {
        return(
            <div>
                <h3>{this.props.headerText}</h3>
            </div>
        );
    }
}
export default CustomerForm;