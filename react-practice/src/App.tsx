import { useState } from "react";
import Greeting from "./components/Greeting";
import InputArea from "./components/InputArea";
import Counter from "./components/Counter";
import FruitList from "./components/FruitList";

function App() {
  const [name, setName] = useState("名無し");
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<"greeting" | "counter" | "fruit">(
    "greeting"
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React練習アプリ</h1>

      {/* タブ切り替え */}
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => setActiveTab("greeting")}
          style={{ marginRight: "0.5rem" }}
        >
          名前
        </button>
        <button
          onClick={() => setActiveTab("counter")}
          style={{ marginRight: "0.5rem" }}
        >
          カウント
        </button>
        <button onClick={() => setActiveTab("fruit")}>フルーツ</button>
      </div>

      {/* タブに応じた表示切り替え */}
      {activeTab === "greeting" && (
        <>
          <Greeting name={name} />
          <InputArea onNameChange={(newName) => setName(newName)} />
        </>
      )}

      {activeTab === "counter" && (
        <Counter count={count} onClick={() => setCount(count + 1)} />
      )}

      {activeTab === "fruit" && <FruitList />}
    </div>
  );
}

export default App;
