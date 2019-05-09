import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    const name = "Larry";
    const showHello = true;
    const showMath = true;
    const numb1 = 40;
    const numb2 = 23;

    let math;
    if (showMath) {
      math = (
        <h4>
          {numb1} + {numb2} = {numb1 + numb2}
        </h4>
      );
    } else {
      math = null;
    }

    return (
      <div className="App">
        <h1>The app component</h1>
        {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
        {math}
      </div>
    );
  }
}

export default App;
