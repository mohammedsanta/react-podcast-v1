import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllEpisodes from './home/allEpisode/AllEpisodes';
import About from './home/about/About';

function App() {
  return (
    <>
    
    <Router basename={process.env.PUBLIC_URL}>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<AllEpisodes />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
