import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("名無し");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`名前が変更されました：${name}`);
  }, [name]);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>こんにちは、{name}さん</h1>
      <p>ボタンを {count} 回クリックしました。</p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前を入力"
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      />

      <br />

      <button onClick={() => setCount(count + 1)}>クリック！</button>
    </div>
  );
}

export default App;
