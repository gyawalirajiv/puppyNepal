import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import List from "./views/List";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/list/:id" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
