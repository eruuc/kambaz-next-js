import { ListGroupItem, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo }: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem key={todo.id}>
      <Button onClick={() => deleteTodo(todo.id)}
              id="wd-delete-todo-click"> Delete </Button>
      <Button onClick={() => setTodo(todo)}
              id="wd-set-todo-click"> Edit </Button>
      {todo.title}    </ListGroupItem>);}