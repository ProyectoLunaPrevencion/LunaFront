import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { MiRefugio } from "../pages/MiRefugio/MiRefugio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute allowedRoles={["ESTUDIANTE"]} />}>
          <Route path="/mi-refugio" element={<MiRefugio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
