import React from "react";
import { TodoModel } from "../Model";
import Todo from "./Todo";

import { Grid, Stack, Box, Divider } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

interface TodoListProps {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <Stack direction="row" spacing={3}>
      <Box
        sx={{
          p: 2,
          backgroundColor: "#303841",
          width: "20rem",
        }}
      >
        <Grid item xs={12} md={6}>
          {todos.map(t => (
            <Todo todo={t} key={t.id} todos={todos} setTodos={setTodos} />
          ))}
        </Grid>
      </Box>
      <Divider orientation="vertical" flexItem>
        Todo <RemoveDoneIcon /> - <DoneOutlineIcon />
        Done
      </Divider>
      <Box
        sx={{
          p: 2,
          backgroundColor: "#303841",
          width: "20rem",
        }}
      >
        <Grid item xs={12} md={6}>
          {todos.map(t => (
            <Todo todo={t} key={t.id} todos={todos} setTodos={setTodos} />
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default TodoList;
