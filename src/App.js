import './App.css';
import Home from './page/Home';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar';
import Blog from './page/Blog';
import Pricing from './page/Pricing';
import Sign from './page/Sign';


function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sign" element={<Sign />} />

      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
