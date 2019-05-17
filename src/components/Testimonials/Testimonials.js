import React from 'react';
import './Testimonial.css'
import {Row, Container, Col} from 'reactstrap';



class Testimonials extends React.Component {

    render() {
        return (
            <div className="testimonialWrapper" style={{width:'100vw', height: '100vh'}}>
            <Row style={{width:'100vw', height: '100vh'}}>
                <Col>
                    <blockquote className='blockquote' style={{fontSize: '160%', border: 'none'}}>
                    Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                    <cite className="cite"><img src={'http://placekitten.com/300/300'}/></cite>
                    </blockquote>
                </Col>

                <Col>
                    <blockquote className='blockquote' style={{fontSize: '160%', border: 'none'}}>
                    Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                    <cite className="cite"><img src={'http://placekitten.com/300/300'}/></cite>
                    </blockquote>
                </Col>

                <Col>
                    <blockquote className='blockquote' style={{fontSize: '160%', border: 'none'}}>
                    Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                    <cite className="cite"><img src={'http://placekitten.com/300/300'}/></cite>
                    </blockquote>
                </Col>
            </Row>
            </div>
        );
   }
}
export default Testimonials;

{/* style={{backgroundImage: 'url(https://i.imgur.com/iZT5bfY.jpg)'}} */}