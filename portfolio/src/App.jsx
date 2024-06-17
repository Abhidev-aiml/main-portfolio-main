import  React from 'react';
import './App.css';
import NewHeader from './components/header/NewHeader';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
 


function App() {


  return (
    <>
<NewHeader />
<main className="main">
  <Home />
  <About/>
  <Skills/>
  <Services/>
  <Qualification/>
</main>
    </>
  )
}

export default App
