import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Certificate from './Components/Certificates/Certificate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Certificate/>
      <Contact/>
      <Footer/>
        <Routes>
          <Route path='resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
