import React from 'react';
import styled from 'styled-components';
import LottoNumberItem from './LottoNumberItem';

import Store from '../store/Store';

const LottoNumber = () => {
    return (
        <Store.Consumer>
            {store => store.number && store.bonus ?
                <div className="lottoNumber">
                    <Title>당첨 번호</Title>
                    <NumberWrap>
                        {store.number.map((number, index) => {
                            return (
                                <LottoNumberItem key={index} number={number.number} length={number.numbers} />
                            );
                        })}
                    </NumberWrap>
                    <Title>보너스 번호</Title>
                    <NumberWrap>
                        {store.bonus.map((bonus, index) => {
                            return (
                                <LottoNumberItem key={index} number={bonus.number} length={bonus.numbers} />
                            );
                        })}
                    </NumberWrap>
                </div>
            : '...loading'}
        </Store.Consumer>
    )
}

const Title = styled.h4`
    text-align:center;
    font-size:1.2em;
    margin-bottom:20px;
`;

const NumberWrap = styled.ul`
    display:flex;
    width:100%;
    max-width:600px;
    margin:0 auto 20px;
    flex-flow: row wrap;
`;

export default LottoNumber;