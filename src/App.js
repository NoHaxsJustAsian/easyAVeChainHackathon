import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import {Footer} from "./components/Footer";
import {NavBar} from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;