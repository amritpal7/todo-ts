import React from "react";
import { Input, Button, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form>
      <Stack spacing={2} direction="row">
        <ThemeProvider theme={theme}>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            placeholder="Enter todo"
            color="primary"
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
          <Button color="primary">ADD</Button>
        </ThemeProvider>
      </Stack>
    </form>
  );
};

export default InputField;
