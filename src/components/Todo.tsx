import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import { TodoModel } from "../Model";

type Props = {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
};

const Todo = ({ todo, setTodos, todos }: Props) => {
  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <ListItem>
        <ListItemText style={{ color: "#f1f1ef" }} primary={todo} />
        <IconButton>
          <DoneIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => removeTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </div>
  );
};

export default Todo;
