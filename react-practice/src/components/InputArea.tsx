type InputAreaProps = {
  onNameChange: (newName: string) => void;
};

function InputArea({ onNameChange }: InputAreaProps) {
  return (
    <input
      type="text"
      placeholder="名前を入力"
      onChange={(e) => onNameChange(e.target.value)}
    />
  );
}

export default InputArea;
