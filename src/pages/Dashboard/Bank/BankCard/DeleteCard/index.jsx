import React from 'react'
import './style.scss'
import decard from 'assets/drawables/decard.png'
const DeleteCard = () => {
  return (
    <div className='delete_card'>
        <h3>Delete Card</h3>
        <div className='delete_card_items'>
            <span>Are you sure you want to deactivate this card?</span>
            <img src={decard}></img>
            <p style={{color: '#173E6F'}}>Cancel</p>
            <p style={{color: '#F34018'}}>Yes, I want to delete</p>
        </div>
    </div>
  )
}

export default DeleteCard