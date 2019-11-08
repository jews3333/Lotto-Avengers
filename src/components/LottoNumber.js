import React from 'react';

const LottoNumber = ({number}) => {
    return (
        <div className="lottoNumber">
            <p>1번 : {number ? number[1].length : null}</p>
        </div>
    )
}

export default LottoNumber;