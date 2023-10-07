
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner} from './components/Banner';
import { Skills } from './components/Skills/Skills';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './components/Timeline/Experience';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <div><Footer /></div>
    </div>
      );
}

export default App;
