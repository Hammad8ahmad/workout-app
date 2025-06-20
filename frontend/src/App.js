import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About';
import Workouts from './pages/Workouts';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route
             path="/workouts"
             element={<Workouts />}
            />
            <Route
             path="/about"
             element={<About />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

