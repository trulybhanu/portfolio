import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeMe from "../../Assets/feeling_proud.svg";
import Home2 from "./Home2";
import TypewriterEffect from "./TypewriterEffect";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <section className="home-bg">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{ paddingTop: 60, paddingBottom: 15 }}
                className="heading"
              >
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="highlight"> Bhanu Pratap</strong>
              </h1>

              <div style={{ marginBottom: 20, padding: 50, textAlign: "left" }}>
                <TypewriterEffect />
              </div>

              <div style={{ paddingLeft: 40, paddingTop: 20 }}>
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
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeMe} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
