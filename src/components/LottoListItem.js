import React from 'react';

const LottoListItme = ({ episode, round1, round2, round3, round4, round5, bonus }) => {
    return (
        <tr>
            <td>{episode}</td>
            <td>{round1}</td>
            <td>{round2}</td>
            <td>{round3}</td>
            <td>{round4}</td>
            <td>{round5}</td>
            <td>{bonus}</td>
        </tr>
    );
}

export default LottoListItme;