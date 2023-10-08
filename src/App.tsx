import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Feed from "./pages/Feed";
import Welcome from "./Home-Page/WelcomePart2";
import MyPlans from "./pages/MyPlans";
import Event from "./pages/Event";


//import LoginScreen from './Login/login-screen';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RegistrationScreen from "./pages/Login-Register/Registration";
import LoginScreen from "./pages/Login-Register/Login";
import Profile from "./pages/Profile/ProfileScreen";
import Footer from "./pages/Footer";
import LearnMore from "./pages/LearnMore";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/registration" element={<RegistrationScreen />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/feed/:id" element={<Feed />} />
          <Route path="/my-plans/:id" element={<MyPlans />} />
          <Route path="/plan/:id/:eid" element={<Event/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
