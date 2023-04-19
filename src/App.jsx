import React, { Component } from "react";
import Winner from "./components/Winner";
import Smiley from "./components/Smiley";
import classes from './App.module.scss'


class App extends Component {

  state = {
    smileys: [
      { id: 1, symbol: "🙂", count: 0 },
      { id: 2, symbol: "🙁", count: 0 },
      { id: 3, symbol: "😔", count: 0 }
    ],
    winners: []
  };

  handleSmileyClick = (id) => {
    this.setState((prevState) => ({
      smileys: prevState.smileys.map((smiley) => {
        if (smiley.id === id) {
          return { ...smiley, count: smiley.count + 1 };
        }
        return smiley;
      })
    }));
  };

  handleShowResults = () => {
    const shouldShowResults = this.state.smileys.some(smiley => smiley.count > 0);
  
    if (shouldShowResults) {
      const sortedSmileys = [...this.state.smileys].sort((a, b) => b.count - a.count);
      const maxCount = sortedSmileys[0].count;
      const winners = sortedSmileys.filter((smiley) => smiley.count === maxCount);
      this.setState({ winners: winners });
    }
  };
  render() {
    return (
      <div className={classes.app}>
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
          winners={this.state.winners}
        />
      </div>
    );
  }
}

export default App;
