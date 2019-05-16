import React from "react";
import "./Intro.css";
import {Media} from "reactstrap";


class Intro extends React.Component {
  render() {
    return (
      <div className="introComponent">
          <Media body>
           <Media heading>
             <h1 style={{fontSize: '250%', fontWeight: '200', marginBottom: '4%', color: '#6f1ba1'}}>Who are we?</h1>
           </Media>
           <p className='generalText'>          
           We are the proud, first cohort of the <strong>VetsInTech </strong> & <strong> DraftKings' </strong> Web-Development Program at General Assembly.
           For three months, veterans, service members and military-spouses alike studied, learned and became Front-End 
           Software Engineers. Enjoy your journey with us!
           </p>
        </Media>
      </div>
    );
  }
}
export default Intro;