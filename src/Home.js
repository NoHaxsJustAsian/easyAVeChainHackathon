
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner} from './components/Banner';
import { Skills } from './components/Skills/Skills';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './components/Timeline/Experience';
import Auth from './components/Auth';
import Cells from './components/Cells';



function Home() {
  return (
    <div className="App">
      <Banner />
      <Skills />
      <Cells />
      <Experience />
    </div>
      );
}

export default Home;
