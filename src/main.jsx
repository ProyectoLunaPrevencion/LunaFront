import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./components/Header/Header.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./index.css";
import { getUserById } from "./services/authService";

// Crear el contexto para el acceso
export const AccessContext = createContext();

function App() {
  const localStorageAccess = localStorage.getItem("access");
  const [access, setAccess] = useState(localStorageAccess);
  const [user, setUser] = useState();

  const fetchUserData = useCallback(async (token) => {
    try {
      const userData = await getUserById(token);
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Implementar lógica de actualización de token si es necesario
    }
  }, []);

  useEffect(() => {
    if (access && !user) {
      fetchUserData(access);
    }
  }, [access, fetchUserData, user]);

  const contextValue = useMemo(
    () => ({
      access,
      setAccess,
      user,
      setUser,
    }),
    [access, user]
  );

  return (
    <AccessContext.Provider value={contextValue}>
      <Theme accentColor="pink" className="background">
        <Toaster />
        <Header />
        <AppRoutes />
      </Theme>
    </AccessContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
