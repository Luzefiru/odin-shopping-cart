import './App.css';
import Navbar from './core/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Hello World!</div>} />
        <Route path="/catalog" element={<div>Catalog</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </>
  );
}

export default App;
