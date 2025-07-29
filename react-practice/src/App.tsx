import { useState } from "react";
import Greeting from "./components/Greeting";
import InputArea from "./components/InputArea";
import Counter from "./components/Counter";
import FruitInput from "./components/FruitInput";
import FruitList from "./components/FruitList";
import UserInfo from "./components/UserInfo";

function App() {
  const [name, setName] = useState("名無し");
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "greeting" | "counter" | "fruit" | "user"
  >("greeting");

  //フルーツセクション用
  const [fruits, setFruits] = useState<string[]>([]);

  const handleAddFruit = (newFruit: string) => {
    if (newFruit.trim() === "") return;
    setFruits([...fruits, newFruit]);
  };

  const handleDeleteFruit = (indexToDelete: number) => {
    const newList = fruits.filter((_, index) => index !== indexToDelete);
    setFruits(newList);
  };

  const handleUpdateFruit = (index: number, newName: string) => {
    if (newName.trim() === "") return;
    const newList = [...fruits];
    newList[index] = newName;
    setFruits(newList);
  };

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
        <button onClick={() => setActiveTab("user")}>ユーザー</button>
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

      {activeTab === "fruit" && (
        <>
          <FruitInput onAddFruit={handleAddFruit} />
          <FruitList
            fruits={fruits}
            onDeleteFruit={handleDeleteFruit}
            onUpdateFruit={handleUpdateFruit}
          />
        </>
      )}
      {activeTab === "user" && <UserInfo />}
    </div>
  );
}

export default App;
