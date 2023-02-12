import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/cart" element={<Cart />} />
      </Routes>
     
    </div>
  );
}

export default App;
