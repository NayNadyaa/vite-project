import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white gap-4">
        <div className="flex flex-row">
          <div className="basis-1/3">
            <p className="font-bold">Mini Project.</p>
          </div>
          <div className="basis-2/3 flex justify-end gap-8 mr-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
