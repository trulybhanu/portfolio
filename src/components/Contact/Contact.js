import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Row>
        <Col md={12} className="home-about-social">
          <h1>Find Me On</h1>

          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/AlphaBhanu"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/bhanups10"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/bhanups10"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>

          <p>
            Feel free to <span className="highlight">connect </span>with me
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
