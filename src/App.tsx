import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import Modern from "./pages/Modern";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/modern" element={<Modern />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;