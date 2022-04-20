import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import BottomNav from 'components/navbar/bottom_navbar'
import underline from 'assets/drawables/Rectangle_702.png'
import usercard from 'assets/drawables/usercard.png'
const UserCard = () => {
  return (
    <div className='user_card'>
      <BottomNav />
      <div className='bank_options'>
          <div >Account</div>
          <div className='bank_card'>Cards <img src={underline}></img></div>
      </div>
      <div className='card_container'>
      <Link  to="/dashboard/bank/UserCard/CardTrans">
      <div className='card_img'>
        <img src={usercard}></img>
      </div>
      </Link>

      <div className='empty_card empty_card_container'>
          <p>+ Create new card</p>
        </div>

      </div>
      
    </div>
  )
}

export default UserCard