import React from 'react'
import usa from 'assets/drawables/flags/USA.png'
import eye from 'assets/drawables/flags/eye.png'
import './style.scss'
import { useState } from 'react'
import arrowup from 'assets/drawables/flags/arrowup.png'
import menu from 'assets/drawables/flags/menu.png'
const AcountBalanceNavbar = () => {
    const [onSelect, showSelect] = useState(false)
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
            <span> <img src={arrowup}></img> Send Money</span>
        </div>
        <div className='balance_property other_balance_menu' style={{marginLeft: '25px'}}>
            <span onClick={() => showSelect(!onSelect)}> <img src={menu}></img> More{onSelect === true ? '' : ''}</span>
            { onSelect && 
            <div className='more_menu_options'>
                <p>Exchange</p>
                <p>Download Statement</p>
                <p>Account Details</p>
            </div>
            }
        </div>
    </div>

    </div>
</div>
  )
}

export default AcountBalanceNavbar