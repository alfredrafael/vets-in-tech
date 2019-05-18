import React from "react";
import {
  Button,
  Col,
  CardImg,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Row
} from "reactstrap";
import "./Instructors.css";

class Instructors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: "Leon Noel",
          role: "Instructor",
          bio:
            "Leon Noel is founder & CEO of SocialSci. When he not performing his CEO duties at SocialSci, Leon enjoys teaching tech skills to students of all ages through General Assembly, Resilient Coders, and Citizen Schools in Massachustts.",
          photo: "https://i.imgur.com/yAWVZsS.jpg",
          id: "1",
          logo: ""
        },
        {
          name: "Will Murray",
          role: "Instructor",
          bio:
            "Will is a photographer and developer based in Boston, MA. He started in the tech industry as a design intern, and then as a computer technician at a high-volume retail store. Now he make awesome websites, and show others how to code.",
          photo: "https://i.imgur.com/fU7Vuvq.png",
          id: "2",
          logo: ""
        }
      ]
    };
  }

  render() {
    const iteratingInstructors = this.state.instructors.map(instructor => (
      <Col key={name} style={{}}>
        <Card style={{margin: '0 6%'}}>
          <CardImg
            top
            width="100%"
            src={instructor.photo}
            alt="Instructor picture"
          />
          <CardBody>
            <CardTitle>
            
              <strong>{instructor.name}</strong>
            </CardTitle>
            
          </CardBody>
        </Card>
      </Col>
    ));

    return (
      <div style={{ textAlign: "center", background: 'linear-gradient(#b300ff4d, white)', marginBottom: '7%' }}>
      <h1 className='headerWithLineSponsors'
      style={{
        textAlign: "center",
        fontSize: "450%",
        fontWeight: "300",
        color: "#6f1ba1"}}>
        Our Instructors
      </h1>
        <Container style={{textAlign: "center", padding: '0 15%' }}>
          <Row>{iteratingInstructors}</Row>
        </Container>
      </div>
    );
  }
}
export default Instructors;
