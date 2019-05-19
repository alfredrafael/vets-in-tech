import React from 'react';
import './Footer.css';
import {Row, Col, Container} from 'reactstrap';

class Footer extends React.Component {
	constructor(props) {
    super(props);
        
    }

    render() {
        
        
        const currentYear = new Date().getFullYear();

        return (
            <div className='footerDiv'>
            <Container>
            <Row>
                <Col>
                    <ul className="footer-nav">
                        <li><a href="http://about.draftkings.com/tech-for-heroes/" target="_blank">Draft Kings |</a></li>
                        <li><a href="https://vetsintech.co/" target="_blank">Vets In Teach |</a></li>
                        <li><a href="https://generalassemb.ly/locations/boston" target="_blank">General Assembly</a></li>
                    </ul>
                </Col>
                <Col>
                    <ul className="social-links">
                        <li><a href="https://www.linkedin.com/company/vetsintech/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.facebook.com/veteransintech/" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="https://twitter.com/VetsInTech" target="_blank"><i className="fab fa-twitter-square"></i></a></li>

                    </ul>
                </Col>
            </Row>
            <Row>
                <p className='signature'>
                    Copyright &copy; {currentYear} by &nbsp; <a href="https://alfredorafael.com/"><img src="https://i.imgur.com/6BvcC6F.png" style={{maxWidth: '12%'}}/></a> &nbsp; .All rights reserved.
                </p>
            </Row>
        </Container>


           </div>
        );
  }
}
export default Footer;