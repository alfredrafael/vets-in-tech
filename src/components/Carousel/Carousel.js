import React from 'react';
import './Carousel.css';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import groupPic from '../../assets/groupPic.jpg';
import Fade from 'react-reveal/Fade'



const Carousel = () => {
    return(
      <div className='carouselDiv'>
      <Fade>
      <h1 className='headerWithLineSponsors'
      style={{
        textAlign: "center",
        fontSize: "450%",
        fontWeight: "300",
        color: "#6f1ba1"}}>
        Gallery
      </h1>
        <MDBContainer style={{paddingTop: '3%'}}>
       {/* <h4 className="mt-5 mb-3">With Captions</h4> */}
        <MDBCarousel
          activeItem={1}
          length={11}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>



          <MDBCarouselItem itemId="1"> {/* group & instructors */}
          <MDBView>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/ZLDbVwQ.jpg"
              alt="First slide"
            />
            <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            {/*<h3 className="h3-responsive">Light mask</h3>*/}
            <p>Student and Instructors</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>


        <MDBCarouselItem itemId="4"> {/* Wilson & Martin Hoviland */}
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/vkDzVHt.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/*<h3 className="h3-responsive">Light mask</h3>*/}
                <p>Martin & Wilson working together</p>
              </MDBCarouselCaption>
        </MDBCarouselItem>




        

            <MDBCarouselItem itemId="3"> {/* Saray & Austin keep */}
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/aPh4ULX.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/*<h3 className="h3-responsive">Light mask</h3>*/}
                <p>Sara and Austin during a coding exercise</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>



            <MDBCarouselItem itemId="2"> {/* Fun group */}
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/bkSqREU.jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-light"/> {/* overlay="black-strong" */}
              </MDBView>
              <MDBCarouselCaption>
              {/*<h3 className="h3-responsive">Strong mask</h3>*/}
                <p>Instructors were knowleadgeable, and so much fun!</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>



            <MDBCarouselItem itemId="11"> {/* group listening */}
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/E0g8ljb.jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption>
               {/* <h3 className="h3-responsive">Slight mask</h3> */}
                <p>Class discussions</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>



            
            <MDBCarouselItem itemId="8"> {/* coding me */}
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/GK8I5Hy.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
             {/* <h3 className="h3-responsive">Slight mask</h3> */}
              <p>Student-veterans learning how to code</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>




          <MDBCarouselItem itemId="7">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/uVXkqKs.jpg"
                  alt="Mattonit's item"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
          {/* <h3 className="h3-responsive"> Some dummy text</h3>  */}   
                <p>Alfredo coding the prototype of this very website</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            



            
            <MDBCarouselItem itemId="6"> {/* group from back */}
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/HR1LADd.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
            {/* <h3 className="h3-responsive">Slight mask</h3>  */} 
              <p>Learning how to code</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>


          <MDBCarouselItem itemId="9"> 
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/6eINrFU.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/*<h3 className="h3-responsive">Light mask</h3>*/}
                <p>Everyday, a new challenge</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>


            <MDBCarouselItem itemId="10"> {/* Group no instructors */}
              <MDBView>
                <img
                  className="d-block w-100"
                  src={groupPic}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/*<h3 className="h3-responsive">Light mask</h3>*/}
                <p>The First Cohort of Vets In Teach, New England Chapter</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
           



            <MDBCarouselItem itemId="5"> {/* Leon & Phillip (will & Julie here: "https://i.imgur.com/z25bE2g.jpg") */}
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/6eFYzPZ.jpg"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              {/*<h3 className="h3-responsive">Light mask</h3>*/}
              <p>Leon Noel teaching USMC Veteran, Phillip Sandberg</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>




            
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </Fade>
    </div>
    )
}
export default Carousel;