import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {css} from 'styled-components'
import { TicketTypeBadges } from "../../data/TicketFormDetails";


const sharedFlexBetwenStyle = css`
display:flex;
justify-content:space-between;
`
const sharedFlexStartStyle=css`
display: flex; 
justify-content: flex-start;
`
const StyledCard=styled.div`
transition: 0.3s;
width:100%;
margin:2%;
`
const StyledCardContent=styled.div`
${sharedFlexBetwenStyle}
padding:1%;
margin:1%;
margin-top:0
background-color:white;
border-bottom-right-radius:2%;
border-bottom-left-radius:2%;
`

const StyledHeader = styled.div`
background-color:#F9FDFC;
${sharedFlexBetwenStyle}
padding:1%;
margin:1%;
margin-bottom:0;
border-top-right-radius:2%;
border-top-left-radius:2%;
span {
    margin-left : 1em;
}
`
const ProfileHeader = styled.div`
margin-top : 1%;
display:flex;
`
const ProfileHeaderName = styled.div`
display:flex;
flex-direction:column;
margin-left:1%;
`
const ProfileImage = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
`

const ProfileTicketName = styled.p`
font-weight: bold;
font-size: 0.8em;
margin:0;
padding:0;
white-space: nowrap;
`
const ProfileTicketIssuer = styled.p`
font-size:0.6em;
color : #006400;
margin:0;
padding:0;
`
const ProfileTicketDescriptionDiv = styled.div`
${sharedFlexStartStyle}
`
const ProfileHeaderMenu = styled.div`
${sharedFlexStartStyle}
align-items:center;
`
const ProfileTicketDescription = styled.p`
color : #BDCFDC;
font-size:0.6em;
margin:0;
padding:0;
margin-left:0.2em;
font-weight:bold;
`

const Menu = styled(Link)`
color:grey;
margin-left:0.5em;
size:0.5em;
`

const TicketStatusText = styled.p`
color: ${props => props.Closed ? "red" : "green"};
display : inline-block;
margin-left:1em;
`

export const Ticket = (props) => {
    const {ticketDetail} = props;
    
    const getCardContent = () => {
        return(
        <StyledCardContent>
        <ProfileTicketDescription> {ticketDetail?ticketDetail.description : ''}</ProfileTicketDescription>
        </StyledCardContent>
        )
    }

    const getCardHeader = () => {
        return (
            <StyledHeader>
                <ProfileHeader>
                <div><ProfileImage src={require('../../assets/profile.jpg')} /></div>
                <ProfileHeaderName>
                    <div>
                <ProfileTicketName>{ticketDetail?ticketDetail.name : ''}
                    {
                        TicketTypeBadges.map((badge,index) => {
                            if(ticketDetail && badge.name === ticketDetail.type) {
                                return(
                                    <span key={index} className={badge.css}>{badge.value}</span>
                                )
                            }
                        })
                    }
                  </ProfileTicketName>
                </div><div>
                    <ProfileTicketDescriptionDiv><ProfileTicketIssuer>{ticketDetail?ticketDetail.assignee : ''}</ProfileTicketIssuer>
                    <ProfileTicketDescription>reported in Issue<TicketStatusText {...ticketDetail?ticketDetail.status : ''}>{ticketDetail?`(${ticketDetail.status})`:''}</TicketStatusText></ProfileTicketDescription>
                    </ProfileTicketDescriptionDiv></div>
                </ProfileHeaderName>
                </ProfileHeader>
                <ProfileHeaderMenu>
                    <ProfileTicketDescription>a day ago | Wed 08 2018 at 08:34 am</ProfileTicketDescription>
                    <Menu className={"fa fw fa-ellipsis-v"}/>
                </ProfileHeaderMenu>
            </StyledHeader>
        )
    }

return(
  <>
  <StyledCard>
  {getCardHeader()}
  {getCardContent()}
  </StyledCard>
  </>
)
}