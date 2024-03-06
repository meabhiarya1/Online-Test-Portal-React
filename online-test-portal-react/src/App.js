import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
