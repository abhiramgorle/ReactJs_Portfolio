import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhiram Gorle </span>
            from <span className="purple"> Visakhapatnam, India.</span>
            <br />I am a Computer Science and Engineering Student currently at GITAM University, Visakhapatnam.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> F1 🏎️
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess ♟️
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is like coding, it may seem difficult at first but with persistence, patience, and the right mindset, anything is achievable!"{" "}
          </p>
          <footer className="blockquote-footer">Abhiram Gorle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
