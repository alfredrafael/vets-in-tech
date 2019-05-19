import React from 'react';
import './Logos.css';
import {Row, Container, Col} from 'reactstrap';



class Logos extends React.Component {

    render() {
        return (
            <Row style={{background: 'linear-gradient(#7000ff76, white)'}} className='overarchingRow'>
            <Container style={{paddingTop: '3%'}} className="logosInDesktopSizes">
            <Row>

            <Col>
                <img src={"https://i.imgur.com/p9LW7uJ.png"} alt="class logo" style={{maxWidth: '35%', float: 'left'}}></img> {/* Vit Logo */}
            </Col>

                            
            <Col style={{ marginRight: '1%'}}>
                <img src={"https://i.imgur.com/sF5dyMz.png"} style={{maxWidth: '70%'}}/> {/* US Flag */}
            </Col>
      
            <Col>
                <img src={'https://i.imgur.com/NiW2aS9.png'} style={{maxWidth: '61%', float: 'right'}}/> {/* Proud to serve */}
            </Col>

            </Row>
           </Container>
            {/* //////////////////////////// MOBILE ONLY ////////////////////////////// */}
           <Container className='logosInMobile'>
           <Row>

            <Col>
                <img src={"https://i.imgur.com/p9LW7uJ.png"} alt="class logo" style={{maxWidth: '35%', float: 'left'}}></img> {/* Vit Logo */}
            </Col>

                            
            <Col style={{ marginRight: '1%'}}>
                <img src={"https://i.imgur.com/sF5dyMz.png"} style={{maxWidth: '70%'}}/> {/* US Flag */}
            </Col>
      
            <Col>
                <img src={'https://i.imgur.com/NiW2aS9.png'} style={{maxWidth: '61%', float: 'right'}}/> {/* Proud to serve */}
            </Col>

            </Row>

           </Container>
            {/* //////////////////////////// MOBILE ONLY ENDS ////////////////////////////// */}

           </Row>
        );
   }
}
export default Logos;