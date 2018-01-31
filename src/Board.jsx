import React, { Component } from 'react';
import './Board.scss';

class App extends Component {
    componentDidMount() {
        console.log(this.props.val1);
    }
  render() {
    return (
        <div className="board">
            <div className="row">
                <div className="col-sm-12 boardHeader">
                    <h3>What will you use this money for?</h3>
                </div>
            </div>
            <div className="row selectors">
                <div className="col-sm-2">
                    <div className="selector">
                        <span>
                        </span>
                    </div>
                    <small>Home Improvement</small>
                </div>
                <div className="col-sm-2 ">
                    <div className="selector">
                        <span>
                        </span>
                    </div>
                    <small>Debt</small>

                </div>
                <div className="col-sm-2">
                    <div className="selector">
                        <span>
                        </span>
                    </div>
                    <small>Car</small>

                </div>
                <div className="col-sm-2">
                    <div className="selector">
                        <span>
                        </span>
                    </div>
                    <small>Wedding</small>

                </div>
                <div className="col-sm-2">
                    <div className="selector">
                        <span>
                        </span>
                    </div>
                    <small>Holiday</small>

                </div>
                <div className="col-sm-2">
                    <div className="selector">
                        <span>
                        </span>
                    </div>
                    <small>Something</small>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
