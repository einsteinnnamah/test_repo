import BottomNav from 'components/navbar/bottom_navbar'
import React from 'react'
import { Link } from 'react-router-dom'
import underline from 'assets/drawables/Rectangle_702.png'
import usa from 'assets/drawables/flags/smallusa.png'
import bigusa from 'assets/drawables/flags/USA.png'
import droping from 'assets/drawables/flags/droping.png'
import Euro from "assets/drawables/flags/Euro.png"
import './style.scss'
const AccountCreated = () => {
  return (
    <div>
        <BottomNav />
        <div className='bank_options'> 
        <div className='bank_card' style={{marginRight: '20px'}}>Account <img src={underline}></img></div>
        <Link style={{ textDecoration: 'none' , color: '#525252'}} to="/dashboard/bank"><div onClick={""}>Card</div></Link>
        </div>
        <div className='bank_account'>
            <div className='account_currency_info'>
                <div className='account_currency'>
                    <p>Total balance is</p>
                    <div className='account_currency_type'>
                    <img src={usa}></img> USD <img src={droping}></img>
                    </div>
                </div>
                <h3>$13,342.20</h3>
            </div>

            <div className='bank_account_cards'>
            <Link style={{ textDecoration: 'none' , color: 'black'}} to="/dashboard/bank/Account/AccountCreated/NoAccountTransaction">
                <div className='account_card'>
                    <h3>US Dollar <img src={bigusa}></img></h3>
                    <span>$3,453.00</span>
                </div>
                </Link>

                <div className='account_card' style={{marginLeft: '19px'}}>
                    <h3>Euro <img src={Euro}></img></h3>
                    <span>$3,453.00</span>
                </div>
                    <div className='no_account_card'>
                        <div className='empty_card '>
                            <p>+ Create account</p>
                        </div>
                    </div>
               
            </div>
        </div>
    </div>
  )
}

export default AccountCreated