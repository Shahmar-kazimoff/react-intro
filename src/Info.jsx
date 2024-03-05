import React from 'react'
import "./Info.css";

function Info() {
    return (
        <div className='card-info'>
            <h1 style={{ "fontSize": "50px" }}>Car Info</h1>
            <div className='img-control'>
                <div className='card-img-photo'></div>
            </div>
            <span className='card-title'>Car : Bmw M3</span>
            <span className='card-price'>Price : $15000</span>
            <span className='card-fuel'>Fuel type : Petrol</span>
            <span className='card-speed'>Max speed : 250 km/h</span>
        </div>
    )
}

export default Info