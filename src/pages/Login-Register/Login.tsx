import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import backdrop from "./backdrop.jpg";
import LogoCard from "../../Home-Page/LogoCard";
import { db } from "../../firebase";

interface User {
  username: string;
  password: string;
}

function LoginScreen() {
  const nav = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [isClient, setIsClient] = useState<boolean>(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const id = user.uid;
        const getIsClient = async () => {
          let userRef = doc(collection(db, "users"), user.uid);
          let docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            setIsClient(true);
          } else {
            setIsClient(false);
          }
        };
        getIsClient();
        if (isClient) {
          nav(`/user-logged-in/${id}`);
        } else {
          nav(`/provider-logged-in/${id}`);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "92vh",
      }}
    >
      <div className="Container">
        <div className="pt-28 px-8">
        <div className="relative bottom-0 items-center text-slate-900">
          <LogoCard/>
        </div>
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
      </div>
      <div className="bg-info z-0">
        <img src={backdrop} className="object-fill h-full" width="1178px" />
      </div>
    </div>
  );
}

export default LoginScreen;
