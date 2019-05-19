import React from "react";
import "./Testimonial.css";
import { Row, Container, Col } from "reactstrap";
import groupPic from '../../assets/groupPic.jpg';
import Fade from 'react-reveal/Fade'

class Testimonials extends React.Component {
  render() {
    return (
        <div className='testimonialDiv'>
      
        <div
        className="testimonialWrapper"
        style={{ width: "100vw", height: "100vh"}}
      >

     {/*  <img src="https://i.imgur.com/Xu6vewr.png" style={{maxWidth: '20%', paddingTop: '25px'}}/>  */}

      <Row>
          <Col style={{ textAlign: "center", paddingTop: '3%' }}>
            <h1 className="headerWithLine">
              <strong>Our experience</strong>
            </h1>
          </Col>
        </Row>

        <Row style={{ width: "100vw"}}>
          <Col style={{ height: "50vh"}}>
            <blockquote
              className="blockquote"
              style={{ fontSize: "160%", border: "none",  paddingTop: '7%'}}
            >
              My experience at General Assembly has been truly amazing. After
              trying to learn from online courses, none of them made me feel as
              confident about my skills as Leon and Will. I can't speak highly
              enough about our instructors.
              <cite className="cite">
                <img src={"https://i.imgur.com/IPSgYK9.jpg"} />
                Drew Greene
              </cite>
            </blockquote>
          </Col>

          <Col style={{ height: "50vh" }}>
            <blockquote
              className="blockquote"
              style={{ fontSize: "160%", border: "none", paddingTop: '7%' }}
            >
              Taking this course gave me the "pieces of the puzzle" I needed to
              build this website! Great experience, around great people. I feel
              confident enough to show up to a company and market myself as a
              front-end web developer.
              <cite className="cite">
                <img src={"https://i.imgur.com/3xoQjkl.jpg"} />
                Alfredo Rafael
              </cite>
            </blockquote>
          </Col>

          <Col style={{ height: "50vh" }}>
            <blockquote
              className="blockquote"
              style={{ fontSize: "160%", border: "none", paddingTop: '7%' }}
            >
              A fantastic experience that provided us with the opportunity to
              learn new skills at GA. We were educated by two fantastic
              instructors who always took the time (in and out of class) to
              ensure every student understood the material.
              <cite className="cite">
                <img src={"https://i.imgur.com/NZAhDSw.jpg"} />
                Vincent Bratica
              </cite>
            </blockquote>
          </Col>
        </Row>
      </div>
        {/* 
        <Row>
                <Col>
                    <Fade>
                        <img src={groupPic} style={{maxWidth: '85%', marginTop: '5%', marginBottom: '7%', borderRadius: '25px', }}/>
                    </Fade>
                </Col>
          </Row>
           */}
      </div>
    );
  }
}
export default Testimonials;

{
  /* style={{backgroundImage: 'url(https://i.imgur.com/iZT5bfY.jpg)'}} */
}
