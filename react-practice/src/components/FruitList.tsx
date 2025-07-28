// src/components/FruitSection.tsx
import { useState } from "react";

function FruitSection() {
  const [fruit, setFruit] = useState("");
  const [fruitList, setFruitList] = useState<string[]>([]);

  const handleAddFruit = () => {
    if (fruit.trim() === "") return;
    setFruitList([...fruitList, fruit]);
    setFruit("");
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

      <ul>
        {fruitList.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitSection;
