type CounterProps = {
  count: number;
  onClick: () => void;
};

function Counter(props: CounterProps) {
  return (
    <div>
      <p>ボタンを {props.count} 回クリックしました。</p>
      <button onClick={props.onClick}>クリック！</button>
    </div>
  );
}

export default Counter;
