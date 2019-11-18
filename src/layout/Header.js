import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/list" activeClassName="active">List</NavLink>
            <NavLink to="/number" activeClassName="active">Number</NavLink>
        </Nav>
    )
}

const Nav = styled.header`
    text-align: center;
    background:#666;
    color:#fff;
    padding:15px;

    & > a {
        color:#fff;
        margin: 0 20px;
    }
    
`;

export default Header;