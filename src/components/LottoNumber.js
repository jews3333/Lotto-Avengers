import React from 'react';
import styled from 'styled-components';
import LottoNumberItem from './LottoNumberItem';

import Store from '../store/Store';

const LottoNumber = () => {
    return (
        <Store.Consumer>
        {store => store.number ?
            <div className="lottoNumber">
                <NumberWrap>
                    {store.number.map((number, index) => {
                        return (
                            <LottoNumberItem key={index} number={number.number} length={number.numbers} />
                        );
                    })}
                </NumberWrap>
            </div>
        : '...loading'}
        </Store.Consumer>
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