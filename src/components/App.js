import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballVisible: false,
      position: 0,
    };

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  buttonClickHandler() {
    this.setState({ ballVisible: true });
  }

  handleKeyPress(event) {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState((prevState) => ({
        position: prevState.position + 5,
      }));
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  renderChoice() {
    if (!this.state.ballVisible) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    } else {
      return <div className="ball" style={{ left: this.state.position + "px" }}></div>;
    }
  }

  render() {
    return (
      <div className="game-container">
        <h1>Golf Game ⛳</h1>
        {this.renderChoice()}
      </div>
    );
  }
}

export default App;
