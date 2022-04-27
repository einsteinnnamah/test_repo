import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import BottomNav from 'components/navbar/bottom_navbar'
import underline from 'assets/drawables/Rectangle_702.png'
import wallets from 'assets/drawables/wallets.png'
const Account = () => {
  return (
    <div className='account'>
        <BottomNav />
        <div className='bank_options'> 
        <div className='bank_card' style={{marginRight: '20px'}}>Account <img src={underline}></img></div>
        <Link style={{ textDecoration: 'none' , color: '#525252'}} to="/dashboard/bank"><div onClick={""}>Card</div></Link>
        </div>
        <Link style={{ textDecoration: 'none' , color: '#525252'}} to="/Account/CreateAccount">
        <div className='empty_card'>
          <p>+ Create account</p>
        </div> </Link>
        <div className='no_account'>
        <img src={wallets}></img>
        you have no account
        </div>
    </div>
  )
}

export default Account