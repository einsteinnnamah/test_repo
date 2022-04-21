import BottomNav from 'components/navbar/bottom_navbar'
import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import underline from 'assets/drawables/Rectangle_702.png'
import usaflag from 'assets/drawables/usaflag.png'
import nigeria from 'assets/drawables/nigeria.svg'
import british from 'assets/drawables/flags/British.png'
import downarrow from 'assets/drawables/downarrow.svg'
import help from 'assets/drawables/help.svg'
const ByCurrency = () => {
  return (
    <div className='by_currency'>
     <BottomNav />
     <div className='referral_toggle'>
        <Link style={{ textDecoration: 'none' , color: '#525252' }} to="/dashboard/referral"> <div>Overview </div> </Link>
         <div className='r_toggle'>By Currency<img src={underline}></img></div> 
      </div>

      <div className='currency_details'>
        <div className='by_usd'>
          <div className='usa'><img src={usaflag}></img> USD</div>
        </div>
       
          <div className='by_ngn'>
            <div className='ngn'><img src={nigeria}></img>NGN</div>
          </div>
  
        <div className='by_gbp'>
        <div className='gbp'><img src={british}></img>GBP</div>
        </div>
      </div>

      <div className='total_earns'>
                <div className='te_options'>
                    <div className='te_options_earn'>
                        <p>Total earned</p>
                        <h1>$56.00</h1>
                    </div>
                    <div>
                        <p>No. of people referred</p>
                        <h1>3</h1>
                    </div>
                </div>
      </div>

      <div className='referred_list'>
        <h3>People you have referred</h3>
      </div>

      <div>
        
      </div>
        
    </div>
  )
}

export default ByCurrency
