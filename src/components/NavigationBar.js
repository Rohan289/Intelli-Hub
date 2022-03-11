import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const Styles = styled.div`
  .navbar { background-color: white; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
  }
  .navbar-brand {
    font-size: 2.5em;
    width: 75px;
    text-align:center;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 7%;
    right: 50%;
  }
  .ml-auto {
    margin-left:60%;
  }
`;

const StyledIcon = styled(Link)`
font-size:1em;
color:green;
`

const StyledNavBar = styled(Navbar)`
padding:0;
`
const StyledRightHeader = styled.div`
display:flex;
margin-left:60%;
`
export const ProfileButton = styled.button`
display:flex;
align-items:center;
background-color:#5CDD2E;
border-radius:1.5em;
border:1px solid #A9E7A0;

`
export const ProfileButtonText = styled.p`
color:white;
font-weight:bold;
font-size: 0.7em;
white-space: nowrap;
border-radius:1em;
margin:1em;
`
const ProfileButtonIcon = styled(Link)`
color:white;
`

export const NavigationBar = () => (
  <Styles>
    <StyledNavBar expand="lg">
      <StyledNavBar.Brand href="/">
      <StyledIcon className={"fa fw fa-envelope-open-text"}/>
        </StyledNavBar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <StyledRightHeader>
        <ProfileButton>
          <ProfileButtonText>New Ticket</ProfileButtonText>
          <ProfileButtonIcon className='fa fw fa-caret-down' />
        </ProfileButton>
        </StyledRightHeader>
      </Navbar.Collapse>
    </StyledNavBar>
  </Styles>
)