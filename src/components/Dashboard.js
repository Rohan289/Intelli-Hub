import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Ticket } from './common/Ticket';
import {css} from 'styled-components'
import { Link } from 'react-router-dom';
import { FilterTickets } from './FilterTickets';
import { getTicketDDetails, isApiSuccess } from '../service';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const sharedStyle = css`
font-weight:bold;
margin:2%;
`

const GridWrapper = styled.div`
  background-color:#F7F7FC;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 2em;
`;
const Header = styled.h2`
color:#313F54;
font-size:1em;
${sharedStyle}
`

const HeaderDescription = styled.h3`
color:grey;
font-size:0.7em;
${sharedStyle}
margin-top:0;
margin-bottom:0;
`
const FilterButtonDiv=styled.div`
display:flex;
margin-left:2%;
width : 100%;
@media (max-width: 1006px) {
  overflow:scroll;
}
`
const FilterButton = styled.button`
border:1px solid #D4E1E2;
display:flex;
padding:0.4em;
align-items:center;
`
const FilterButtonText = styled.p`
color:#BECAD3;
font-weight:bold;
font-size:0.6em;
margin:0;
margin-left:0.5em;
`
const FIlterLink = styled(Link)`
color:#ABC4DA;
&:hover {
  color:grey;
  }
`
const TicketContent = styled.div`
display:grid;
grid-template-columns: 50% 25% 25%;
grid-gap:1em;
`
const StyledSkeleton = styled(Skeleton)`
border-radius : 50%;
margin-left:2%;
`
export const Dashboard = () =>  {
  const [ticketDetails,setTicketDetails] = React.useState([])
  useEffect(() => {
    getTicketDDetails().then(res => {
      if(isApiSuccess(res)) {
        setTicketDetails(res.data);
      }
    })
  },[])

  const loadPage = () => {
    return(
      <StyledSkeleton count={5} />
    )
  }

  return (
  <GridWrapper>
        <TicketContent>
      <div>
    <Header>All Tickets</Header>
    <FilterButtonDiv>
    <FilterButton style={{marginRight:"1em"}}>
        <FIlterLink className='fa-solid fa-bookmark' />
      </FilterButton>
      <FilterButton>
        <FIlterLink className='fa-solid fa-reply' /><FilterButtonText>Reply</FilterButtonText>
      </FilterButton>
      <FilterButton>
        <FIlterLink className='fa-solid fa-sticky-note' /><FilterButtonText>Add Note</FilterButtonText>
      </FilterButton>
      <FilterButton>
        <FIlterLink className='fa-solid fa-mail-forward' /><FilterButtonText>Forward</FilterButtonText>
      </FilterButton>
      <FilterButton>
        <FIlterLink className='fa-solid fa-times-circle' /><FilterButtonText>Close</FilterButtonText>
      </FilterButton>
      <FilterButton>
        <FIlterLink className='fa-solid fa-code-merge' /><FilterButtonText>Merge</FilterButtonText>
      </FilterButton>
      <FilterButton>
        <FIlterLink className='fa-solid fa-trash' /><FilterButtonText>Delete</FilterButtonText>
      </FilterButton>
      <FilterButton style={{marginLeft:"1em"}}>
        <FIlterLink className='fa-solid fa-ellipsis-v' />
      </FilterButton>
    </FilterButtonDiv>

    { ticketDetails ? ticketDetails.map((ticketDetail,index) => {
        return(
          <Ticket ticketDetail={ticketDetail} />
        )
      }) : loadPage()}
    </div>
    <div>
      <FilterTickets />
    </div>
    <div></div>
    </TicketContent>
  </GridWrapper>
)
  }