import React, { useEffect } from "react";
import styled from 'styled-components';
import { TIME_LOGS } from "../data/TicketFormDetails";
import { getUserDetails, isApiSuccess } from "../service";
import { ProfileButtonText } from "./NavigationBar";


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
    text-align;
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
    const [userName,setUserName] = React.useState('');
    const [timeLogs,setTimeLogs] = React.useState('');
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
    const updateTimeLogs = (e) => {
        setTimeLogs(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <StyledForm onSubmit={handleSubmit}>
        <label>Contact Details <EditText>Edit</EditText></label>
        <div className="profile-container"><ProfileImage src={require('../assets/profile.jpg')} />
        <label>{user?user.name : ''}</label>
        </div>
        <label>Email ID</label>
        <input type="email" name="name" value={user?user.emil : ''}/>
        <label>Work Phone</label>
        <input type="text" name="name" value={user?user.mobile : ''}/>
        <label>Time Logs:</label>
          <select value={user?user.logHours:''} onChange={updateTimeLogs}>
          <option value="" disabled selected hidden>Choose time log</option>
              {
                  TIME_LOGS.map((timeLog,index) => {
                      return(
                      <option value={timeLog}>{timeLog}</option>
                      )
                  })
              }
          </select>
          <button>
          <ProfileButtonText>Update</ProfileButtonText>
        </button>
        </StyledForm>
    )

}