import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";
import { TodoModel } from "./Model";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1 className="heading">Todo-ist</h1>
        <InputField todo={todo} setTodo={setTodo} addTodo={addTodoHandler} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </ThemeProvider>
  );
};

export default App;
