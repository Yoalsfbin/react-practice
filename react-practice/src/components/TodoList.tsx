type Task = {
  id: number;
  title: string;
  done: boolean;
};

type Props = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoList({ tasks, onToggle, onDelete }: Props) {
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {tasks.map((task) => (
        <li key={task.id} style={{ margin: "0.5rem 0" }}>
          <label
            style={{ textDecoration: task.done ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggle(task.id)}
              style={{ marginRight: "0.5rem" }}
            />
            {task.title}
          </label>
          <button
            onClick={() => onDelete(task.id)}
            style={{ marginLeft: "1rem", color: "red" }}
          >
            削除
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
