import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./styles.css";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({ todo, setTodo, addTodo }) => {
  return (
    <form onSubmit={addTodo} style={{ margin: "20px" }}>
      <Stack direction="row" spacing={2}>
        <TextField
          style={{ width: "30rem" }}
          id="my-input"
          type="string"
          placeholder="Enter todo"
          color="primary"
          value={todo}
          variant="filled"
          onChange={e => setTodo(e.target.value)}
        />
        <Button
          color="primary"
          type="submit"
          style={{ backgroundColor: "#303841" }}
        >
          ADD <AddCircleOutlineIcon fontSize="large" />
        </Button>
      </Stack>
    </form>
  );
};

export default InputField;
