import React from "react";
import "./Testimonial.css";
import { Row, Container, Col } from "reactstrap";

class Testimonials extends React.Component {
  render() {
    return (
        <div>
      <div className="testimonialHeader" style={{background: 'pink'}}>
      <Row>
          <Col style={{ textAlign: "center" }}>
            <h1 className="headerWithLine">
              <strong>Our experience</strong>
            </h1>
          </Col>
        </Row>
      </div>
        <div
        className="testimonialWrapper"
        style={{ width: "100vw", height: "100vh"}}
      >
        <Row style={{ width: "100vw", height: "100vh"}}>
          <Col style={{ height: "50vh"}}>
            <blockquote
              className="blockquote"
              style={{ fontSize: "160%", border: "none",  marginTop: '25%' }}
            >
              My experience at General Assembly has been truly amazing. After
              trying to learn from online courses, none of them made me feel as
              confident about my skills as Leon and Will. I can't speak highly
              enough about our instructors.
              <cite className="cite">
                <img src={"http://placekitten.com/300/300"} />
                Drew Greene
              </cite>
            </blockquote>
          </Col>

          <Col style={{ height: "50vh" }}>
            <blockquote
              className="blockquote"
              style={{ fontSize: "160%", border: "none", marginTop: '25%' }}
            >
              Taking this course gave me the "pieces of the puzzle" I needed to
              build this website! Great experience, around great people. I feel
              confident enough to show up to a company and market myself as a
              front-end web developer.
              <cite className="cite">
                <img src={"http://placekitten.com/300/300"} />
                Alfredo Rafael
              </cite>
            </blockquote>
          </Col>

          <Col style={{ height: "50vh" }}>
            <blockquote
              className="blockquote"
              style={{ fontSize: "160%", border: "none", marginTop: '25%' }}
            >
              A fantastic experience that provided us with the opportunity to
              learn new skills at GA. We were educated by two fantastic
              instructors who always took the time (in and out of class) to
              ensure every student understood the material.
              <cite className="cite">
                <img src={"http://placekitten.com/300/300"} />
                Vincent Bratica
              </cite>
            </blockquote>
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}
export default Testimonials;

{
  /* style={{backgroundImage: 'url(https://i.imgur.com/iZT5bfY.jpg)'}} */
}
