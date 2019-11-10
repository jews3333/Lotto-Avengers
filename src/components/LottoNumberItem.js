import React from 'react';
import styled from 'styled-components';

const LottoNumberItem = ({number, length}) => {
    return (
        <NumberItem>
            <Type number={number}>
                <span>{number}</span>
            </Type>
            <div>
                {length}
            </div>
        </NumberItem>
    );
}

const NumberItem = styled.li`
    width: calc(100% / 5);
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

export default LottoNumberItem;