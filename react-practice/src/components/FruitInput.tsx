import { useState } from "react";

type Props = {
  onAddFruit: (fruit: string) => void;
};

function FruitInput({ onAddFruit }: Props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const trimmed = input.trim();

    if (trimmed === "") {
      setError("フルーツ名を入力してください。");
      return;
    }

    if (trimmed.length > 10) {
      setError("10文字以内で入力してください。");
      return;
    }

    // バリデーションOK
    onAddFruit(trimmed);
    setInput("");
    setError(""); // エラーもリセット
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError(""); // 入力中はエラー非表示に
        }}
        placeholder="フルーツ名（例：りんご）"
      />
      <button onClick={handleSubmit} style={{ marginLeft: "0.5rem" }}>
        追加
      </button>

      {/* エラーメッセージ表示 */}
      {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}
    </div>
  );
}

export default FruitInput;
