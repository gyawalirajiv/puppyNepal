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
import DashboardCategory from "./views/auth/DashboardCategory";
import DashboardProduct from "./views/auth/DashboardProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list/:id/:title" element={<List />} />
        <Route path="/details/:productId" element={<Details />} />
        <Route path="/filterpage" element={<FilterPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route exact path="/admin/dashboard/categories" element={<DashboardCategory/>}/>
        <Route exact path="/admin/dashboard/products" element={<DashboardProduct/>}/>
        <Route exact path="/admin/dashboard" element={<Dashboard/>}/>
        {/* <Route element={<ProtectedRoute />}>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
