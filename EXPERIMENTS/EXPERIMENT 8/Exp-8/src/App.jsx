import { useState } from "react";
import React from "react";
function App(){
  const [count, setCount] = useState(0);
//increment fxn
const increment = () => {
  setCount(count + 1);
};
//decrement fxn
const decrement = () => {
  setCount(count - 1);
};
  return(
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onclick={increment}>Increment +</button>
      <button onclick={decrement}>Decrement -</button>
    </div>
  );
}
export default App;