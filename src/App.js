import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import AppNavbar from './components/AppNavbar'
import Home from './components/Home';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import VideoHero from './components/VideoHero/VideoHero';




class App extends Component {

  	constructor(props) {
    super(props);
      
    }
  
  render() {
    return (
      <Router basename="/vets-in-tech/">
      
        <div className="App">

            <div>
              <AppNavbar /> {/* This will always appear, in all pages, because is in App.js without path (withough conditions, maybe?) */}
            </div>
     
            <div className='homeStyle'>
              <Route exact path="/" component={Home}/>
            </div>

            <div className='contactStyle'>
              <Route path="/videoHero" component={VideoHero}/>
            </div>

            <div>
              <Route path="/contact/" component={Contact}/>
            </div>
          
        <Footer/> {/* This will always appear, in all pages, because is in App.js without path (withough conditions, maybe?) */}
          
        </div>

      </Router>
    );
  }
}


export default App;