import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/video.png';
import navIcon3 from '../assets/img/social.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>Nur Hossain Raton</p>
            <p>Email : ratonkhan7799@gmail.com</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div
              className="social-icon"
              style={{
                marginTop: "20px", // Adjust the value as needed
              }}
            >
              <a href="https://www.linkedin.com/in/nur-hossain-raton/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/nurhossainraton">
                <img src={navIcon3} alt="GitHub" />
              </a>
              <a href="https://www.youtube.com/@MuktoAcademy">
                <img src={navIcon2} alt="YouTube" />
              </a>
            </div>

            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
