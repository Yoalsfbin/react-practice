import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

function TodoInput({ onAdd }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return;
    onAdd(input.trim());
    setInput("");
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="やることを入力"
      />
      <button onClick={handleSubmit} style={{ marginLeft: "0.5rem" }}>
        追加
      </button>
    </div>
  );
}

export default TodoInput;
