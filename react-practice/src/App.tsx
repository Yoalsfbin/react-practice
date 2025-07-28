import Greeting from "./components/Greeting";
import InputArea from "./components/InputArea";
import Counter from "./components/Counter";
import FruitList from "./components/FruitList";
import { useState } from "react";

function App() {
  const [name, setName] = useState("名無し");
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React練習アプリ</h1>

      {/* 名前セクション */}
      <Greeting name={name} />
      <InputArea onNameChange={(newName) => setName(newName)} />

      {/* カウントセクション */}
      <Counter count={count} onClick={() => setCount(count + 1)} />

      {/* フルーツセクション（新規） */}
      <FruitList />
    </div>
  );
}

export default App;
