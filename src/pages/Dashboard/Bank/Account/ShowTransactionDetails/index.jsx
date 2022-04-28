import BottomNav from 'components/navbar/bottom_navbar'
import React from 'react'
import AccountBalanceNavbar from "../AccountBalanceNavbar"
import './style.scss'
import blackdrop from "assets/drawables/flags/blackdrop.png"
import sending from "assets/drawables/flags/sending.png"
import sider from "assets/drawables/flags/sider.png"
import { Link } from 'react-router-dom'
import plus from 'assets/drawables/flags/plus.png'
const ShowTransactionDetails = () => {
  return (
    <div>
        <BottomNav />
        <AccountBalanceNavbar />
        <div className='balance_transaction_history'>
        <div className='trans_title'>
            <p>Transaction History</p>
            <span>Feb. 09, 2022 <img src={blackdrop}></img></span>
        </div>
        <div className='full_trans_details'>
            <hr style={{border: '1px solid #EAEAEA', marginTop: '40px'}}></hr>
            <p style={{color: '#818181', fontSize: '14px', marginTop: '20px'}}>TODAY</p>
            <div className='full_trans_info'>
            <Link style={{ textDecoration: 'none' , color: '#525252'}} to="/dashboard/bank/Account/AccountCreated/ViewTransactionDetails">
                <div className='trans_name_info'>
                    <div className='trans_sends'>
                    <img src={sending}></img>
                    </div>
                    <div>Transfer to Ademola</div>
                </div> </Link>
                <div className='trans_option_info'>
                    <div className='to_details' style={{color: '#173E6F', backgroundColor: '#DBEBFF'}}>
                        In progress
                    </div>
                    <div className='to_text'>
                        <h3>534.23 USD</h3>
                        <p>345.23 USD</p>
                    </div>
                    <div className='to_img'>
                    <img src={sider}></img>
                    </div>
                </div>
                
            </div>

            <div className='full_trans_info'>
                <div className='trans_name_info'>
                    <div className='trans_sends'>
                    <img src={sending}></img>
                    </div>
                    <div>Transfer to Ademola</div>
                </div>
                <div className='trans_option_info'>
                    <div className='to_details' style={{color: '#3AA64C', backgroundColor: '#DFFFE4'}}>
                        Successful
                    </div>
                    <div className='to_text'>
                        <h3>534.23 USD</h3>
                        <p>345.23 USD</p>
                    </div>
                    <div className='to_img'>
                    <img src={sider}></img>
                    </div>
                </div>
                
            </div>

            <div className='full_trans_info'>
                <div className='trans_name_info'>
                    <div className='trans_sends'>
                    <img src={plus}></img>
                    </div>
                    <div>Transfer to Ademola</div>
                </div>
                <div className='trans_option_info'>
                    <div className='to_details' style={{color: '#3AA64C', backgroundColor: '#DFFFE4'}}>
                        Successful
                    </div>
                    <div className='to_text'>
                        <h3>534.23 USD</h3>
                        <p>345.23 USD</p>
                    </div>
                    <div className='to_img'>
                    <img src={sider}></img>
                    </div>
                </div>
                
            </div>

            <div className='full_trans_info'>
                <div className='trans_name_info'>
                    <div className='trans_sends'>
                    <img src={sending}></img>
                    </div>
                    <div>Transfer to Ademola</div>
                </div>
                <div className='trans_option_info'>
                    <div className='to_details' style={{color: '#F34018', backgroundColor: '#FFD9D0'}}>
                        Failed
                    </div>
                    <div className='to_text'>
                        <h3>534.23 USD</h3>
                        <p>345.23 USD</p>
                    </div>
                    <div className='to_img'>
                    <img src={sider}></img>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default ShowTransactionDetails