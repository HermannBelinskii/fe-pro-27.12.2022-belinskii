import React, { Component } from "react";

class Winner extends Component {
    render() {
        return (
          <div>
            <button onClick={this.props.onShowResults}>Show Results</button>
            {this.props.winners.map((winner) => (
              <div key={winner.id}>{winner.symbol}</div>
            ))}
          </div>
        );
      }
}

export default Winner;
