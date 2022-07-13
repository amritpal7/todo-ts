import React from "react";
import { TodoModel } from "../Model";
import Todo from "./Todo";

import { List, Grid, Paper } from "@mui/material";

interface TodoListProps {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ backgroundColor: "#C19434" }}>
        <List>
          {todos.map(t => (
            <Todo todo={t} key={t.id} todos={todos} setTodos={setTodos} />
          ))}
        </List>
      </Paper>
    </Grid>
  );
};

export default TodoList;
