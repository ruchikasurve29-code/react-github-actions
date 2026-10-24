
import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>React CI/CD Project</h1>
      <h2>Continuous Integration Using GitHub Actions</h2>

      <p>
        This React application is automatically built and tested using GitHub Actions.
      </p>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
