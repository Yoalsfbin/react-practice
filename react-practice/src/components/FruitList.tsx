import { useState } from "react";

function FruitSection() {
  const [fruit, setFruit] = useState("");
  const [fruitList, setFruitList] = useState<string[]>([]);

  const handleAddFruit = () => {
    if (fruit.trim() === "") return;
    setFruitList([...fruitList, fruit]);
    setFruit("");
  };

  const handleDeleteFruit = (indexToDelete: number) => {
    const newList = fruitList.filter((_, index) => index !== indexToDelete);
    setFruitList(newList);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>🍎 フルーツを追加しよう</h2>

      <input
        type="text"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)}
        placeholder="例：バナナ"
      />

      <button onClick={handleAddFruit} style={{ marginLeft: "0.5rem" }}>
        追加
      </button>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {fruitList.map((f, index) => (
          <li key={index} style={{ margin: "0.5rem 0" }}>
            {f}
            <button
              onClick={() => handleDeleteFruit(index)}
              style={{ marginLeft: "1rem", color: "red" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitSection;
