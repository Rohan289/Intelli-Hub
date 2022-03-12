import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { SIDE_BAR_DATA } from '../data/SideBarData';

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 75px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 5em;      /* Stay at the top */
    background-color: #FFFFFF; /* White */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`;

const StyledDiv = styled.div`
    font-size:2em;
    color:grey;
    text-align:center;
    margin-top:1em;
`;

const NavItem = (props) => {
    const { path, onItemClick,active } = props;

    const handleClick = () => {
        onItemClick(path);
    }
        return(
            <StyledDiv active={active}>
                <Link style={active ? {color:"green"} : {color:"#D7E5EF"}} to={props.path} className={props.css} onClick={handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledDiv>
        );
    
}




const SideNav = (props) => {
    
    const [activePath,setActivePath] = React.useState(props.location.pathname);
    const [items,setItems] = React.useState(SIDE_BAR_DATA);

    const onItemClick = (path) => {
        setActivePath(path);
    }

        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 75px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    a {
        font-size: 2.7em;
        color: ${(props) => props.active ? "white" : "#9FFFCB"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;


const NavIcon = styled.div`

`;

export const Sidebar = () => {
        return (
            <RouterSideNav></RouterSideNav>
        );

}