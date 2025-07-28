type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <h2>こんにちは、{name}さん！（← Greetingコンポーネント）</h2>;
}

export default Greeting;
