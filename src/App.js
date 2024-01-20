import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/service/Services'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// import Qualification from './components/qualification/Qualification';


const App =() => {
  return(
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      
      <Contact/>

      <Footer/>
      {/* <Qualification/> */}
 
    </main>
    </>

  )
}

export default App;
