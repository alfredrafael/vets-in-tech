import React from "react";
import "./Rollcall.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Col,
  Row,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";
import AirForceSeal from '../../assets/air-force-seal.png';
import ArmySeal from '../../assets/army-seal.png';
import NavySeal from '../../assets/navy-seal.png';
import MarinesCorpsSeal from '../../assets/marine-corps-seal.png';
import Fade from 'react-reveal/Fade';


class Rollcall extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cohort: [
        {
          name: "Alfredo R. Pabon",
          branch: "US Army",
          photo: "https://i.imgur.com/3xoQjkl.jpg",
          id: 1,
          branchSeal: "https://i.imgur.com/4ZQp270.png",
          status: "Veteran",
          bio: "Alfredo served as CBRN specialist in the Puerto Rico National Guard, 1-296 Infantry Regiment. After 7 years of service (and two overseas deployments) Alfredo moved to Massachusetts, where he served as a public school teacher. Currently, Alfredo eat lots of bacon and studies to resume his civilian life as a software developer."

        },
        {
          name: "Austin McKenney",
          branch: "Air Force",
          photo: "https://i.imgur.com/MyvpiJO.jpg",
          id: 2,
          branchSeal: "https://i.imgur.com/aevarUn.png",
          status: "Veteran",
          bio: "Austin McKinney is not only a US Air Force Veteran, but also an active member of the Air National Guard. Currently, his is a Senior Manger at HubSpot."
        },
        {
          name: "Sara Mckenney",
          branch: "Air Force",
          photo: "https://i.imgur.com/XYdbdFe.jpg",
          id: 3,
          branchSeal: AirForceSeal,
          status: "Veteran Spouse",
          bio: "Sara Hoyos is an Air Force spouse. Originally from Colombia, Sara completed her undergraduate in law at University of Los Andes and worked in Human Rights Law. Later, she moved to the United States to complete her Master’s Degree at Boston University in International Business Law. Sara now works with the Customer Support team at HubSpot, a technology firm in Cambridge, MA. She loves reading, baking and spending time with her family."
        },
        {
          name: "Wu Li",
          branch: "Air Force",
          photo: "https://i.imgur.com/Pq49ZTc.jpg",
          id: 4,
          branchSeal: AirForceSeal,
          status: "Veteran",
          bio: "Wu Li moved to Greater Boston area from Birmingham Alabama to serve in the United States Airforce. After completion of his USAF enlistment, he enrolled in Lesley University to study visual design and fine art. He is currently working as a visual designer for a non-profit organization. He wishes to gain more knowledge in the front end developing field, in order to improve his UX and design skills."
        },
        {
          name: "Drew Greene",
          branch: "Marines Corps",
          photo: "https://i.imgur.com/IPSgYK9.jpg",
          id: 5,
          branchSeal: MarinesCorpsSeal,
          status: "Veteran",
          bio: "Drew Greene served in the Marine Corps as a Light Armored Vehicle Crewman. He is currently studying Entrepreneurship and Supply Chain Management at Northeastern University in Boston, MA. Drew is learning web development with the intent of starting his own business making ecommerce website for online retailers."
        },
        {
          name: "Wilson St.Pierre",
          branch: "Army",
          photo: "https://i.imgur.com/VdBCuLl.jpg",
          id: 6,
          branchSeal: ArmySeal,
          status: "Veteran",
          bio: "During his first deployment to Iraq, Wilson served as an Army officer under former National Security Advisor (then Colonel) H.R. McMaster, of the 3rd Armored Cavalry Regiment. Wilson returned to New England in 2009 to pursue his MBA at Boston College, and has spent the last seven years working at a major financial services firm in downtown Boston."
        },
        {
          name: "Kelly To",
          branch: "Air Force",
          photo: "https://i.imgur.com/oBt3xMG.jpg",
          id: 7,
          branchSeal: AirForceSeal,
          status: "Veteran Spouse",
          bio: "Kelly is a (food-motivated) graphic designer with backgrounds in photography, videography and a bit of UX/UI. She’s in the progress of working towards career change as a full-time UI/UX designer. She and her husband currently live in Mountain View, CA. On her spare time, she loves to cook, travel, do yoga and be around family & friends. One of her random goals in life is to be knowledgeable in botany."
        },
        {
          name: "Vincent Bratica",
          branch: "Air Force",
          photo: "https://i.imgur.com/NZAhDSw.jpg",
          id: 8,
          branchSeal: AirForceSeal,
          status: "Service Member",
          bio: "Vincent serves as an RF Transmissions technician in the Massachusetts Air National Guard, 3D173. He has been a service member since 2008 having deployed to the Middle East in 2014. Currently, he is the NCOIC of his work center supervising seven fellow airmen. As a civilian, Vincent works as an network engineer for a non-profit tech company in Chelmsford, Massachusetts."
        },
        {
          name: "Matt Welch",
          branch: "Marine Corps",
          photo: "https://i.imgur.com/neXu2NU.jpg",
          id: 9,
          branchSeal: MarinesCorpsSeal,
          status: "Veteran",
          bio: "Matt is a Marine Corps veteran who served as a Combat Engineer Officer for 11 years. He has been working for 6 years in IT in the financial services industry. He has a passion for problem solving and learning new things."
        },
        {
          name: "Phillip Sanberg",
          branch: "Marines Corps",
          photo: "https://i.imgur.com/Y9Xf4NU.jpg",
          id: 10,
          branchSeal: MarinesCorpsSeal,
          status: "Service Member",
          bio: "Phil is a Vietnam era Marine Corps veteran who continues to enjoy an adventurous life in actitivies such as skydiving, scuba diving, and skiing. The 'work hard to play hard' rules define his lifestyle. Phil also has a son who joined the US Marines as well, and who works firefigher today. Phil's current objective is to find a job as a software engineer in order to fund an adventurous lifestyle."
        },
        {
          name: "Martin Hoviland",
          branch: "US Army",
          photo: "https://i.imgur.com/r3cCnXG.jpg",
          id: 11,
          branchSeal: ArmySeal,
          status: "Veteran",
          bio: "Martin Hovland served as a medic in the U.S Army stationed at Fort drum with one deployment to Iraq. Currently he is going to school for international management at SNHU where he hopes to join the first eSports team in New England. His hobbies include gaming, eating everything in sight, yoga, and meditation. #'merica"
        },
        {
          name: "Julie Perusse",
          branch: "US Navy",
          photo: "https://i.imgur.com/Zfgcwpg.jpg",
          id: 12,
          branchSeal: NavySeal,
          status: "Veteran Spouse",
          bio: "I’m a content marketer, mom and now a newbie coder. My husband’s service in the Navy landed me with VetsinTech and I’m so grateful for the opportunity. My love of writing and marketing is strong but I’ve enjoyed coding so much I’m using my new skills to code emails for my current employer. You can learn my work and experience at: https://www.linkedin.com/in/juliekperusse/ "
        },
        {
          name: "Jorge Herrera",
          branch: "US Navy",
          photo: "https://i.imgur.com/UIxmTvX.jpg",
          id: 13,
          branchSeal: NavySeal,
          status: "Veterean",
          bio: "Jorge is a Navy Vet and UX/UI designer with experience as a Front-End Web Developer. He first came to Boston for Graduate School at Tufts University after leaving the Navy. Upon graduation with a MFA degree he decided to stay and break into the start-up tech industry where he has been working ever since. He continues to learn and improve his skills as web developer thanks to Vets in Tech program at General Assembly."
        },
        {
          name: "Erik deNeegaard",
          branch: "Marines Corps",
          photo: "https://i.imgur.com/5T2xpEj.jpg",
          id: 14,
          branchSeal: MarinesCorpsSeal,
          status: "Veteran",
          bio: "Erik served in the Marine Corps' Infantry as a Rifle Platoon Commander, Weapons Platoon Commander, Company Executive Officer and then as the OIC of the Regimental Special Training Section for Amphibious Raids. He also served 4 years as a battalion's Heavy Guns Platoon Commander in the Reserve. Currently, Erik works towards an MBA from Babson College, and starts a career at Fidelity Investments & Systems Analysis."
        },
        {
          name: "Nicholas Wright",
          branch: "US Army",
          photo: "https://i.imgur.com/lKPjffc.jpg",
          id: 15,
          branchSeal: ArmySeal,
          status: "Veteran",
          bio: "Nicholas Wright served in the U.S. Army from 2002 to 2015. Over the course of his career, he deployed to Iraq a few times with Infantry and Special Forces units. He has a BA in Political Science from the University of Massachusetts Boston."
        },
        {
          name: "Stacy Soto",
          branch: "Air Force",
          photo: "https://i.imgur.com/kpliNm8.jpg",
          id: 16,
          branchSeal: AirForceSeal,
          status: "Service Member",
          bio: "Stacey is an active duty member of the USAF. While taking the GA Front End Web Development course, she was a designer for Kessel Run -an agile military software development company."
        }

      ],
      modal: false,
      clickedStudent: null
    };
    this.triggermodal = this.triggermodal.bind(this);
    this.populateModal = this.populateModal.bind(this);
    this.testingAlert = this.testingAlert.bind(this);
  }

  triggermodal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  populateModal(student){
    this.setState({ clickedStudent: student})
    return <div>{student.name}</div>
  }

  testingAlert(){
    alert('this function works')
  }

  render() {

    const studentIteration = this.state.cohort.map(student => {
      return (
        <Col
          key={student.id}
          md={Math.ceil(48 / this.state.cohort.length)}
          style={{ marginBottom: "3%" }}
        >

          <Card
            className="growEffect studentIterationCards"
            onClick={() => this.triggermodal()}
          >
          
            <CardImg
              top
              width="100%"
              src={student.photo}
              alt="Student image"
              onClick={() => this.populateModal(student)}
            />
            <CardBody>
              <CardTitle onClick={() => this.populateModal(student)}> {/* Extra fn declaration */}
              <img src={student.branchSeal} style={{maxWidth: '25%', margin: '0 7% 0 -20%'}}></img> 
              <strong>{student.name}</strong>
              </CardTitle>
              <CardText>
                {/* If there was aany CardText, it would be here! */}
              </CardText>
            </CardBody>
          </Card>

          {/* //////////////////////////MOBILE ONLY///////////////////////////// */}
          <Container>
          <Row>
          <Col
          key={student.id}
          xs="12"
          style={{ marginBottom: "3%", display: 'inline' }}
        >

          <Card
            className="mobileStudentRows"
            onClick={() => this.triggermodal()}
            style={{maxWidth: '100%'}}
          >
          
            <CardImg
              top
              width="100%"
              src={student.photo}
              alt="Student image"
              onClick={() => this.populateModal(student)}
            />
            <CardBody>
              <CardTitle onClick={() => this.populateModal(student)}> {/* Extra fn declaration */}
              <img src={student.branchSeal} style={{maxWidth: '25%', margin: '0 7% 0 -20%'}}></img> 
              <strong>{student.name}</strong>
              </CardTitle>
              <CardText>
                {/* If there was aany CardText, it would be here! */}
              </CardText>
            </CardBody>
          </Card>
          
        </Col>
        </Row>
        </Container>
        {/* ///////////////////////////////////////////////////////// MOBILE ONLY ENDS ////////////////////////////////////////// */}
        </Col>        
      );
    });

    const modalData = this.state.cohort.map((student)=>{
      const selectedStudent = this.state.clickedStudent;
      if (student === selectedStudent) { 

      return <React.Fragment>
          <ModalHeader>
        {/*   <img src={student.branchSeal} style={{maxWidth: '12%', marginRight: '2%'}}></img> {student.name}, {student.branch} {student.status} */}
          </ModalHeader>



        <ModalBody key={this.state.clickedStudent.id}>
            <section className="dividedInTwo">
              <div className="dividedInTwoContainer">
                <article className="flexedArea">
                  <img
                    src={student.photo}
                    style={{ maxWidth: "100%", display: "inline-block", borderRadius: '5%'}}
                  />
                </article>

                <aside class="right">

                      <div>
                        <h2  className="studentNameInModalforMobile" style={{marginBottom: '-2%', fontWeight: '300'}}><strong>{student.name}</strong></h2>
                      </div>
                      
                      <div>
                        <img src={student.branchSeal} style={{ maxWidth: "15%", float: 'right', marginTop: '-11%'}}/>
                      </div>

                      <div>
                        <h4  style={{marginBottom: ''}}> <span style={{fontFamily: 'Stardos Stencil'}}>Branch:</span> {student.branch}</h4>
                      </div>

                      <div>
                        <h4  style={{marginBottom: '-2%'}}> <span style={{fontFamily: 'Stardos Stencil'}}>Status:</span> {student.status}</h4>
                      </div>

                      <div style={{marginTop: '5%'}}>
                        <h4><span style={{fontFamily: 'Stardos Stencil'}}>About:</span>&nbsp;<span style={{fontSize:'95%'}}>{student.bio}</span></h4>
                      </div>
                </aside>
              </div>
            </section>
</ModalBody>;




       </React.Fragment>
      }
    });

    console.log("STUDENT:",this.state.clickedStudent)
  // alert(`THE STUDENT IS" ${JSON.stringify(this.state.clickedStudent)}`)
    
      return (
      <div className="rollcallSection" id="ourTeam">
        <div className="sectionHeader">
        
          Our cohort
        
      </div>
      <Container>
            <Row>{studentIteration}</Row>
      </Container>

          <div>
            <Modal
              isOpen={this.state.modal}
              triggermodal={this.triggermodal}
              // className={this.props.className}
              className="modal-dialog modal-lg"
            >

            {modalData}

           {/*   {console.log(`THE CONSOLED STUDENT IS" ${JSON.stringify(this.state.clickedStudent)}`)} */}


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
export default Rollcall;
