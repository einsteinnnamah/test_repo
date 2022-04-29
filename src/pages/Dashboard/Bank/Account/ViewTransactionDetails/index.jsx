import React from 'react'
import AccountBalanceNavbar from "../AccountBalanceNavbar"
import BottomNav from 'components/navbar/bottom_navbar'
import './style.scss'
import blackdrop from "assets/drawables/flags/blackdrop.png"
import right_sider from "assets/drawables/flags/right_sider.png"
import { Link } from 'react-router-dom'
import ngn from 'assets/drawables/flags/Nigeria.png'
import usd from 'assets/drawables/flags/USA.png'
import smallusd from 'assets/drawables/flags/smallusa.png'
import arrow from 'assets/drawables/flags/arrow.png'
const ViewTransactionDetails = () => {
  return (
    <div>
         <BottomNav />
        <AccountBalanceNavbar />
        <div className='balance_transaction_history'>
        <div className='trans_title'>
            <p>Transaction History</p>
            <span>Feb. 09, 2022 <img src={blackdrop}></img></span>
        </div>
        <Link style={{ textDecoration: 'none' , color: '#173963'}} to="/dashboard/bank/Account/AccountCreated/ShowTransactionDetails">
        <div><img src={right_sider}></img> back</div> </Link>

        <div className='trans_view_info'>
            <div className='view_info_title'>
                <h3>Track Transfer</h3>
                <div className='info_currency'>
                    <div className='info_currency_details'>
                        <img src={ngn}></img> <img src={arrow}></img><img src={usd}></img>
                    </div>
                    <div className='to_details' style={{color: '#173E6F', backgroundColor: '#DBEBFF'}}>In progress</div>
                </div>
            </div>
            <div className='all_trans_details'>
                <h2>534.23 USD</h2>
                <div className='view_full_trans'>
                    <div className='full_trans_title'>
                        <p>Reference Code</p>
                        <p>Amount tendered</p>
                        <p>Currency</p>
                        <p>Exchange Rate</p>
                        <p>Date & time</p>
                        <p>Available Balance</p>
                    </div>
                    <div className='full_trans_file'>
                    <p>AGTJIU856</p>
                    <p>522USD</p>
                    <p><img src={smallusd}></img> USD</p>
                    <p>$1=#570</p>
                    <p>01.02.2022 13:09</p>
                    <p>$30:001.53</p>
                    </div>
                </div>
               
            </div>

        </div>
        </div>
    </div>
  )
}

export default ViewTransactionDetails