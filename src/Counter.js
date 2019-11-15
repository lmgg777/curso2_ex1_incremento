import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentNumber: this.props.initialNumber };
  }

  increment() {
    this.setState(prevState => ({
      currentNumber: prevState.currentNumber + 1
    }));
  }

  decrement() {
    if (this.state.currentNumber > this.props.initialNumber) {
      this.setState(prevState => ({
        currentNumber: prevState.currentNumber - 1
      }));
    }
  }

  render() {
    return (
      <div
        className="ui segment"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <button onClick={() => this.increment()} className="ui primary button">
          Increment
        </button>
        <button onClick={() => this.decrement()} className="ui primary button">
          Decrement
        </button>
        <div>
          <span>{this.state.currentNumber}</span>
        </div>
      </div>
    );
  }
}

export default Counter;
