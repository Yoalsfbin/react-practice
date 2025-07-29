import { useState } from "react";
import Greeting from "./components/Greeting";
import InputArea from "./components/InputArea";
import Counter from "./components/Counter";
import FruitInput from "./components/FruitInput";
import FruitList from "./components/FruitList";
import UserInfo from "./components/UserInfo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// TODOリスト
type Task = {
  id: number;
  title: string;
  done: boolean;
};

function App() {
  const [name, setName] = useState("名無し");
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "greeting" | "counter" | "fruit" | "user" | "task"
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

  // TODOリスト
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleDone = (id: number) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
        <button
          onClick={() => setActiveTab("fruit")}
          style={{ marginRight: "0.5rem" }}
        >
          フルーツ
        </button>
        <button
          onClick={() => setActiveTab("user")}
          style={{ marginRight: "0.5rem" }}
        >
          ユーザー
        </button>
        <button
          onClick={() => setActiveTab("task")}
          style={{ marginRight: "0.5rem" }}
        >
          Todoリスト
        </button>
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
      {activeTab === "task" && (
        <>
          <TodoInput onAdd={handleAddTask} />
          <TodoList
            tasks={tasks}
            onToggle={handleToggleDone}
            onDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
}

export default App;
