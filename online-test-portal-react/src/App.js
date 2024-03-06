import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Instruction from "./Pages/Instruction/Instruction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/instruction" element={<Instruction />}></Route>
      </Routes>
    </>
  );
}

export default App;
