import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
//import { Login } from "./pages/Login/login";
//import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      {/* <Header visible={false} /> */}
      {/* <Login /> */}
      <Home />
    </ThemeProvider>
  );
}
