import React, { useEffect } from "react";
import styled from 'styled-components';
import { TIME_LOGS } from "../data/TicketFormDetails";
import { getUserDetails, isApiSuccess } from "../service";
import { ProfileButtonText } from "./NavigationBar";
import translate from "../i18nProvider/translate";

const StyledForm = styled.form`
width : 100%;
height : 100%;
background-color : white;
padding : 5%;
padding-top : 5%;
margin : 2%;
input , select {
    border : none;
    width : 100%;
    border-bottom : 0.5px solid #E5E6EA;
    color: #A8A8A8;
    appearance: none;
    background-color:transparent;
    &.active {
        background-color:transparent;
        border : none;
    }
  }
  label {
    color : #2B3E4D;
    font-weight:bold;
    display:block;
    margin-top : 5%;
    margin-bottom : 5%;  
  }

  textarea {
      width : 100%;
      border : none;
      border : 0.5px solid #E5E6EA;
  }
  button {
      margin-left : 20%;
      width : 60%;
      margin-top : 5%;
  }
  .profile-container {
      display:flex;
      flex-direction : row;
      margin-top : 10%
  }
  button {
    display:flex;
    justify-content : center;;
    background-color:#5CDD2E;
    border-radius:1.5em;
    border:1px solid #A9E7A0;
  }
`
const EditText = styled.p`
margin : 0em 0em 0em 1em;
color : green;
font-weight : bold;
font-size : 1em;
display:inline-block;
`
const ProfileImage = styled.img`
width: 80px;
height: 80px;
`



export const ContactDetails = () => {
    const [user,setUser] = React.useState(null);
    const [dataFetched,setDataFetch] = React.useState(false);
    useEffect(() => {
        getUserDetails().then(res => {
            if(isApiSuccess(res)) {
                setUser(res.data);
                setDataFetch(true);
            }
        })
    },[])
 
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <StyledForm onSubmit={handleSubmit}>
        <label>{translate("Contact Details")} <EditText>Edit</EditText></label>
        <div className="profile-container"><ProfileImage src={require('../assets/profile.jpg')} />
        <label>{user?user.name : ''}</label>
        </div>
        <label>{translate("Email ID")}</label>
        <input disabled type="email" name="name" value={user?user.emil : ''}/>
        <label>{translate("Work Phone")}</label>
        <input disabled type="text" name="name" value={user?user.mobile : ''}/>
        <label>{translate("Time Logs")}:</label>
          <select disabled value={user?user.logHours:''}>
          <option value="" disabled selected hidden>Choose time log</option>
              {
                  TIME_LOGS.map((timeLog,index) => {
                      return(
                      <option key={index} value={timeLog}>{timeLog}</option>
                      )
                  })
              }
          </select>
          <button disabled>
          <ProfileButtonText>{translate("Update")}</ProfileButtonText>
        </button>
        </StyledForm>
    )

}