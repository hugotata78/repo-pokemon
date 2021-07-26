import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './themeConfig'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
