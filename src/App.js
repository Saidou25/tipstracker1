import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landingPage" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
