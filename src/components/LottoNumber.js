import React from 'react';
import styled from 'styled-components';
import LottoNumberItem from './LottoNumberItem';

const LottoNumber = ({number}) => {
    return (
        <div className="lottoNumber">
            <NumberWrap>
            {
                number ? 
                number.map((number, index) => {
                    return (
                        <LottoNumberItem key={index} number={number.number} length={number.numbers.length} />
                    );
                }) :
                '...Loading'
            }
            </NumberWrap>
        </div>
    )
}

const NumberWrap = styled.ul`
    display:flex;
    width:100%;
    max-width:600px;
    margin:0 auto 20px;
    flex-flow: row wrap;
`;

export default LottoNumber;