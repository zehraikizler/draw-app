import './App.css';
import Home from './components/Home';
import MakeDraw from './components/MakeDraw';
import Navbar from './components/Navbar';
import Vote from './components/Vote';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/makedraw" element={<MakeDraw />} />
            <Route path="/vote" element={<Vote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
