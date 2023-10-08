import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-danger py-3">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <p className="text-center text-md-left mb-2 mb-md-0" style={{ fontFamily: '"Futura", sans-serif', color: "black" }}>
            Copyright &copy; {new Date().getFullYear()} Time and Place (TAP)
          </p>
          <ul className="nav justify-content-center justify-content-md-end">
            <li className="nav-item" style={{ fontFamily: '"Futura", sans-serif', color: "white" }}>
              <a className="nav-link text-reset no-underline hover:scale-90 duration-150" href="/#section2">About</a>
            </li>
            <li className="nav-item" style={{ fontFamily: '"Futura", sans-serif', color: "white" }}>
              <a className="nav-link text-reset no-underline hover:scale-90 duration-150" href="#section1">Contact</a>
            </li>
            <li className="nav-item" style={{ fontFamily: '"Futura", sans-serif', color: "white" }}>
            <a className="nav-link text-reset no-underline hover:scale-90 duration-150" href="https://twitter.com/TimeAndPlaceMA" target="_blank">Twitter
            </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
