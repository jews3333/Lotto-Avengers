import React from 'react';
import '../style/LottoList.scss';
import LottoListItem from './LottoListItem';

const LottoList = ({list}) => {
    return (
        <div className="lottoList">
            {list != null ? list.map((item, index) => {
                return (
                    <LottoListItem episode={item.episode} round1={item.round1} round2={item.round2} round3={item.round3} round4={item.round4} round5={item.round5} bonus={item.bonus} key={index} />
                )
            }) : <p>...Loading</p>}
        </div>
    )
}

export default LottoList;