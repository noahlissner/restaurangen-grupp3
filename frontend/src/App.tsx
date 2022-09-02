import { Routes, Route } from "react-router-dom";
import { AdminRoute } from "./routes/adminRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<>Nice</>} />
      <Route path="/admin" element={<AdminRoute />} />
    </Routes>
  );
}

export default App;
