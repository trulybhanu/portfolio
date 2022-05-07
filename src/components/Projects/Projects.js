import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ChatOn from "../../Assets/Projects/ChatOn.png";
import Portfolio from "../../Assets/Projects/portfolio.png";
import Cardvalid from "../../Assets/Projects/cardvalidate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some <strong className="highlight">Stuffs </strong> I've Created
        </h1>
        <h4 style={{ color: "white", marginLeft: "20px" }}>
          Here is a glimpse of my recent projects I have worked on.
        </h4>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="This is my personal portfolio project that showcases my work and describes a bit about me. Built using React.js, CSS, and some interesting APIs."
              link="https://github.com/AlphaBhanu/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatOn}
              isBlog={false}
              title="ChatOn"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, chatengine, axios. This project has features that allows users to chat in realtime, share images, etc."
              link="https://github.com/AlphaBhanu/chat_on"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cardvalid}
              isBlog={false}
              title="Card Validator"
              description="It is a Debit/Credit card number validator program. It uses Luhn's Checksum algorithm to validate the entered card number. Built with C++."
              link="https://github.com/AlphaBhanu/Card-Assure"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
