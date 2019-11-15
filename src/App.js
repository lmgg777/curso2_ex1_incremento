import React from "react";

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { currentNumber: 0 };
  }

  increment() {
    this.setState(prevState => ({
      currentNumber: prevState.currentNumber + 1
    }));
  }

  render() {
    return (
      <div className="ui container" style={{paddingTop: "10px"}} >
        <div className="ui segment" style={{display: "flex", justifyContent: "space-around", }}>
          <button onClick={() => this.increment()} className="ui primary button" >Increment</button>
          <div>
            <span>{this.state.currentNumber}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
