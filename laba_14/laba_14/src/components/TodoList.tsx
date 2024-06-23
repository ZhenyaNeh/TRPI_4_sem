import Todo from './Todo';

interface TodoListProps {
  todos: {
    id: number;
    completed: boolean;
    text: string;
  }[];
  toggleTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleTodo }: TodoListProps) => (
  <ul>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    ))}
  </ul>
);



export default TodoList;