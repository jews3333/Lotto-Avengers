import React from 'react';

const LottoPicker = ({onGetArray}) => {
    return (
        <div>
            <button onClick={onGetArray}>확인</button>
        </div>
    )
}

export default LottoPicker;