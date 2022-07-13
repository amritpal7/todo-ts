import React, { useState } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const markDone = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const updateTodo = (id: number) => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <ListItem>
        <ListItemText
          style={{
            color: "#f1f1ef",
            width: "30rem",
            textDecoration: `${todo.isDone ? "line-through" : "none"}`,
          }}
          primary={todo.todo}
        />

        <IconButton onClick={() => markDone(todo.id)}>
          <DoneIcon />
        </IconButton>
        <IconButton onClick={() => updateTodo(todo.id)}>
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
