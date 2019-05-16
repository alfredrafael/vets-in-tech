import React from 'react';
import './Contact.css';
import StudentModal from '../StudentModal/StudentModal';
import {Route} from 'react-router-dom'
import Carousel from '../Carousel/Carousel';



class Contact extends React.Component {
	

    render() {
        return (
            <Route basename="/vets-in-tech/">
            <div style={{marginTop: '10%'}}>
            <StudentModal />
            Yup
            </div>
            <Carousel/>
            </Route>
        );
    }
}

export default Contact;