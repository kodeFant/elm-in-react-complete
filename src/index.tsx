import React from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Elm In React</h1>
      <ReactComponent count={count} setCount={setCount} />
      <ElmComponent count={count} setCount={setCount} />
    </div>
  );
}

interface ComponentProps {
  count: number;
  setCount: Function;
}

function ElmComponent({ count, setCount }: ComponentProps) {
  return (
    <div>
      <h2>This is (not yet) an Elm component</h2>
      <div>To be implemented</div>
    </div>
  );
}

function ReactComponent({ count, setCount }: ComponentProps) {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h2>This is a React Component</h2>
      <div>Count: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
