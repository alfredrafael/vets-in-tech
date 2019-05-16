import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import vitLogo from "../../assets/vetsInTechLogo.png";
import gaLogo from "../../assets/GA-logo.png";
import dkLogo from "../../assets/draft-kings-logo.png";
import groupPic from '../../assets/groupPic.jpg';
import Fade from 'react-reveal/Fade';

class Agradecimientos extends React.Component {
  render() {
    return (
      <div className="greetingsComponent" style={{background: 'linear-gradient(white, pink)'}}>
        <Container>
          <div>
            <h1
              style={{
                textAlign: "center",
                marginBottom: "7%",
                marginTop: "5%",
                fontSize: "350%",
                fontWeight: "200",
                color: "#6f1ba1"
              }}>
              Our sincere thanks to:
            </h1>
          </div>
          <Row>
            <Col xs="6" sm="4">
            <Fade top>

              <img
                src={vitLogo}
                style={{ maxWidth: "50%", marginBottom: "7%" }}
              />
              <Col caption>
                <p style={{ fontSize: "150%" }}>KATHERINE WEBSTER</p>
                <p style={{ marginTop: "-5%", fontSize: "150%" }}>
                  CHRIS STARLING
                </p>
              </Col>
              </Fade>

            </Col>
            <Col xs="6" sm="4">
            <Fade top>
              <img
                src={dkLogo}
                style={{
                  maxWidth: "70%",
                  marginTop: "-10%",
                  marginLeft: "-10%",
                  marginBottom: "7%"
                }}
              />
              <Col caption>
                <p style={{ fontSize: "150%" }}>JASON ROBINS</p>
                <p style={{ marginTop: "-5%", fontSize: "150%" }}>
                  RANDY CRADER
                </p>
              </Col>
              </Fade>
            </Col>
            <Col sm="4">
            <Fade top>
              <img
                src={gaLogo}
                style={{ maxWidth: "80%", marginBottom: "7%" }}
              />
              <Col caption>
                <p style={{ fontSize: "150%", marginBottom: "7%" }}>
                  NAIDA ROSENBERGER
                </p>
                <p style={{ marginTop: "-7%", fontSize: "150%" }}>LEON NOEL</p>
              </Col>
              </Fade>
            </Col>
          </Row>
          <Media body>
            <p className="generalText" style={{ marginTop: "5%" }}>
              To those who made this cohort possible: Thank you for providing us
              with the opportunity of pursuing a new & rewarding civilian
              career. For the thoughfulness, investment and effort involved in
              making this opportunity possible: Thank you !
            </p>
          </Media>
          <Row>
                <Col>
                    <Fade>
                        <img src={groupPic} style={{maxWidth: '85%', marginTop: '5%', borderRadius: '25px'}}/>
                    </Fade>
                </Col>
          </Row>

        </Container>
      </div>
    );
  }
}
export default Agradecimientos;
