import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css'
import axios from 'axios'
import { url } from '../../constants';
import backdrop from "./backdrop.jpg";
import LogoCard from "../../Home-Page/LogoCard";

interface User {
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

function RegistrationScreen() {
  const nav = useNavigate();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmationPassword, setConfirmationPassword] = useState<string>('');
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [confirmationPasswordShown, setConfirmationPasswordShown] = useState<boolean>(false);
  const [id, setID] = useState<string>('')

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const toggleConfirmationPassword = () => {
    setConfirmationPasswordShown(!confirmationPasswordShown);
  };

  const handleRegistration = (username: string, email: string, password: string, confirmationPassword:string, firstName: string, lastName: string) => {
    let id: string;
    if(password !== confirmationPassword) {
      console.log('Passwords do not match')
      return;
    }
    axios.post(url + "users/add", {
      username,
      email,
      password,
      firstName,
      lastName,})
    .then(res => {
      axios.get(url + "users/getByUsername", {params: {username: username}})
      .then(response => {
        id = response.data;
        nav("/profile/"+ id)
      })
      .catch(err => console.log(err));
    }) 
    .catch(err => console.log(err));
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRegistration(username, email, password, confirmationPassword, firstName, lastName);
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between", height: "92vh"}}>
    <div className="Container">
    <div className="pt-14 px-8">
      <header className="Header font-sans font-bold" >Sign Up</header>
      <hr className="pt-0" />
      <Form className='Form' onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Control 
            required
            type="text" 
            placeholder="First name"
            onChange={e => {
                const val = e.target.value;
                setFirstName(val);
            }}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control 
            required
            type="text" 
            placeholder="Last name" 
            onChange={e => {
                const val = e.target.value;
                setLastName(val);
            }}/>
        </Form.Group>
        <InputGroup className="mb-3" hasValidation>
          <Form.Control 
            required
            type="email" 
            placeholder="Email" 
            value={email}
            isInvalid={email.slice(-4) !== '.edu' && !!email}
            onChange={e => {
                const val = e.target.value;
                setEmail(val);
            }}/>
            <Form.Control.Feedback type="invalid">
              Make sure you use your university email!
            </Form.Control.Feedback>
        </InputGroup>
        <Form.Group className="mb-3">
          <Form.Control 
            required
            type="text" 
            placeholder="Username" 
            onChange={e => {
                const val = e.target.value;
                setUsername(val);
            }}/>
        </Form.Group>
        <InputGroup className="mb-3">          
            <Form.Control 
            required
            type={passwordShown ? "text" : "password"} 
            placeholder="Password" 
            value={password}
            onChange={e => {
                const val = e.target.value;
                setPassword(val);
            }}/>
            <Button variant="outline-secondary" id="addon" onClick={togglePassword} className="ShowButton">
              <i className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye" } />
            </Button>
        </InputGroup>
        <InputGroup className="mb-3" hasValidation>
          <Form.Control 
            type={confirmationPasswordShown ? "text" : "password"} 
            placeholder="Confirm Password" 
            value={confirmationPassword}
            isInvalid={password !== confirmationPassword && !!confirmationPassword}
            onChange={e => {
                const val = e.target.value;
                setConfirmationPassword(val);
            }}/>
            <Button variant="outline-secondary" id="addon2" onClick={toggleConfirmationPassword} className="ShowButton">
              <i className={confirmationPasswordShown ? "fas fa-eye-slash" : "fas fa-eye" } />
            </Button>
            <Form.Control.Feedback type="invalid">
              Passwords do not match!
            </Form.Control.Feedback>
        </InputGroup>
        <Button variant="danger" type="submit" className='SubmitButton'>
          Sign up
        </Button>
      </Form>
      <div className="SwitchLoginCreateGroup">
        <p>Already have an account?</p>
        <Link to="/login" className="font-sans font-bold">Sign in</Link>
      </div>
      </div>
      <div className="relative bottom-0 items-center text-slate-900">
      <LogoCard/>
    </div>
      </div>
    <div className="bg-danger">
        <img src={backdrop} className="object-cover" width="1178px"/>
      </div>
    </div>
  );
}

export default RegistrationScreen;