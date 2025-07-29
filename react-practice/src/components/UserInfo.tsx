import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

function UserInfo() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // 疑似APIフェッチ（1秒後にデータ取得）
    const fetchUser = () => {
      setTimeout(() => {
        const fakeUser = { id: 1, name: "太郎" };
        setUser(fakeUser);
        console.log("ユーザーを取得しました");
      }, 1000);
    };

    fetchUser(); // 初回に実行
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>📡 ユーザー情報</h2>
      <p>ページを読み込んで挙動を確認してみてください！</p>
      {user ? (
        <p>
          ID: {user.id} / 名前: {user.name}
        </p>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
}

export default UserInfo;
