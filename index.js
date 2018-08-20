import React from "react";
import ReactDOM from "react-dom";

import Board from "./board";

window.onload = function() {
  const root = document.querySelector("#root");
  console.log(root);
  ReactDOM.render(<App />, root);
};

const keyMap = {
  ArrowDown: { dx: 0, dy: 1 },
  ArrowUp: { dx: 0, dy: -1 },
  ArrowLeft: { dx: -1, dy: 0 },
  ArrowRight: { dx: 1, dy: 0 }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terrain: [
        "gsggsggg",
        "gsgggggg",
        "ggsggggg",
        "ggsssggg",
        "ggggsggg",
        "ggggssgg",
        "gsggsssg",
        "gsggssgg"
      ],
      x: 4,
      y: 4
    };

    this.keyDownBound = e => {
      console.log(e.key);
      const dPos = keyMap[e.key];
      if (dPos) {
        const { x, y } = this.state;
        this.setState({
          x: Math.min(7, Math.max(0, x + dPos.dx)),
          y: Math.min(7, Math.max(0, y + dPos.dy))
        });
      }
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownBound);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownBound);
  }

  render() {
    const { x, y, terrain } = this.state;
    return (
      <div>
        x: {x}
        <br />
        y: {y}
        <Board terrain={terrain} x={x} y={y} />
      </div>
    );
  }
}
