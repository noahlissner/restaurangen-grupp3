import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/NotFound";
import { Booking } from "./components/pages/Booking";
import { AdminRoute } from "./routes/adminRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="/admin" element={<AdminRoute />}></Route>
      </Routes>
    </>
  );
}

export default App;
