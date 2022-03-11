import React from "react";
import { TICKET_ASSIGNEES, TICKET_PRIORITIES, TICKET_STATUS, TICKET_STATUSES, TICKET_TYPES } from "../data/TicketFormDetails";
import styled from 'styled-components';
import { ProfileButton, ProfileButtonText } from "./NavigationBar";

const StyledForm = styled.form`
width : 100%;
height : 100%;
background-color : white;
padding : 5%;
padding-top : 5%;
margin : 2%;
select {
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
`
const FilterButton = styled.button`
text-align;
background-color:#5CDD2E;
border-radius:1.5em;
border:1px solid #A9E7A0;
`


export const FilterTickets = () => {
    const [ticket,setTicketType] = React.useState('');
    const [ticketStatus,setTicketStatus] = React.useState('');
    const [ticketPriority,setTicketPriority] = React.useState('');
    const [ticketAssignee,setTicketAssignee] = React.useState('');
    const updateTicketAssignee = (e) => {
        setTicketAssignee(e.target.value);
    }
    const updateTicketStatus = (e) => {
        setTicketStatus(e.target.value);
    }
    const updateTicketPriority = (e) => {
        setTicketPriority(e.target.value);
    }

    const updateTicketType = (e) => {
       setTicketType(e.target.value);
    }
    return(
        <StyledForm>
        <label>Properties</label>
        <label>Type:</label>
          <select value={ticket} onChange={updateTicketType}>
          <option value="" disabled selected hidden>Choose type</option>
              {
                  TICKET_TYPES.map((ticketType,index) => {
                      return(
                      <option value={ticketType}>{ticketType}</option>
                      )
                  })
              }
          </select>
          <label>Status:</label>
          <select value={ticketStatus} onChange={updateTicketStatus}>
          <option value="" disabled selected hidden>Choose status</option>
              {
                  TICKET_STATUSES.map((ticketStatus,index) => {
                      return(
                      <option value={ticketStatus}>{ticketStatus}</option>
                      )
                  })
              }
          </select>
          <label>Priority:</label>
          <select value={ticketPriority} onChange={updateTicketPriority}>
          <option value="" disabled selected hidden>Choose priority</option>
              {
                  TICKET_PRIORITIES.map((ticketPriority,index) => {
                      return(
                      <option value={ticketPriority}>{ticketPriority}</option>
                      )
                  })
              }
          </select>
          <label>Assign to:</label>
          <select value={ticketAssignee} onChange={updateTicketAssignee}>
          <option value="" disabled selected hidden>Choose assignee</option>
              {
                  TICKET_ASSIGNEES.map((ticketAssignee,index) => {
                      return(
                      <option value={ticketAssignee}>{ticketAssignee}</option>
                      )
                  })
              }
          </select>
        <FilterButton>
          <ProfileButtonText>Update</ProfileButtonText>
        </FilterButton>
      </StyledForm>
    )
}