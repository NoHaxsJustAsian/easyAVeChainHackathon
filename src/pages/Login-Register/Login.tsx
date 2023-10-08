import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore/lite";
import backdrop from "./backdrop.jpg";
import LogoCard from "../../Home-Page/LogoCard";

interface User {
  username: string;
  password: string;
}

function LoginScreen() {
  const nav = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const auth = getAuth();
    const db = getFirestore();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    const id = user?.uid;
    const userRef = doc(collection(db, 'users'), id);
    const walletID = getDoc(userRef)
    console.log(userRef);
    console.log(walletID);
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", height: "92vh"}}>
      <div className="Container">
        <div className="pt-28 px-8">
          <header className="Header font-sans font-bold">Log in</header>
          <hr className="pt-0" />
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  const val = e.target.value;
                  setEmail(val);
                }}
              />
            </Form.Group>
            <InputGroup className="mb-3">
              <Form.Control
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => {
                  const val = e.target.value;
                  setPassword(val);
                }}
              />
              <Button
                variant="outline-secondary"
                id="addon"
                onClick={togglePassword}
                className="ShowButton"
              >
                <i
                  className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}
                />
              </Button>
            </InputGroup>
            <Button
              className="font-sans font-bold"
              variant="info"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <div className="SwitchLoginCreateGroup font-sans">
            <p>Don't have an account?</p>
            <Link to="/registration/" className="font-sans font-bold">
              Register
            </Link>
          </div>
        </div>
        <div className="relative bottom-0 left-5 text-slate-900">
          <LogoCard />
        </div>
      </div>
      <div className="bg-info z-0">
        <img src={backdrop} className="object-fill h-full" width="1178px" />
      </div>
    </div>
  );
}

export default LoginScreen;