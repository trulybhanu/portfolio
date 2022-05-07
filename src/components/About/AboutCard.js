import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, my name is{" "}
            <span className="highlight">Bhanu Pratap. </span>
            I'm born and raised in{" "}
            <span className="highlight"> Agra, UP, India</span>.
            <br />
            Currently I'm pursuing{" "}
            <span className="highlight">
              Master of Computer Applications
            </span>{" "}
            at{" "}
            <span className="highlight">
              Motilal Nehru National Institute of Technology, Prayagraj
            </span>
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#abc" }}>
            "Strive to build things that create Impact"
          </p>
          <p />
          <footer className="blockquote-footer">B H Λ И U</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
