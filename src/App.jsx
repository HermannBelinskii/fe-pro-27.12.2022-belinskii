import React, { Component } from "react";
import Winner from "./Result";
import Smiley from "./Smiley";

class App extends Component {

  state = {
    smileys: [
      { id: 1, symbol: "🙂", count: 0 },
      { id: 2, symbol: "🙁", count: 0 },
      { id: 3, symbol: "😔", count: 0 }
    ],
    winner: null
  };

  handleSmileyClick = (id) => {
    this.setState(prevState => ({
      smileys: prevState.smileys.map(smiley => {
        if (smiley.id === id) {
          return { ...smiley, count: smiley.count + 1 };
        }
        return smiley;
      })
    }));
  };

  handleShowResults = () => {
    const setWinner = this.state.smileys.reduce((prev, current) => (prev.count > current.count) ? prev : current);
    this.setState({ winner: setWinner });
  };

  render() {
    return (
      <div>
        {this.state.smileys.map(({ id, symbol, count }) => (
          <Smiley
            key={id}
            symbol={symbol}
            count={count}
            onClick={() => this.handleSmileyClick(id)}
          />
        ))}
        <Winner
          smileys={this.state.smileys}
          onShowResults={this.handleShowResults}
          winner={this.state.winner}
        />
      </div>
    );
  }
}

export default App;
