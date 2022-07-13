import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";
import { TodoModel } from "./Model";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const theme = createTheme({
  palette: {
    primary: {
      main: "#303841",
    },
  },
});

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [completed, setCompleted] = useState<TodoModel[]>([]);

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todo) return;

    setTodos(prevState => [
      ...prevState,
      { id: Date.now(), todo: todo, isDone: false },
    ]);
    setTodo("");
  };

  console.log(todos);

  const onDragEndHandler = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;
    if (
      destination.droppableId === source.droppableId &&
      source.index === destination.index
    )
      return;

    let add,
      active = todos,
      finished = completed;
    if (source.droppableId === "activeTodos") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = finished[source.index];
      finished.splice(source.index, 1);
    }

    if (destination.droppableId === "activeTodos") {
      active.splice(destination.index, 0, add);
    } else {
      finished.splice(destination.index, 0, add);
    }

    setCompleted(finished);
    setTodos(active);

    console.log(result);
  };
  return (
    <ThemeProvider theme={theme}>
      <DragDropContext onDragEnd={onDragEndHandler}>
        <div className="App">
          <h1 className="heading">Todo-ist</h1>
          <InputField todo={todo} setTodo={setTodo} addTodo={addTodoHandler} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completed={completed}
            setCompleted={setCompleted}
          />
        </div>
      </DragDropContext>
    </ThemeProvider>
  );
};

export default App;
