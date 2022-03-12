import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { css } from 'styled-components';
import { LOCALE_DATA } from '../data/SideBarData';
import { LOCALES } from '../i18nProvider';
import { getSearchedByTicketDetails, isApiSuccess } from '../service';

const common = css`
display:flex;
flex-direction:row;
align-items: center;
justify-content: center;
`

const Styles = styled.div`
  .navbar { background-color: white; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
  }
  select {
    border : none;
    color: #ffffff;
    font-weight:bold;
    &.active {
        background-color:transparent;
        border : none;
    }
    
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
  .icon-button {
    position: relative;
   ${common};
    color: #333333;
    background: white;
    border: none;
    outline: none;
    border-radius: 50%;
    margin:0.2em 0em 0em 1em;
  }
  
  .icon-button__badge {
    position: absolute;
    top: -10px;
    right: -15px;
    width: 25px;
    height: 25px;
    background: red;
    color: #ffffff;
    ${common};
    border-radius: 50%;
  }
  .profile-section {
    ${common};
  }
  img {
    width: 40px;
    height : 40px;
    margin-left : 4em;
  }
  label {
    color : #2B3E4D;
    font-weight:bold;
    display:block;
    margin-top : 5%;
    margin-bottom : 5%;  
  }
  .profile-button {
    ${common};
    background-color:#5CDD2E;
    border-radius:1.5em;
    border:1px solid #A9E7A0;
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
margin-left:50%;
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
const NotificationIcon = styled(Link)`
display: flex;
margin: 0.2em 0em 0em 1em;
font-size: 2em;
`
export const NavigationBar = (props) => {
  const {updateLocale,searchedTicket} = props;
  const [defaultLanguage,setDefaultLanguage] = React.useState(LOCALES.ENGLISH);
  const [tickets,searchTickets] = React.useState('');

  const updateDefaultLanguage= (e) => {
   setDefaultLanguage(e.target.value);
   updateLocale(e.target.value);
}

const searchTicket = (e) => {
  searchTickets(e.target.value);
  getSearchedByTicketDetails(e.target.value).then(res => {
    if(isApiSuccess(res)) {
      searchedTicket(res.data);
    }
  })
}
return(
  <Styles>
    <StyledNavBar expand="lg">
      <StyledNavBar.Brand href="/">
      <StyledIcon className={"fa fw fa-envelope-open-text"}/>
        </StyledNavBar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl onChange={searchTicket} type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <StyledRightHeader>
        <select value={defaultLanguage} onChange={updateDefaultLanguage} className={"profile-button"}>
          <ProfileButtonIcon className='fa fw fa-caret-down' />
          {
                  LOCALE_DATA.map((lang,index) => {
                      return(
                      <option value={lang.value}>{lang.key}</option>
                      )
                  })
              }
        </select>
        <button type="button" class="icon-button">
        <NotificationIcon className='fa fw fa-envelope' />
        <span class="icon-button__badge">2</span>
        </button>
        <button type="button" className={"icon-button"}>
        <NotificationIcon className='fa fw fa-bell' />
        <span class="icon-button__badge">2</span>
        </button>
        <div className='profile-section'>
        <img src={require('../assets/profile.jpg')} />
        <label>Rohan Bhowmick</label>
        </div>
        </StyledRightHeader>
      </Navbar.Collapse>
    </StyledNavBar>
  </Styles>
)}