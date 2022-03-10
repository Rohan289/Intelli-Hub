import axios from "axios";

export const getTicketDDetails = () => {
    return axios.get(`${process.env.REACT_APP_INTELLI_HUB_API}/list_ticket_details`);

}

export const isApiSuccess = (call) => {
    if(call && call.status && call.status  === 200) {
        return true;
    }
    return false;
}