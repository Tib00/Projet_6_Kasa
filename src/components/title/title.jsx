import React from 'react';
import './title.scss';

const Title = ({ title, location }) => {
    return(
        <div className='title'>
            <h1>{ title }</h1>
            <p>{location}</p>
        </div>
    )
}

export default Title