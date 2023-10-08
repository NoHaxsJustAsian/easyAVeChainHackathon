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
      <h1 style={headerStyle}>Purpose of TAP</h1> <hr />
      <p style={{ ...paragraphStyle, padding: "5px" }}>
        Time N’ Place is a solution born from a problem. As a team of university
        students, we’ve all experienced a lack of awareness for events around
        campus, completely missing out on potential opportunities to have fun.
        Weekends would be spent rotting in dorms instead of using our precious
        time to connect with other students. However, college is a time and
        place for exploration, meeting new people, and making lasting memories.
        People coming from around the world to an unfamiliar place with
        unfamiliar people experience even more difficulty. There needed to be
        something to bridge the gap between students hungry for involvement and
        plans waiting to be made. Time N’ Place is our effort to cultivate that
        social environment for other students, building a rich and
        interconnected community.
      </p>
      </section>
    </Container>
  );
}
