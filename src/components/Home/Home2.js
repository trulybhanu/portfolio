import { Container, Row, Col } from "react-bootstrap";
import myImage from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="highlight"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have learnt something,
              atleast I think so… 🤷‍♂️
              <br />
              <br />I am fluent in classics like{" "}
              <i>
                <b className="highlight">C, C++, </b>
                and gained some command on
                <b className="highlight"> Javascript, Python and Java.</b>
              </i>
              <br />
              <br />
              My field of interest is building new &nbsp;
              <i>
                <b className="highlight">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="highlight">Mobile Application.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my skills for developing products with{" "}
              <b className="highlight">Node.js</b> and
              <i>
                <b className="highlight">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="highlight"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImage} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

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
    </Container>
  );
}
export default Home2;
