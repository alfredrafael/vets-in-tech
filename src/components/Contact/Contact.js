import React from 'react';
import './Contact.css';
import StudentModal from '../StudentModal/StudentModal';
import {Route} from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';



class Contact extends React.Component {
	

    render() {
        return (
            <Route basename="/vets-in-tech/">
            <div style={{marginTop: '10%'}}>
            <StudentModal />
            </div>
            <Testimonials />
            </Route>
        );
    }
}

export default Contact;