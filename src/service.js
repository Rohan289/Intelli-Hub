import axios from "axios";

export const getTicketDDetails = () => {
    return axios.get(`${process.env.REACT_APP_INTELLI_HUB_API}/list_ticket_details`);

}

export const getSearchedByTicketDetails = (query) => {
    return axios.get(`${process.env.REACT_APP_INTELLI_HUB_API}/list_ticket_details?search=${query}`);
}

export const getFilteredTicketDetails = (obj) => {
let queryString = obj? Object.keys(obj).map(key => key + '=' + obj[key]).join('&') : '';
return axios.get(`${process.env.REACT_APP_INTELLI_HUB_API}/list_filtered_ticket_details?${queryString}`);
}

export const getUserDetails = () => {
    return axios.get(`${process.env.REACT_APP_INTELLI_HUB_API}/user_details`);
}

export const isApiSuccess = (call) => {
    if(call && call.status && call.status  === 200) {
        return true;
    }
    return false;
}