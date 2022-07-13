import React, { useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import {
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  List,
  Paper,
} from "@mui/material";
import { TodoModel } from "../Model";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
  index: number;
};

const Todo = ({ todo, setTodos, todos, index }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

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
    <Draggable draggableId={todo.id.toString()} index={index}>
      {provided => (
        <form
          onSubmit={e => updateHandler(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Paper
            elevation={2}
            style={{
              background: "linear-gradient(to top, #09203f 0%, #537895 100%)",
              marginBottom: ".5rem",
            }}
          >
            <List>
              <ListItem>
                {edit ? (
                  <TextField
                    type="string"
                    inputRef={inputRef}
                    value={editTodo}
                    variant="filled"
                    style={{ width: "20rem" }}
                    onChange={e => setEditTodo(e.target.value)}
                  />
                ) : (
                  <ListItemText
                    style={{
                      color: "#f1f1ef",
                      width: "20rem",
                      textDecoration: `${
                        todo.isDone ? "line-through" : "none"
                      }`,
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
            </List>
          </Paper>
        </form>
      )}
    </Draggable>
  );
};

export default Todo;
