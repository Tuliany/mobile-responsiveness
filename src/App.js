import './styles/App.css';
import Navbar from './components/Navbar';
import Divider from './components/Divider';
import About from './pages/About';
import Team from './pages/Team';
import Work from './pages/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Divider />
      </header>
      <div className="frame">
        <About />
        <Divider />
        <Team />
        <Divider />
        <Work />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
