import React from "react";
import "./AppNavbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);
    //////////////////////////for navbar (add first) ////////////////////////////
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    //////////////////////////for navbar (add first) ////////////////////////////
  }

  render() {
    return (
      <div className="navBarText">
        <Navbar sticky="top" className="navbarStyle container-fluid" style={{position: 'fixed', borderBottom: '.1px solid grey', fontFamily: 'Lato', fontSize: '130%'}} dark expand="md" bg="red">
          <NavbarBrand style={{marginLeft: '5%'}} href="https://alfredrafael.github.io/vets-in-tech/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{marginRight: '5%'}}>
              <NavItem>
                <NavLink href="/contact/" style={{color: 'white'}}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://vetsintech-boston.netlify.com/" style={{color: 'white'}} target="_blank">
                  Old Website
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color: 'white'}}>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default AppNavbar;
