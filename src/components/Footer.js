import { Container, Row, Col} from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'; 

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/tunwa-tongtawee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/NoHaxsJustAsian/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/nosuccjustasian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Meme Page Instagram" />
              </a>
              <a
                href="https://www.instagram.com/wintongtawee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Personal Instagram" />
              </a>
            </div>
            <p>Email me at: tongtawee.t@northeastern.edu</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
