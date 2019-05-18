import React from 'react';
import './Contact.css';
import StudentModal from '../StudentModal/StudentModal';
import {Route} from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';
import Logos from '../Logos/Logos';
import Instrutors from '../Instructors/Instructors';
import Instructors from '../Instructors/Instructors';



class Contact extends React.Component {
	

    render() {
        return (
            <Route basename="/vets-in-tech/">
            <div style={{marginTop: '15%'}}>
            </div>
            <Logos />
            <Instructors />
            </Route>
        );
    }
}

export default Contact;