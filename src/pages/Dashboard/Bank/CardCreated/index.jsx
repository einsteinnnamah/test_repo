import React from 'react'
import './style.scss'
import card from 'assets/drawables/card.png'
const CardCreated = () => {
  return (
    <div className='created_card'>
        <img src={card}></img>
        <div className='created_card_items'>
          <span>Request sent</span>
          <p>You will be notified once your <br /> card is available</p>
          <span  className='btn'>Close</span>
        </div>
    </div>
  )
}

export default CardCreated