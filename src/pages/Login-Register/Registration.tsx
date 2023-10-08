import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import backdrop from "./backdrop.jpg";
import LogoCard from "../../Home-Page/LogoCard";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

function RegistrationScreen() {
  const nav = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [walletID, setWalletID] = useState<string>("");
  const [policyNum, setPolicyNum] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [confirmationPasswordShown, setConfirmationPasswordShown] =
    useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isClient, setIsClient] = useState<boolean>(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const toggleConfirmationPassword = () => {
    setConfirmationPasswordShown(!confirmationPasswordShown);
  };

  const handleRegistration = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleRegistrationDB(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const handleRegistrationDB = async (user: any) => {
    const db = getFirestore();
    const id = user?.uid;
    if (isClient) {
      const userRef = doc(collection(db, "users"), id);
      setDoc(userRef, {
      walletID: walletID,
      policyNum: policyNum,
    });}
    else {
      const userRef = doc(collection(db, "providers"), id);
      setDoc(userRef, {
      walletID: walletID,
    });}
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
        <div className="pt-14 px-8">
          <div className="relative bottom-0 items-center text-slate-900">
          <LogoCard/>
        </div>
          <header className="Header font-sans font-bold">Sign Up</header>
          <hr className="pt-0" />
          <Form className="Form" onSubmit={handleRegistration}>
            <InputGroup className="mb-3" hasValidation>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                value={email}
                isInvalid={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !!email}
                onChange={(e) => {
                  const val = e.target.value;
                  setEmail(val);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Invalid email address
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                value={password}
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
            <InputGroup className="mb-3" hasValidation>
              <Form.Control
                type={confirmationPasswordShown ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmationPassword}
                isInvalid={
                  password !== confirmationPassword && !!confirmationPassword
                }
                onChange={(e) => {
                  const val = e.target.value;
                  setConfirmationPassword(val);
                }}
              />
              <Button
                variant="outline-secondary"
                id="addon2"
                onClick={toggleConfirmationPassword}
                className="ShowButton"
              >
                <i
                  className={
                    confirmationPasswordShown
                      ? "fas fa-eye-slash"
                      : "fas fa-eye"
                  }
                />
              </Button>
              <Form.Control.Feedback type="invalid">
                Passwords do not match!
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="WalletID"
                onChange={(e) => {
                  const val = e.target.value;
                  setWalletID(val);
                }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Health Insurance Policy Number"
                onChange={(e) => {
                  const val = e.target.value;
                  setPolicyNum(val);
                }}
              />
            </InputGroup>
            <InputGroup className="mx-3">
                <InputGroup.Text id="healthcare-provider-label" className="mx-3">
                  Are you a healthcare provider?
                </InputGroup.Text>
              <Form.Check
                type="checkbox"
                id="healthcare-provider-checkbox"
                label="Yes"
                onChange={(e) => {setIsClient(!isClient)}}
              />
            </InputGroup>
            <Button variant="outline-secondary" type="submit" className='SubmitButton'>
              Sign up
            </Button>
            {error && <div className="text-danger mt-3">{error}</div>}
          </Form>
          <div className="SwitchLoginCreateGroup">
            <p>Already have an account?</p>
            <Link to="/login" className="font-sans font-bold">
              Sign in
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

export default RegistrationScreen;
