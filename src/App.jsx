import { Routes, Router, Route, Link } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}

export default App;
