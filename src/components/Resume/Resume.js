import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ResumeContent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative;" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/drive/folders/19i9VTyaKDbuYPFnSCOGvtWJmp0jYTVNp"
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Education</h3>
            <ResumeContent
              title="MCA from Motilal Nehru National Institute of Technology, Allahabad"
              date="2019 - 2022"
              content={[`CGPA: 7.85 (Till 5th Sem)`]}
            />

            <h3 className="resume-title">Skills</h3>
            <ResumeContent
              title=""
              content={[
                `Languages : C, C++, JavaScript, Python`,
                `Libraries and Frameworks : ReactJS`,
                `Tools & technologies : Jenkins, Git, Github`,
                `Others : HTML, CSS`,
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Ranks and Achivements</h3>
            <ResumeContent
              title=""
              content={[
                `Highest Rating on Codechef : 1708`,
                `Highest Rating on Hackerearth : 1660`,
              ]}
            />

            <h3 className="resume-title">Areas of Interest</h3>
            <ResumeContent
              title=""
              content={[
                `Problem Solving`,
                `Web Development`,
                `Mobile Development`,
                `UI/UX Designing`,
              ]}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative;" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/drive/folders/19i9VTyaKDbuYPFnSCOGvtWJmp0jYTVNp"
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
