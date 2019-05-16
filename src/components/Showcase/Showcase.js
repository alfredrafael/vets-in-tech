import React from 'react';
import './Showcase.css';
import Fade from 'react-reveal/Fade';



class Showcase extends React.Component {
	constructor(props) {
    super(props);
        
    }

    render() {
        return (
            <div className="photos-showcase">
            <Fade>

            <ul className="photos-showcase clearfix" style={{marginBottom: '-9%', marginTop: '-9%'}}>
                <li>
                    <figure className="single-photo">
                        <img src="https://i.imgur.com/OyWDW4R.jpg" title="source: imgur.com"/>
                    </figure>
                </li>
           
                <li>
                    <figure className="single-photo">
                     <a href="https://imgur.com/nmfCFJn"><img src="https://i.imgur.com/nmfCFJn.jpg" title="source: imgur.com" /></a>                    
                    </figure>
                </li>
            
                <li>
                    <figure className="single-photo">
                     <a href="https://imgur.com/WahZwOx"><img src="https://i.imgur.com/WahZwOx.jpg" title="source: imgur.com" /></a>                    
                    </figure>
                </li>
            
                <li>
                    <figure className="single-photo">
                     <a href="https://imgur.com/xgrZF5q"><img src="https://i.imgur.com/xgrZF5q.jpg" title="source: imgur.com" /></a>
                    </figure>
                </li>
            </ul>

            <ul className="photos-showcase clearfix">
                <li>
                    <figure className="single-photo">
                     <a href="https://imgur.com/CSQhetp"><img src="https://i.imgur.com/CSQhetp.jpg" title="source: imgur.com" /></a>
                    </figure>
                </li>
           
                <li>
                    <figure className="single-photo">
                     <a href="https://imgur.com/vZkn7zG"><img src="https://i.imgur.com/vZkn7zG.jpg" title="source: imgur.com" /></a>
                    </figure>
                </li>
            
                <li>
                    <figure className="single-photo">
                    <a href="https://imgur.com/0TCl4R5"><img src="https://i.imgur.com/0TCl4R5.jpg" title="source: imgur.com" /></a>
                    </figure>
                </li>
            
                <li>
                    <figure className="single-photo">
                    <a href="https://imgur.com/eFb2GGT"><img src="https://i.imgur.com/eFb2GGT.jpg" title="source: imgur.com" /></a>
                    </figure>
                </li>
            </ul>
            </Fade>
           </div>
        );
  }
}
export default Showcase;   