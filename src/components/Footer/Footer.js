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
                        <li><a href="http://about.draftkings.com/tech-for-heroes/">Draft Kings |</a></li>
                        <li><a href="#">Vets In Teach |</a></li>
                        <li><a href="#">General Assembly</a></li>
                    </ul>
                </Col>
                <Col>
                    <ul className="social-links">
                        <li><a href="https://www.linkedin.com/company/vetsintech/"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.facebook.com/veteransintech/"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="https://twitter.com/VetsInTech"><i className="fab fa-twitter-square"></i></a></li>

                    </ul>
                </Col>
            </Row>
            <Row>
                <p>
                    Copyright &copy; {currentYear} by Alfredo R. Pabon. All rights reserved.
                </p>
            </Row>
        </Container>


           </div>
        );
  }
}
export default Footer;