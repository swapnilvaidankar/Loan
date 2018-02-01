import React, { Component } from 'react';
import '../scss/SiteHeader.scss';


class SiteHeader extends Component {
  render() {
    return (
        <div className="SiteHeader">
            <ul className="menu">
                <li className="item"><a href="#/">Home</a></li>
                <li className="item"><a href="#/">Courses</a></li>
                <li className="item"><a href="#/">About us</a></li>
                <li className="item"><a href="#/">Contact us</a></li>
            </ul>

        </div>
    );
  }
}

export default SiteHeader;
