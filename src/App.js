import './App.css';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link to="/" className='nav-item'>HomePage</Link>
        <Link to="/about-me" className='nav-item'>About Me</Link>
      </nav>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about-me' element={<AboutMe name="Pablo"/>} />
        </Routes>      
      <Footer />
    </div>
  );
}

export default App;
