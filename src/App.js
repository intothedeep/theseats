import { ThemeProvider } from "@mui/material/styles";

import Position from "./pages/Position";
import useSystemTheme from "./hooks/useSystemTheme";

function App() {
  const { theme } = useSystemTheme();

  return (
    <ThemeProvider theme={theme}>
        <Position />
    </ThemeProvider>
  );
}

export default App;
