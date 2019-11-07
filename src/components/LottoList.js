import React from 'react';
import '../style/LottoList.scss';
import LottoListItem from './LottoListItem';

const LottoList = ({list}) => {
    return (
        <table className="lottoList">
            <thead>
                <tr>
                    <th>회차</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>bonus</th>
                </tr>
            </thead>
            <tbody>
                {list != null ? list.map((item, index) => {
                    return (
                        <LottoListItem episode={item.episode} round1={item.round1} round2={item.round2} round3={item.round3} round4={item.round4} round5={item.round5} bonus={item.bonus} key={index} />
                    )
                }) : <tr><td colSpan="7">...Loading</td></tr>}
            </tbody>
        </table>
    )
}

export default LottoList;