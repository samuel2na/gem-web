import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Login } from "./pages/login";
import { Header } from "./components/Header";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header visible={true} />
      <Login />
    </ThemeProvider>
  );
}
