import React from "react";

class Smiley extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.symbol}</span>
                <button onClick={this.props.onClick}>TAP!</button>
                <span> - {this.props.count}</span>
            </div>
        );
    }
}

export default Smiley;
