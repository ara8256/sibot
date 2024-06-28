import Navbar from './components/Navbar';
import Projects from './components/projects';
import Contact from './components/conatct';
import Goals from './components/goal';
import Hero from './components/hero';
import { useState } from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from './components/TextForm';
import DarkMode from './components/DarkMode';

function App() {
  const [mode, setMode] = useState("dark")

  const switchMode = () => {
    if (mode==="dark") {
        setMode("light")
        document.body.style.backgroundColor="white"
      }
      else{
        setMode("dark")
        document.body.style.backgroundColor="black"
    }
}

  return (
    <>
      <Navbar title="Typing Master" about="About" mode={mode} />
    

      {/* <div className="container">
        <TextForm mode={mode} />
      </div>
      <DarkMode mode={mode} switchMode={switchMode}/>  */}
      <Hero />

      <Projects />
      <Goals />
      <Contact />

    </>
  );
}

export default App;