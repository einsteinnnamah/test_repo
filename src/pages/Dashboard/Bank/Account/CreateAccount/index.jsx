import React from 'react'
import AccountNavbar from '../AccountNavbar'
import './style.scss'
const CreateAccount = () => {
  return (
    <div className='create_account'>
        <AccountNavbar />
        <div className='create_account_details'>
            <h3>Select Currency</h3>
        </div>
    </div>
  )
}

export default CreateAccount