import React from "react";
import { TICKET_ASSIGNEES, TICKET_PRIORITIES, TICKET_STATUSES, TICKET_TYPES } from "../data/TicketFormDetails";
import styled from 'styled-components';
import { ProfileButtonText } from "./NavigationBar";
import { getFilteredTicketDetails, isApiSuccess } from "../service";
import translate from '../i18nProvider/translate';

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
  .filter-button {
    text-align;
    background-color:#5CDD2E;
    border-radius:1.5em;
    border:1px solid #A9E7A0;
  }
`

export const FilterTickets = (props) => {
    const {updateFilter} = props;
    const [ticket,setTicketType] = React.useState('');
    const [ticketStatus,setTicketStatus] = React.useState('');
    const [ticketPriority,setTicketPriority] = React.useState('');
    const [ticketAssignee,setTicketAssignee] = React.useState('');
    const [formData,setFormData] = React.useState(null);

    const updateTicketAssignee = (e) => {
        setFormData({...formData,"assignee" : e.target.value});
        setTicketAssignee(e.target.value);
    }
    const updateTicketStatus = (e) => {
        setFormData({...formData,"status" : e.target.value});
        setTicketStatus(e.target.value);
    }
    const updateTicketPriority = (e) => {
        setFormData({...formData,"priority" : e.target.value});
        setTicketPriority(e.target.value);
    }

    const updateTicketType = (e) => {
        setFormData({...formData,"type" : e.target.value});
       setTicketType(e.target.value);
    }

    const resetForm = () => {
        setTicketAssignee('');
        setTicketPriority('');
        setTicketType('');
        setTicketStatus('');
        setFormData(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getFilteredTicketDetails(formData).then(res => {
            if(isApiSuccess(res)) {
                updateFilter(res.data);
                resetForm();
            }
        })
    }

    return(
        <StyledForm onSubmit={handleSubmit}>
        <label>{translate("Properties")}</label>
        <label>{translate("Type")}:</label>
          <select value={ticket} onChange={updateTicketType}>
          <option value="" disabled selected hidden>Choose type</option>
              {
                  TICKET_TYPES.map((ticketType,index) => {
                      return(
                      <option key={index} value={ticketType}>{ticketType}</option>
                      )
                  })
              }
          </select>
          <label>{translate("Status")}:</label>
          <select value={ticketStatus} onChange={updateTicketStatus}>
          <option value="" disabled selected hidden>Choose status</option>
              {
                  TICKET_STATUSES.map((ticketStatus,index) => {
                      return(
                      <option key={index} value={ticketStatus}>{ticketStatus}</option>
                      )
                  })
              }
          </select>
          <label>{translate("Priority")}:</label>
          <select value={ticketPriority} onChange={updateTicketPriority}>
          <option value="" disabled selected hidden>Choose priority</option>
              {
                  TICKET_PRIORITIES.map((ticketPriority,index) => {
                      return(
                      <option key={index} value={ticketPriority}>{ticketPriority}</option>
                      )
                  })
              }
          </select>
          <label>{translate("Assign To")}:</label>
          <select value={ticketAssignee} onChange={updateTicketAssignee}>
          <option value="" disabled selected hidden>Choose assignee</option>
              {
                  TICKET_ASSIGNEES.map((ticketAssignee,index) => {
                      return(
                      <option key={index} value={ticketAssignee}>{ticketAssignee}</option>
                      )
                  })
              }
          </select>
        <button className={"filter-button"} type="submit" >
          <ProfileButtonText>{translate("Update")}</ProfileButtonText>
        </button>
      </StyledForm>
    )
}