import React from 'react';
import {Button, Col, CardImg, Container, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, Row} from 'reactstrap';
import './Instructors.css';


class Instructors extends React.Component {
	constructor(props) {
    super(props);
        this.state ={
            instructors: [
                {
                    name: "Leon Noel",
                    role: "Instructor",
                    bio: "Leon Noel is founder & CEO of SocialSci. When he not performing his CEO duties at SocialSci, Leon enjoys teaching tech skills to students of all ages through General Assembly, Resilient Coders, and Citizen Schools in Massachustts.",
                    photo: "https://i.imgur.com/yAWVZsS.jpg",
                    id: "1",
                    logo: ""
                }, 
                {
                    name: "Will Murray",
                    role: "Instructor",
                    bio: "Will is a photographer and developer based in Boston, MA. He started in the tech industry as a design intern, and then as a computer technician at a high-volume retail store. Now he make awesome websites, and show others how to code.",
                    photo: "https://i.imgur.com/fU7Vuvq.png",
                    id: "2",
                    logo: ""
                }
            ]
        }
    }

    render() {


    const iteratingInstructors = this.state.instructors.map((instructor) => (
        <Col
          key={name}
          style={{}}
        >

          <Card style={{maxWidth: '60%'}}>
            <CardImg
              top
              width="100%"
              src={instructor.photo}
              alt="Instructor picture"
            />
            <CardBody>
              <CardTitle>
              <img src={instructor.logo} style={{maxWidth: '25%', margin: '0 7% 0 -20%'}}></img> 
              <strong>{instructor.name}</strong>
              </CardTitle>
              <CardText>
                {/* If there was aany CardText, it would be here! */}
              </CardText>
            </CardBody>
          </Card>
        </Col>
    ));

    return (
        <div>
        <Container style={{padding: '0 5%'}}>
            <Row>
                {iteratingInstructors}
            </Row>
        </Container>
        </div>
        );
   }
}
export default Instructors;