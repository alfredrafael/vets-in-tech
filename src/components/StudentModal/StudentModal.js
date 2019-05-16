import React from 'react';
import './StudentModal.css';
import {Button, Modal, Col, Card, CardImg, CardBody, CardTitle, CardText, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'


class StudentModal extends React.Component {
	constructor(props) {
  super(props);
    this.state ={
      cohort: [
        {
          name: "Alfredo R Pabon",
          branch: "Army",
          img: "https://placekitten.com/300/300"
        },
        {
          name: "Austin McKenney",
          branch: "Air Force",
          img: "https://placekitten.com/300/300"
        },
        {
          name: "Sara Mckenney",
          branch: "Air Force",
          img: "https://placekitten.com/300/300"
        },
        {
          name: "Wu Li",
          branch: "Air Force",
          img: "https://placekitten.com/300/300"
        },
        {
          name: "Drew Greene",
          branch: "Marines Corps",
          img: "https://placekitten.com/300/300"
        },
        { name: "Ini", branch: "Mini", img: "https://placekitten.com/300/300" },
        {
          name: "Mini McKenney",
          branch: "Mo",
          img: "https://placekitten.com/300/300"
        },
        {
          name: "Titere",
          branch: "Air Force",
          img: "https://placekitten.com/300/300"
        },
        {
          name: "Curara",
          branch: "Air Force",
          img: "https://placekitten.com/300/300"
        },
        {
          name: "Mangara",
          branch: "Marines Corps",
          img: "https://placekitten.com/300/300"
        }
      ], 
      show: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const renderingList = this.state.cohort.map((student, index)=> { //<li key={index}>{student.name}</li>
      return <div><Modal.Header closeButton>
      <Modal.Title key={index}>{student.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body key={index}>{student.branch}</Modal.Body>
    <Col key={index} md={Math.ceil(22 / this.state.cohort.length)} style={{marginBottom: '3%'}}>
              <Card className='growEffect' onClick={this.triggerModal}>
                <CardImg
                  top
                  width="100%"
                  src={student.img}
                  alt="Student image"
                />
                <CardBody>
                  <CardTitle>
                    <a href="http://www.google.com">{student.name}</a>
                  </CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                  </CardText>
                </CardBody>
              </Card>
            </Col>
    </div>
   })

    return (
      <div>

      <Modal isOpen={this.state.modal} triggerModal={this.triggerModal} className={this.props.className}>
          <ModalHeader 
            triggerModal={this.triggerModal}
            style={{}}>
               Modal Title Here 
          </ModalHeader>
            
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.triggerModal}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.triggerModal}>Cancel</Button>
          </ModalFooter>
        </Modal>

      <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
          {renderingList}
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
      </Modal>





       {/* <ul>
           {renderingList} 
        </ul>
        */}

       </div>
    );
  }
}
export default StudentModal;