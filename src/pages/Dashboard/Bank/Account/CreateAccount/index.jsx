import AccountSelectCurrency from 'components/InputFields/AccountSelectCurrency';
import React from 'react'
import AccountNavbar from '../AccountNavbar'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'
const CreateAccount = () => {
  const [tender, setTender] = useState("");
  console.log( tender);
  return (
    <div className='create_account'>
        <AccountNavbar />
        <div className='create_account_details'>
            <h3>Select Currency</h3>
            <div className='account_currency_select'>
           
                    <AccountSelectCurrency handleCurrency={setTender} />
                    {/* <CurrencyDrop
                    handleCurrency={(val) => {
                      setTender(val);
                    }}
                    defaultCurrency={{ flag: nig, code: "NGN" }}
                  /> */}
    
            </div>
            <div>
            <Link style={{ textDecoration: 'none' , color: '#525252'}} to="/dashboard/bank/Account/AccountCreated">
              <button>Proceed</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount