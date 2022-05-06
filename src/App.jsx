import './App.css';
import { StopWatch } from './components/StopWatch';
import { Timer } from './components/Timer';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="timer">
        <Routes>
          <Route path="/" element={<Timer />}></Route>
          <Route path="/stopwatch" element={<StopWatch />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;