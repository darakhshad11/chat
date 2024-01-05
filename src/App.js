import './App.css';
import Home from './page/Home';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
