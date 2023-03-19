import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import Build from './components/Build/Build';
import Menu from './components/Menu/Menu';
import Items from './components/Items/Items';
import Technologies from './components/Technologies/Technologies';
import Companies from './components/Companies/Companies';
import Hydra from './components/Hydra/Hydra'
import Steps from './components/Steps/Steps'
import JoinHydra from './components/JoinHydra/JoinHydra';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <section className='full_hydra'>
      <section className='cont'>
        <Menu />
        <Header />
        <Contact />
        <Introduction />
        <About />
        <Build />
        <Items />
        <Technologies />
        <Companies />
        <Hydra />
        <Steps />
        <JoinHydra />
        <Footer />
      </section>
    </section>
  );
}

export default App;
