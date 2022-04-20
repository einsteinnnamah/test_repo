import React from 'react'
import './style.scss'
import card from 'assets/drawables/card.png'
import { Link } from 'react-router-dom'
const CardCreated = () => {
  return (
    <div className='created_card'>
        <img src={card}></img>
        <div className='created_card_items'>
          <span>Request sent</span>
          <p>You will be notified once your <br /> card is available</p>
          <Link className='close_btn' to="/dashboard/bank/UserCard">
             <span  className='btn'>Close</span>
          </Link>
        </div>
    </div>
  )
}

export default CardCreated