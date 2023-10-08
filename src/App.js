import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import {Footer} from "./components/Footer";
import {NavBar} from "./components/NavBar";
import Auth from "./components/Auth";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;