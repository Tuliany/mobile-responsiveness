import './styles/App.css';
import Navbar from './components/Navbar';
import Divider from './components/Divider';
import About from './pages/About';
import Team from './pages/Team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="frame">
        <Divider />
        <About />
        <Divider />
        <Team />
      </div>
    </div>
  );
}

export default App;
