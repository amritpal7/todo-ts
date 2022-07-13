import React from "react";
import { TodoModel } from "../Model";
import Todo from "./Todo";

import { Grid, Stack, Box, Divider, Typography } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import { Droppable } from "react-beautiful-dnd";
interface TodoListProps {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
  completed: TodoModel[];
  setCompleted: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
  completed,
  setCompleted,
}) => {
  return (
    <Stack direction="row" spacing={3}>
      <Box
        sx={{
          p: 2,
          backgroundColor: "#303841",
          width: "30rem",
        }}
      >
        <Typography
          variant="h6"
          style={{
            color: "#f1f1ef",
            textAlign: "center",
            marginBottom: ".3rem",
          }}
        >
          Actives
        </Typography>
        <Droppable droppableId="activeTodos">
          {provided => (
            <Grid
              item
              xs={12}
              md={6}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todos.map((t, index) => (
                <Todo
                  index={index}
                  todo={t}
                  key={t.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </Box>
      <Divider orientation="vertical" flexItem>
        Todo <RemoveDoneIcon /> - <DoneOutlineIcon />
        Done
      </Divider>
      <Box
        sx={{
          p: 2,
          backgroundColor: "#303841",
          width: "30rem",
        }}
      >
        <Typography
          variant="h6"
          style={{
            color: "#f1f1ef",
            textAlign: "center",
            marginBottom: ".3rem",
          }}
        >
          Completed
        </Typography>
        <Droppable droppableId="completedTodos">
          {provided => (
            <Grid
              item
              xs={12}
              md={6}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {completed.map((t, index) => (
                <Todo
                  index={index}
                  todo={t}
                  key={t.id}
                  todos={completed}
                  setTodos={setCompleted}
                />
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </Box>
    </Stack>
  );
};

export default TodoList;
