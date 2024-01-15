import React from 'react';
import './owner.scss';

const Owner = ({host}) => {
    return(
        <div>
            {host.name}
            <img src={host.picture} alt="host" />
        </div>
    )
}

export default Owner