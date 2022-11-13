import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie/Movie";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
