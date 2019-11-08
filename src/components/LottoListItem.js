import React from 'react';
import styled from 'styled-components';

const LottoListItme = ({ episode, round1, round2, round3, round4, round5, bonus }) => {
    return (
        <ListWrap>
            <ListItem>{episode}회차</ListItem>
            <ListItem><Type number={round1}><span>{round1}</span></Type></ListItem>
            <ListItem><Type number={round2}><span>{round2}</span></Type></ListItem>
            <ListItem><Type number={round3}><span>{round3}</span></Type></ListItem>
            <ListItem><Type number={round4}><span>{round4}</span></Type></ListItem>
            <ListItem><Type number={round5}><span>{round5}</span></Type></ListItem>
            <ListItem><Type number={bonus}><span>{bonus}</span></Type></ListItem>
        </ListWrap>
    );
}

const ListWrap = styled.ul`
    display:table;
    width:100%;
    table-layout: fixed;
    border-bottom:1px solid #ccc;
`;

const ListItem = styled.li`
    display:table-cell;
    vertical-align: middle;
    text-align: center;
    padding:10px;
`;

const Type = styled.div`
    display:inline-block;
    width:50px;
    height:50px;
    padding-top:15px;
    font-size:1.2em;
    text-align: center;
    color: #fff;
    border-radius:50%;
    text-shadow:0 0 2px rgba(0,0,0,0.5);
    background-color: ${props => (props.number < 10 ? '#fbc400' : props.number < 20 ? '#69c8f2' : props.number < 30 ? '#ff7272' : props.number < 40 ? '#aaa' : '#b0d840')}
`;

export default LottoListItme;