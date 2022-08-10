import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import List from "./views/List";
import Details from "./views/Details";
import FilterPage from "./views/FilterPage"
import Login from "./views/auth/Login"
import Dashboard from "./views/auth/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from "components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list/:id" element={<List />} />
        <Route path="/details" element={<Details />} />
        <Route path="/filterpage" element={<FilterPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        {/* <Route element={<ProtectedRoute />}>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;