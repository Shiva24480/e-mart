import React from 'react'
import './OrderPlaced.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function OrderPlaced() {
    return (
        <div className='op'>
            <div className="op-container">
                <CheckCircleOutlineIcon className='op-icon' sx={{ fontSize: "12rem" }}/>
                <p>{`YOUR ORDER #${Math.floor(Math.random()*100000+1)} HAS BEEN PLACED`}</p>
            </div>
        </div>
    )
}

export default OrderPlaced