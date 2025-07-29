type CounterProps = {
  count: number;
  onClick: () => void;
};

function Counter({ count, onClick }: CounterProps) {
  return (
    <div>
      <p>ボタンを {count} 回クリックしました。</p>
      <button onClick={onClick}>クリック！</button>
    </div>
  );
}

export default Counter;
