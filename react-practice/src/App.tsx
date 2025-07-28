import { useState, useEffect } from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

function App() {
  const [name, setName] = useState("名無し");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`名前が変更されました：${name}`);
  }, [name]);

  return (
    <div style={{ padding: "2rem" }}>
      <Greeting name={name} />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前を入力"
      />
      <br />
      <Counter count={count} onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
