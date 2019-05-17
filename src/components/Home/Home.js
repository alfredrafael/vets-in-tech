import React from "react";
import "./Home.css";
import Intro from '../Intro/Intro';
import VideoHero from '../VideoHero'
import Showcase from '../Showcase'
import Agradecimientos from "../agradecimientos/Agradecimientos";
import Rollcall from '../Rollcall/Rollcall';
import Carousel from '../Carousel/Carousel';
import Testimonials from '../Testimonials/Testimonials';
import Logos from '../Logos/Logos';



class Home extends React.Component {
  constructor(props) {
    super(props);
//  this.state = {};
}

  render() {
    return (
      
      <div className="homeText">
        <VideoHero />
        <Intro />
        <Showcase />
        <Agradecimientos />
        <Testimonials />
        <Logos />
        <Rollcall />
        
      </div>     
    );
  }
}
export default Home;
