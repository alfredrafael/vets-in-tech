import React from 'react';
import './Contact.css';
import IndividualCall from '../IndividualCall/IndividualCall';
import StudentModal from '../StudentModal/StudentModal';
import {Route} from 'react-router-dom'



class Contact extends React.Component {
	

    render() {
        return (
            <Route basename="/vets-in-tech/">
            <div style={{marginTop: '10%'}}>
            <StudentModal />
            Yup
            </div>
            </Route>
        );
    }
}

export default Contact;