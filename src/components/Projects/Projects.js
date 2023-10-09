import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import MasterTools from "../../Assets/Projects/MasterTools.PNG";
import HRM from "../../Assets/Projects/HRM.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MasterTools}
              isBlog={false}
              title="InControl MasterTools"
              description="Developed tailored procurement software for MasterTools.nl, streamlining operations, automating workflows, enhancing supplier collaboration, and improving cost control. Result: Increased efficiency, reduced manual tasks, and better procurement performance. Technologies used: React, ASP.NET Core, SQL, and Power BI."
              ghLink="https://mtincontrol-dev-web.azurewebsites.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HRM}
              isBlog={false}
              title="Human Resource Management"
              description="I designed and developed a comprehensive HRM Software Solution for our company, streamlining employee management, leave tracking, payroll processing, and more. This user-friendly system enhances HR efficiency and data accuracy, reflecting my commitment to leveraging technology for organizational growth."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="React.js-based online code and markdown editors. With an instant website view, an online editor that supports HTML, CSS, and JS code is available. To create a README file, use an online markdown editor that supports GFM, custom HTML tags with a toolbar, and quick preview.Both the editor and Local Storage offer automatic saving of work."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Utilized the Kaggle dataset for plant diseases and trained an image classifier model with 38 classes of different plant leaves using the PyTorch framework. The model proved successful in distinguishing between healthy and sick leaves of 14 different plants. Using the Resnet34 pretrained model, I was able to attain an accuracy of 98%."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="FER-2013 dataset was used to train a CNN classifier using Keras and Tensorflow support. The classifier was successful at predicting the various human emotional states. Additionally, the model's maximum accuracy was 60.1%. Then, using Open-CV, a person's face was found in a picture, and their emotion was predicted using the face."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;