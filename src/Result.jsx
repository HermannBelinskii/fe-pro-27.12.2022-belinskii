import React, { Component } from "react";

class Winner extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onShowResults}> Show Results </button>
                {this.props.winner && <div>{this.props.winner.symbol} is the winner!</div>}
            </div>
        );
    }
}

export default Winner;
