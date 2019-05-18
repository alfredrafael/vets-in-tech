import React from "react";
//import myVideoBanner from "../../assets/GA-hero-clip-4.mp4";
import {Link} from 'react-scroll';
import {Jumbotron} from "reactstrap";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';



const MyButton = styled.button`
background: ${props => props.ghost ? "transparent" : "#7000ff76"}
font-size: 1em;
margin: 1em;
padding: 0.45em 3em;
border: .5px solid grey;
border-radius: 10px;
color: white;
&:hover {
    background: ${props => props.ghost ? '#701ba19e': 'transparent'};
    transition: .5s;
    text-decoration: none;
} & a:hover {
    text-decoration: none;
}
`;


class VideoHero extends React.Component {
    constructor(props) {
      super(props);
      //  this.state = {};
  
      this.video = this.createVideoComponent(); // 1 "bindish" video compoenent
    }
  
    createVideoProps() {
      // 2- create function with object with video Props
      return {
        "data-video-id": "introVideo",
        // 'src':'https://media.w3.org/2010/05/sintel/trailer.mp4', // Dummy video fed from the internet (not youtube, btw...)
        // 'src': 'https://i.imgur.com/4fCj9Y9.mp4', // video source, but is not the one rendering here
        controls: false,
        muted: true,
        "data-yes": true,
        "data-no": false /*?*/,
        loop: true,
        "object-fit": "cover"
      };
    }
  
    createVideoComponent() {
      // 3 re-assings the funtion to just 'videoProps'
      const videoProps = this.createVideoProps();
      return (
        <div className="ui fluid image" style={{ position: "relative" }}>
        <Fade>
          
  

          </Fade>
        </div>
      );
    }
  
    render() {
      return( 
        <div>
            {this.video}
        </div>
        );
    }
 }

  export default VideoHero;