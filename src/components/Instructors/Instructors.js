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
      ], modal: false,
      clickedInstructor: null,
    };
    this.triggermodal = this.triggermodal.bind(this);
    this.populateModal = this.populateModal.bind(this);
  }
  triggermodal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  populateModal(instructor){
    this.setState({ clickedInstructor: instructor})
    return <div>{instructor.name}</div>
  }

  testingAlert(){
    alert('this function works')
  }

  render() {

    const instructorIteration = this.state.instructors.map(instructor => {
      return (
        <Col
          key={instructor.id}
          md={4}
          style={{ margin: '0 auto'}}
        >

          <Card
            className="growEffect instructorsIterationCards"
            onClick={() => this.triggermodal()}
          >
          
            <CardImg
              top
              width="100%"
              src={instructor.photo}
              alt="instructor image"
              onClick={() => this.populateModal(instructor)}
            />
            <CardBody>
              <CardTitle onClick={() => this.populateModal(instructor)}> {/* Extra fn declaration */}
              <strong>{instructor.name}</strong>
              </CardTitle>
              <CardText>
                {/* If there was aany CardText, it would be here! */}
              </CardText>
            </CardBody>
          </Card>

         
        </Col>        
      );
    });

    const modalData = this.state.instructors.map((instructor)=>{
      const selectedInstructor = this.state.clickedInstructor;
      if (instructor === selectedInstructor) { 

      return <React.Fragment>
          <ModalHeader>
        {/*   <img src={student.branchSeal} style={{maxWidth: '12%', marginRight: '2%'}}></img> {student.name}, {student.branch} {student.status} */}
          </ModalHeader>



        <ModalBody key={this.state.clickedInstructor.id}>
            <section className="dividedInTwo">
              <div className="dividedInTwoContainer">
                <article className="flexedArea">
                  <img
                    src={instructor.photo}
                    style={{ maxWidth: "100%", display: "inline-block", borderRadius: '5%'}}
                  />
                </article>

                <aside class="right">

                      <div>
                        <h2  className="studentNameInModalforMobile" style={{marginBottom: '-2%', fontWeight: '300'}}><strong>{instructor.name}</strong></h2>
                      </div>

                      <div  style={{marginTop: '7%'}}>
                        <h4  style={{marginBottom: '-2%'}}> <span style={{fontFamily: 'Stardos Stencil'}}>Role:</span> {instructor.role}</h4>
                      </div>

                      <div style={{marginTop: '5%'}}>
                        <h4><span style={{fontFamily: 'Stardos Stencil'}}>About:</span>&nbsp;<span style={{fontSize:'95%'}}>{instructor.bio}</span></h4>
                      </div>
                </aside>
              </div>
            </section>
</ModalBody>;




       </React.Fragment>
      }
    });

    console.log("Instructor:",this.state.clickedInstructor)
  // alert(`THE mobile IS" ${JSON.stringify(this.state.clickedStudent)}`)
    
      return (
      <div className="instructorsSection" id="ourTeam">
        <div className="sectionHeader">
        
          Our Instructors
        
      </div>
      <Container>
            <Row>{instructorIteration}</Row>
      </Container>

          <div>
            <Modal
              isOpen={this.state.modal}
              triggermodal={this.triggermodal}
              // className={this.props.className}
              className="modal-dialog modal-lg"
            >

            {modalData}

           {/*   {console.log(`THE CONSOLED INSTRUCTOR IS" ${JSON.stringify(this.state.clickedStudent)}`)} */}


              <ModalFooter>
                <Button color="primary" onClick={this.triggermodal}>
                  Close
                </Button>{" "}
                
              </ModalFooter>
            </Modal>
          </div>
        </div>

      );
  }
}
export default Instructors;
