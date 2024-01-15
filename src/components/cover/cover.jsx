import React from 'react';
import './cover.scss'

const Cover = ({cover}) =>{
    return(
        <div>
          <img src={cover} alt="Cover" />
        </div>

    )
}
export default Cover