import React from "react";
import "./AppNavbar.css";
import ourLogo from "../../assets/our-class-logo-white.png";
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
import { Link } from "react-scroll";

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
      <div className="navbarWrapper">
        <Navbar
          sticky="top"
          className="navbarStyle container-fluid"
          style={{
            position: "fixed",
            borderBottom: ".1px solid grey",
            fontFamily: "Lato",
            fontSize: "130%"
          }}
          dark
          expand="md"
          bg=""
        >
          <NavbarBrand
            style={{ marginLeft: "5%",
           }}
            href="https://alfredrafael.github.io/vets-in-tech/"
          >
            <img
              src={ourLogo}
              style={{
                maxWidth: "7%",
                float: "left",
                marginTop: "1%",
                marginRight: "1%"
              }}
            />

            <div style={{position: 'relative', marginLeft: '10%', marginTop: '1%'}}>
              <div style={{
                   position: 'absolute',
                   marginTop: '0',
                   float: "left",
                   display: "block",
                   marginTop: '-1%',
                }}>
                New England
              </div>
            
              <div style={{
                   position: 'absolute',
                   float: "left",
                   display: "block",
                   marginTop: '4%',
                }}>
                <strong>First Class</strong>
              </div>
            </div>
            {/* 
            <div style={{width: '100%', display: 'table'}}>
              <div style={{display: 'table-row'}}>
                <div style={{width: '600px', display: 'table-cell'}}> Left </div>
                <div style={{display: 'table-cell'}}> Right </div>
              </div>
            </div>

            <div style="width: 100%; overflow: hidden;">
              <div style="width: 600px; float: left;"> Left </div>
              <div style="margin-left: 620px;"> Right </div>
            </div>
 */}
          </NavbarBrand>
          <NavbarToggler 
            onClick={this.toggle} 
            style={{position: 'absolute', 
            marginLeft: '85%', 
            overflow: 'visible',
            color: 'red'
        }}/>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{ marginRight: "5%" }}>
              <NavItem>
                <NavLink style={{ color: "white" }}>
                  {" "}
                  {/* Leaving this here to inherit css-code from reactstrap :( */}
                  <Link
                    activeClass="active"
                    to="sponsors"
                    spy={true}
                    smooth={true}
                    offset={-135}
                    duration={800}
                    onSetActive={this.handleSetActive}
                  >
                    Sponsors
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "white" }} 
                > {/* keeping the <NavLink/> to inherit the inherent CSS Rules */}
                  <Link
                    activeClass="active"
                    to="ourTeam"
                    spy={true}
                    smooth={true}
                    offset={-79}
                    duration={500}
                    onSetActive={this.handleSetActive}
                  >
                    Our Team
                  </Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color: "white" }}>
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
