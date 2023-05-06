import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header';
import PageHero from './components/Home/PageHero';
import About from './components/Home/About';

function App() {
  return (
    <div id="mountRoot">
      <Header />
      <PageHero />
      <About />
    </div>
  );
}

export default App;
