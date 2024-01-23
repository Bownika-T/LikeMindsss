import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
//import Profile from "./pages/profile/Profle";
import Register from "./pages/register/Register";
import {BrowserRouter,Routes,Route } from "react-router-dom";
//import { Link } from "react-router-dom";
import './App.css';
function App() {
  return (
    <  BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
     /*<><Login /><Home /><Register /></>*/
  );
}

export default App;
