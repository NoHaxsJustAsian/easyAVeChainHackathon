import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "./Home-Page/WelcomePart2";


//import LoginScreen from './Login/login-screen';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RegistrationScreen from "./pages/Login-Register/Registration";
import LoginScreen from "./pages/Login-Register/Login";
import Footer from "./pages/Footer";
import LearnMore from "./pages/LearnMore";
import ProviderLoggedIn from "./pages/Post-Login/ProviderLoggedIn";
import UserLoggedIn from "./pages/Post-Login/UserLoggedIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/registration" element={<RegistrationScreen />} />
          <Route path="/provider-logged-in/:uid" element={<ProviderLoggedIn />} />
          <Route path="/user-logged-in/:uid" element={<UserLoggedIn />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
