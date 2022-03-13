import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Ticket } from './common/Ticket';
import {css} from 'styled-components'
import { Link } from 'react-router-dom';
import { FilterTickets } from './FilterTickets';
import { getTicketDDetails, isApiSuccess } from '../service';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { TICKET_BUTTON_DATA } from '../data/SideBarData';
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
  .ticket-content {
    display:grid;
    grid-template-columns: 50% 25% 20%;
    grid-gap:1em;
    }
  .header {
    ${sharedStyle};
    color:#313F54;
    font-size:1em;
  }
  .header-description-container {
    ${sharedStyle};
  }
  .filter-button-div {
    display:flex;
    margin-left:2%;
    width : 100%;
    @media (max-width: 1006px) {
      overflow:scroll;
    }
  }
  .filter-button {
    border:1px solid #D4E1E2;
    display:flex;
    padding:0.4em;
    align-items:center;
  }
  .filter-button-text {
    color:#BECAD3;
    font-weight:bold;
    font-size:0.6em;
    margin:0;
    margin-left:0.5em;
  }
  .ticket-header-text {
    color:#BECAD3;
    font-weight:bold;
    font-size:0.7em;
    margin:0;
    margin-left:0.5em;
    display:inline-block;
  }
`;

const FilterLink = styled(Link)`
color:#ABC4DA;
&:hover {
  color:grey;
  }
`
const StyledSkeleton = styled(Skeleton)`
border-radius : 50%;
margin-left:2%;
`

export const Dashboard = (props) =>  {
  const {searchTicket} = props;
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
        <div className={"ticket-content"}>
      <div>
    <h2 className={"header"}>{translate("All Tickets")}</h2>
    <div className={"header-description-container"}><p className={"ticket-header-text"}>{translate("All Tickets")} &gt; 24</p>
    <FilterLink style={{marginLeft : "1em"}} className='fa-solid fa-check-square' />
    <p className={"ticket-header-text"}>{translate("Overdue By 21 days")}</p>
    </div>
    <div className={"filter-button-div"}>
    <button className={"filter-button"} style={{marginRight:"1em"}}>
        <FilterLink className='fa-solid fa-bookmark' />
      </button>
      {
        TICKET_BUTTON_DATA.map((data,index) => {
          return(
            <button className={"filter-button"}  key={index}>
            <FilterLink key={index} className={data.className} /><p className={"filter-button-text"}>{data.value}</p>
          </button>
          )
        })
      }
      <button className={"filter-button"}  style={{marginLeft:"1em"}}>
        <FilterLink className='fa-solid fa-ellipsis-v' />
      </button>
    </div>

    { ticketDetails.length > 0 ? searchTicket ? ticketDetails.filter(item1 => searchTicket.some(item2 => item1.id === item2.id)).map((ticketDetail,index) => {
      return(
        <Ticket key={index} ticketDetail={ticketDetail} />
      )
    }) : ticketDetails.map((ticketDetail,index) => {
        return(
          <Ticket key={index} ticketDetail={ticketDetail} />
        )
      }) : dataFetch ? null : loadPage()}
    </div>
    <div><FilterTickets updateFilter={updateFilter} /></div>
    <div><ContactDetails /></div>
    </div>
  </GridWrapper>
)
  }