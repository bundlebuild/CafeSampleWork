import './App.css';
import Header from './components/Home/Header';
import PageHero from './components/Home/PageHero';
import About from './components/Home/About';
import Timeline from './components/Timeline';
import OurServices from './components/OurServices';
import OurLocations from './components/OurLocations';
import Footer from './components/Footer';

function App() {
  return (
    <div id="mountRoot">
      <Header />
      <PageHero />
      <About />
      <Timeline />
      <OurServices />
      <OurLocations />
      <Footer />
    </div>
  );
}

export default App;
