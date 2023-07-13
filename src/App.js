import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import AllEpisodes from './home/allEpisode/AllEpisodes';
import About from './home/about/About';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<AllEpisodes />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
