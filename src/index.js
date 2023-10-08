import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppPage from "./App.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppPage />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);