import React from 'react'
import decard from 'assets/drawables/decard.png'
import './style.scss'
const DeactivatePIN = () => {
  return (
    <div className='deactivate_pin'>
        <h3>Deactivate Card</h3>

        <div className='deactivate_pin_details'>
        <span>Are you sure you want to deactivate this card?</span>
        <img src={decard}></img>
        <p>Cancel</p>
        <p className='deactivate_confirm'>Yes, I want to deactivate</p>
        </div>
    </div>
  )
}

export default DeactivatePIN