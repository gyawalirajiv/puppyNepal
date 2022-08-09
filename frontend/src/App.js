import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import List from "./views/List";
import Details from "./views/Details";
import FilterPage from "./views/FilterPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/list/:id" element={<List />} />
        <Route path="/details" element={<Details />} />
        <Route path="/filterpage" element={<FilterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
