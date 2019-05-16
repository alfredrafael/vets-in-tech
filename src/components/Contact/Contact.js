import React from 'react';
import './Contact.css';
import IndividualCall from '../IndividualCall/IndividualCall';
import StudentModal from '../StudentModal/StudentModal';



class Contact extends React.Component {
	

    render() {
        return (
            <div style={{marginTop: '10%'}}>
            <StudentModal />
            </div>
        );
    }
}

export default Contact;