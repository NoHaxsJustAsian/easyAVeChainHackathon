import { Container } from "react-bootstrap";

export default function AboutUs() {
  const headerStyle = {
    textAlign: "center" as "center",
    fontFamily: '"Futura", sans-serif',
  };

  const paragraphStyle = {
    fontFamily: '"Futura", sans-serif',
  };

  return (
    <Container>
    <section className="text-white">
      <h1 style={headerStyle}>How VeHealth Works</h1> <hr />
      <p style={{ ...paragraphStyle, padding: "5px" }}>
      VeHealth operates by offering a platform where patients can discover opportunities to earn VeTokens based on their healthcare data. We achieve this by collaborating with healthcare providers who receive your health information. In return, they offer you VeTokens as a reward if you meet the eligibility criteria. Importantly, there is no risk involved, as your insurance rates will not increase. However, if you demonstrate good health, you will receive VeTokens as a form of monetary incentive. This process is facilitated through the use of smart contracts, ensuring the accurate calculation of your data.
      </p>
      </section>
    </Container>
  );
}
