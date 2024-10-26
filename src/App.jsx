import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Sources from './pages/sources/Sources';
import Contact from './pages/contact/Contact';
import Nav from './components/nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/Sources' element={<Sources />}/>
        <Route path='/contact' element={<Contact />}/>
      </ Routes>     
    </div>
  );
}

export default App;