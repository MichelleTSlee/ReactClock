import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { time: new Date().toLocaleString() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleString() });
    }, 1000);
  }

  render() {
    return <div> {this.state.time} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
