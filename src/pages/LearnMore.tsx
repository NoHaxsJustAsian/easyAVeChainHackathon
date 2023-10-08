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
          <h1 style={headerStyle}>About Time N' Place </h1> <hr />
          <p style={{ ...paragraphStyle, padding: "5px" }}>
            Time N' Place is a social platform that encourages college students
            to broaden their horizons and try new experiences. It empowers users
            to create and discover local events by advertising and searching for
            other users' events on the platform. Each user has the ability to
            create a personal profile, highlighting their unique interests and
            helping them better understand what events and activities align with
            their interests. The platform's main page showcases events in the
            area and gives users the option to request to join. To ensure the
            safety of its users, Time N' Place requires that all accounts be
            connected to a valid ".edu" email. While not limited to a specific
            university, this requirement helps ensure a secure and trustworthy
            community.
          </p>
      </section>
    </Container>
    </div>
  );
}
