import React from 'react'
import "./Info.css";

function Info() {
    return (
        <div className='card-info'>
            <h1>Card Info</h1>
            <div className='card-img-photo'></div>
            <span className='card-title'>Bmw M3</span>
            <span className='card-price'>$15000</span>
        </div>
    )
}

export default Info