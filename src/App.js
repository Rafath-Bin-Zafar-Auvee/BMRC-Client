import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from "./components/pages/Home/Home";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
