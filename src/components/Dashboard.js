import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Ticket } from './common/Ticket';
import {css} from 'styled-components'
import { Link } from 'react-router-dom';
import { FilterTickets } from './FilterTickets';
import { getTicketDDetails, isApiSuccess } from '../service';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { TicketButtonData } from '../data/SideBarData';
import { ContactDetails } from './ContactDetails';
import translate from '../i18nProvider/translate';
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
const TicketHeaderText = styled.p`
color:#BECAD3;
font-weight:bold;
font-size:0.7em;
margin:0;
margin-left:0.5em;
display:inline-block;
`
const FIlterLink = styled(Link)`
color:#ABC4DA;
&:hover {
  color:grey;
  }
`
const TicketContent = styled.div`
display:grid;
grid-template-columns: 50% 25% 20%;
grid-gap:1em;
`
const StyledSkeleton = styled(Skeleton)`
border-radius : 50%;
margin-left:2%;
`
const HeaderDescriptionContainer = styled.div`
${sharedStyle};
`
export const Dashboard = () =>  {
  const [ticketDetails,setTicketDetails] = React.useState([]);
  const [dataFetch,setDataFetch] = React.useState(false);
  useEffect(() => {
    getTicketDDetails().then(res => {
      if(isApiSuccess(res)) {
        setTicketDetails(res.data);
        setDataFetch(true);
      }
    })
  },[])

  const loadPage = () => {
    return(
      <StyledSkeleton count={10} />
    )
  }

  const updateFilter = (filter) => {
    setTicketDetails(filter);
  }

  return (
  <GridWrapper>
        <TicketContent>
      <div>
    <Header>{translate("All Tickets")}</Header>
    <HeaderDescriptionContainer><TicketHeaderText>{translate("All Tickets")} &gt; 24</TicketHeaderText>
    <FIlterLink style={{marginLeft : "1em"}} className='fa-solid fa-check-square' />
    <TicketHeaderText>{translate("Overdue By 21 days")}</TicketHeaderText>
    </HeaderDescriptionContainer>
    <FilterButtonDiv>
    <FilterButton style={{marginRight:"1em"}}>
        <FIlterLink className='fa-solid fa-bookmark' />
      </FilterButton>
      {
        TicketButtonData.map((data,index) => {
          return(
            <FilterButton>
            <FIlterLink className={data.className} /><FilterButtonText>{data.value}</FilterButtonText>
          </FilterButton>
          )
        })
      }
      <FilterButton style={{marginLeft:"1em"}}>
        <FIlterLink className='fa-solid fa-ellipsis-v' />
      </FilterButton>
    </FilterButtonDiv>

    { ticketDetails.length>0 ? ticketDetails.map((ticketDetail,index) => {
        return(
          <Ticket ticketDetail={ticketDetail} />
        )
      }) : dataFetch ? null : loadPage()}
    </div>
    <div><FilterTickets updateFilter={updateFilter} /></div>
    <div><ContactDetails /></div>
    </TicketContent>
  </GridWrapper>
)
  }