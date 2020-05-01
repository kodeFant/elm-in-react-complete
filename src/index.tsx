import React from "react";
import ReactDOM from "react-dom";
import { Elm } from "./Elm/Main";

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
  const [app, setApp] = React.useState<Elm.Main.App | undefined>();
  const elmRef = React.useRef(null);

  const elmApp = () => Elm.Main.init({ node: elmRef.current, flags: null });

  React.useEffect(() => {
    setApp(elmApp());
  }, []);

  return <div ref={elmRef}></div>;
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
