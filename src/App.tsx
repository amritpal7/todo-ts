import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  console.log(todo);
  return (
    <div className="App">
      <h1 className="heading">React</h1>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
