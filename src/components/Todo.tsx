import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { ListItem, ListItemText, IconButton, TextField } from "@mui/material";
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

  const updateHandler = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(prevTodos => {
      return prevTodos.map(todo =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      );
    });
    setEdit(!edit);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <form onSubmit={e => updateHandler(e, todo.id)}>
      <ListItem>
        {edit ? (
          <TextField
            type="string"
            value={editTodo}
            variant="filled"
            style={{ width: "30rem" }}
            onChange={e => setEditTodo(e.target.value)}
          />
        ) : (
          <ListItemText
            style={{
              color: "#f1f1ef",
              width: "30rem",
              textDecoration: `${todo.isDone ? "line-through" : "none"}`,
            }}
            primary={todo.todo}
          />
        )}

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
    </form>
  );
};

export default Todo;
