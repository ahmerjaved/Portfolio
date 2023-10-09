import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Ahmer Javed </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            {/* <br /> */}
            {/* <br /> */}
            I am currently employed as a software developer at
            Melior ITS.
            <br />
            <br />
            During my time at Melior ITS, I have gained hands-on experience in various technologies, including React, TypeScript, Rest APIs, 
            Azure Functions, and ASP.NET Core. I have been actively involved in developing solutions following agile methodologies, ensuring 
            efficient project management and timely deliveries. 
            <br />
            <br />
            As a software engineer, I enjoy leveraging my technical skills to solve complex problems and create innovative solutions. I 
            thrive in a collaborative environment, where I can contribute my ideas and work with a diverse team to achieve project objectives.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ahmer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
