import React from "react";
import Carousel from '../Carousel/Carousel';
import { Container, Row, Col, Media } from "reactstrap";
import vitLogo from "../../assets/vetsInTechLogo.png";
import gaLogo from "../../assets/GA-logo.png";
import dkLogo from "../../assets/draft-kings-logo.png";
import groupPic from '../../assets/groupPic.jpg';
import Fade from 'react-reveal/Fade';

class Agradecimientos extends React.Component {
  render() {
    return (
      <div className="greetingsComponent" id="sponsors" style={{background: 'linear-gradient(white, pink)'}}>
        <Container>
          <div style={{marginTop: '11%'}}>
            <h1
              style={{
                textAlign: "center",
                marginBottom: "7%",
                marginTop: "5%",
                fontSize: "350%",
                fontWeight: "300",
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
                style={{ maxWidth: "70%", marginTop: "-5.5%" }}
              />
              </Fade>
              <Col caption>
                <Fade bottom>
                  <p style={{ fontSize: "150%", marginTop: '2%' }}>KATHERINE WEBSTER</p>
                  <p style={{ marginTop: "-5%", fontSize: "150%" }}>
                    CHRIS STARLING
                  </p>
                </Fade>
              </Col>
              

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
              <Fade bottom>
                <p style={{ fontSize: "150%" }}>JASON ROBINS</p>
                <p style={{ marginTop: "-5%", fontSize: "150%" }}>
                  RANDY CRADER
                </p>
              </Fade>
              </Col>
              </Fade>
            </Col>
            <Col sm="4">
            <Fade top>
              <img
                src={gaLogo}
                style={{ maxWidth: "80%", marginBottom: "7%" }}
              />
              </Fade>
              <Col caption>
              <Fade bottom>
                <p style={{ fontSize: "150%", marginBottom: "7%" }}>
                  NAIDA ROSENBERGER
                </p>
                <p style={{ marginTop: "-7%", fontSize: "150%" }}>LEON NOEL</p>
                </Fade>
              </Col>
            </Col>
          </Row>
          <Media body>
            <Row className="generalText" style={{ marginTop: "5%", marginBottom: '-1%', height: '30vh', fontWeight: '300', overflowX: 'hidden'}}>
              Thank you for providing us
              with the opportunity of pursuing a new & rewarding civilian
              career. For the thoughfulness, investment and effort involved in
              making this opportunity possible: Thank you ! 
              
            </Row>
          </Media>
          
          {/*  <Row>
                <Col>
                    <Fade>
                        <img src={groupPic} style={{maxWidth: '85%', marginTop: '5%', marginBottom: '7%', borderRadius: '25px', }}/>
                    </Fade>
                </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}
export default Agradecimientos;
