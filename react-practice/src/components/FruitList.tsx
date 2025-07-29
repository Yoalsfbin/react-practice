import { useState } from "react";

type Props = {
  fruits: string[];
  onDeleteFruit: (index: number) => void;
  onUpdateFruit: (index: number, newName: string) => void;
};

function FruitList({ fruits, onDeleteFruit, onUpdateFruit }: Props) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState("");

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditingValue(fruits[index]);
  };

  const handleSave = () => {
    if (editingIndex === null) return;
    onUpdateFruit(editingIndex, editingValue);
    setEditingIndex(null);
    setEditingValue("");
  };

  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {fruits.map((fruit, index) => (
        <li key={index} style={{ margin: "0.5rem 0" }}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button onClick={handleSave} style={{ marginLeft: "0.5rem" }}>
                保存
              </button>
            </>
          ) : (
            <>
              {fruit}
              <button
                onClick={() => handleEdit(index)}
                style={{ marginLeft: "0.5rem" }}
              >
                ✏️ 編集
              </button>
              <button
                onClick={() => onDeleteFruit(index)}
                style={{ marginLeft: "0.5rem", color: "red" }}
              >
                ❌ 削除
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default FruitList;
