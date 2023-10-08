import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import LogoCard from "../Home-Page/LogoCard";

export default function LearnMore() {
  const headerStyle = {
    textAlign: "center" as "center",
    fontFamily: '"Futura", sans-serif',
  };

  const paragraphStyle = {
    fontFamily: '"Futura", sans-serif',
  };

  return (
    <div id="section2">
    <Container>    
      <section className="text-white">
          <h1 style={headerStyle}>About VeHealth </h1> <hr />
          <p style={{ ...paragraphStyle, padding: "5px" }}>
          VeHealth is a pioneering company at the intersection of healthcare and blockchain technology. Founded with a vision to revolutionize the health insurance industry, VeHealth leverages VeChain's Web3 technology and smart contracts to provide consumers with personalized health insurance solutions. Our mission is to make healthcare more accessible, affordable, and transparent for everyone by harnessing the power of data and decentralization. The logic is that if you have a healthy lifestyle, you should be rewarded with lower premiums. We are building a community of health-conscious individuals who are incentivized to live a healthy lifestyle.
          </p>
      </section>
    </Container>
    </div>
  );
}
