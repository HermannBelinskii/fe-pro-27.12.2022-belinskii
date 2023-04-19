import React, { Component } from "react";

class Winner extends Component {
  render() {
    return (
      <>
        {this.props.smileys.some((smiley) => smiley.count > 0) ? (
          <div>
            <button onClick={this.props.onShowResults}>Show Results</button>
            {this.props.winners.map((winner) => (
              <div key={winner.id}>{winner.symbol}</div>
            ))}
          </div>
        ) : (
          <p>Please vote at least once to see the result</p>
        )}
      </>
    );
  }
}

export default Winner;
