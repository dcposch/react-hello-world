import React from "react";
import ReactDOM from "react-dom";

window.onload = function() {
  const root = document.querySelector("#root");
  console.log(root);
  ReactDOM.render(<App />, root);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["test 1"]
    };
  }

  render() {
    return (
      <div>
        <h1>supp</h1>
        <div>
          {this.state.items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}
