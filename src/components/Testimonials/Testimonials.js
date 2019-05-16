import React from 'react';
import './Testimonial.css'
import {Jumbotron} from 'reactstrap';


class Testimonials extends React.Component {

    render() {
        return (
        
            <div className="testimonialWrapper" style={{backgroundImage: 'url(https://i.imgur.com/iZT5bfY.jpg)'}}>

            <div className="parallax">
                    <div className="parallax__layer parallax__layer--back">
                    <img></img>
                        <div className="title">This is the background</div>
                    </div>

                    <div className="parallax__layer parallax__layer--base">
                         <div className="title">This is the foreground</div>
                    </div>
            </div>

        </div>

        );
   }
}
export default Testimonials;