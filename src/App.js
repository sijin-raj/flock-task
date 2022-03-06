import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./Components/Home/home"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/register" element={<Register />} /> */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;