import React, { Component } from "react";
import "./styles.css"; // Import CSS file for styling

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballVisible: false, // Initially, ball is hidden
      position: 0, // Ball's initial left position
    };
  }

  buttonClickHandler = () => {
    this.setState({ ballVisible: true }); // Show ball, hide button
  };

  handleKeyPress = (event) => {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState((prevState) => ({
        position: prevState.position + 5, // Move ball 5px right
      }));
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  renderChoice = () => {
    if (!this.state.ballVisible) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    } else {
      return <div className="ball" style={{ left: this.state.position + "px" }}></div>;
    }
  };

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
