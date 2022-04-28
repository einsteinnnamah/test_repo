import BottomNav from 'components/navbar/bottom_navbar'
import React from 'react'
import AccountBalanceNavbar from "../AccountBalanceNavbar"
import './style.scss'
import blackdrop from "assets/drawables/flags/blackdrop.png"
import notrans from "assets/drawables/notrans.png"
const NoAccountTransaction = () => {
  return (
    <div>
        <BottomNav />
       <AccountBalanceNavbar />
       <div className='balance_transaction_history'>
            <div className='trans_title'>
                <p>Transaction History</p>
                <span>Feb. 09, 2022 <img src={blackdrop}></img></span>
            </div>
            <div className='trans_nodata_icon'>
                <img src={notrans}></img>
                <p style={{color: "#0D458A", fontWeight: 'bold'}}>No Transactions</p>
                <p>You have no transaction history</p>
            </div>
       </div>
    </div>
  )
}

export default NoAccountTransaction