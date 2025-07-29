import { useState } from "react";

type Props = {
  onAddFruit: (fruit: string) => void;
};

function FruitInput({ onAddFruit }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    onAddFruit(input);
    setInput("");
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="例）りんご"
      />
      <button onClick={handleSubmit} style={{ marginLeft: "0.5rem" }}>
        追加
      </button>
    </div>
  );
}

export default FruitInput;
