import './App.css';
import Navbar from './core/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Hello World!</div>} />
      </Routes>
    </>
  );
}

export default App;
