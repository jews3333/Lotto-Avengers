import React from 'react';
import styled from 'styled-components';

const LottoNumberItem = ({number, length}) => {
    return (
        <NumberItem>
            <Type number={number}>
                <span>{number}</span>
            </Type>
            <Info>
                <dl>
                    <dt>총 갯수</dt>
                    <dd>{length}</dd>
                </dl>
            </Info>
        </NumberItem>
    );
}

const NumberItem = styled.li`
    width: calc(100% / 5);
    text-align: center;
    margin-bottom:15px;
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

const Info = styled.div`

`;

export default LottoNumberItem;