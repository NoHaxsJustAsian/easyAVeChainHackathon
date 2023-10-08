import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/dumbo.jpeg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopnum, setLoopnum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Cheaper",
    "Trustworthy",
    "Public",
    "Fair",
    "Seamless"
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 30);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopnum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopnum(loopnum + 1);
      setDelta(400);
    }
  };

  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="allign-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animat__fadeIn" : ""
                  }
                >
                  <span className="tagline">Your Life Just Got Cheaper</span>
                  <h1>
                    {"VeHealth"}
                    <h2>
                      <span className="wrap">{text}</span>
                    </h2>
                  </h1>
                  <p>
                    Built on VeChain
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className = "banner-img" src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};