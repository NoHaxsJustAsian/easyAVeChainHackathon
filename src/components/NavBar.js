import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import React from "react";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'; 


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

            window.addEventListener('scroll', onScroll);

            return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className ={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>home</Nav.Link>
                <Nav.Link href="#skills" className ={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>skills</Nav.Link>
                <Nav.Link href="#experience" className ={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>timeline</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/tunwa-tongtawee" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="LinkedIn" /></a>
                    <a href="https://github.com/NoHaxsJustAsian/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
                    <a href="https://www.instagram.com/wintongtawee" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Personal Instagram" /></a>
                    <a href="https://www.instagram.com/nosuccjustasian" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Meme Page Instagram" /></a>
                </div>
                <button className="vvd" onClick={() => window.location.href='mailto:tongtawee.t@northeastern.com'}><span>Contact Me</span></button>
                </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
}