import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import BreedImage from "./pages/breedImage/BreedImage";
import Breeds from "./pages/breeds/Breeds";
import Index from './pages/Index/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/:letter" element={<Breeds/>}/>
          <Route path="/:letter/:breed" element={<BreedImage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
