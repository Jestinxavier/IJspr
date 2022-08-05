import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Routes from "./routes/index";
import ThemeContext from "./theme";
import LocalStorageProvider from "./contexts/LocalStorageProvider";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <ThemeContext>
        <LocalStorageProvider>
          <SnackbarProvider maxSnack={5}>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </SnackbarProvider>
        </LocalStorageProvider>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
