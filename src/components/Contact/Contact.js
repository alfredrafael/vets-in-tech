import React from 'react';
import './Contact.css';
import IndividualCall from '../IndividualCall/IndividualCall';
import StudentModal from '../StudentModal/StudentModal';



class Contact extends React.Component {
	

    render() {
        return (
            <React.Fragment basename="/vets-in-tech/">
            <div style={{marginTop: '10%'}}>
            <StudentModal />
            Yup!
            </div>
            </React.Fragment>
        );
    }
}

export default Contact;