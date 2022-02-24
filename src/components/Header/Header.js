import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link, NavLink, withRouter } from 'react-router-dom';
import { HomeRounded, SchoolRounded, WorkRounded, Facebook, Twitter, LinkedIn, GitHub, Telegram } from '@material-ui/icons'
import resumeData from '../../utils/resumeData';
import CustButton from '../Button/Button'
import './Header.css'
import '../../../src/App.css'

const Header = (props) => {
  const pathName = props?.loction?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">

      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link*/}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}>
            Resume
          </Nav.Link>


          {/*portfolio*/}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={pathName == "/porfolio" ? "header_link_active" : "header_link"}>
            Portfolio
          </Nav.Link>
        </Nav>


        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].Link} target="_blank">
              {resumeData.socials[key].icon}
            </a>


          ))}

          <CustButton text1={'Hire Me'} icon={<Telegram />} />


        </div>

      </Navbar.Collapse>

    </Navbar>

  )
}

export default withRouter(Header)
