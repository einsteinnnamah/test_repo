import React from 'react'
import usa from 'assets/drawables/flags/USA.png'
import eye from 'assets/drawables/flags/eye.png'
const AcountBalanceNavbar = () => {
  return (
    <div className='account_balance_menu'>
    <div className='account_balance_details'>
    <div className='view_balance_details'>
        <div className='currency_logo'>
        <img src={usa}></img>
        </div>
        <div>
        <p>AVAILABLE BALANCE <img src={eye}></img></p>
        <h1>$0.00</h1>
        </div>
    </div>
    <div className='account_balance_properties'>
        <div className='balance_property'>
            <span> + Lodge Money</span>
        </div>
        <div className='balance_property' style={{marginLeft: '25px'}}>
            <span> + Send Money</span>
        </div>
        <div className='balance_property' style={{marginLeft: '25px'}}>
            <span> + More</span>
        </div>
    </div>

    </div>
</div>
  )
}

export default AcountBalanceNavbar