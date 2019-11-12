import React from 'react';
import styled from 'styled-components';
import LottoListItem from './LottoListItem';

import Store from '../store/Store';

const LottoList = () => {
    return (
        <Store.Consumer>
            {store => store.lotto ?
            
                <List>
                    {store.lotto.map((item, index) => {
                        return (
                            <LottoListItem episode={item.episode} round1={item.round1} round2={item.round2} round3={item.round3} round4={item.round4} round5={item.round5} bonus={item.bonus} key={index} />
                        )
                    })}
                </List>
                
            : '...loading'}
        </Store.Consumer>
    )
}

const List = styled.div`
    width:100%;
    max-width:600px;
    margin:0 auto;
    border:0;
    border-spacing:0;
    border-top:2px solid #333;
`;

export default LottoList;