import React from 'react'
import './style.scss'
import BottomNav from 'components/navbar/bottom_navbar'
import underline from 'assets/drawables/Rectangle_702.png'
import usaflag from 'assets/drawables/usaflag.png'
import downarrow from 'assets/drawables/downarrow.svg'
import help from 'assets/drawables/help.svg'
import nodata from 'assets/drawables/nodata.svg'
import ReferralLink from './ReferralLink'
import support from 'assets/drawables/support.svg'
const Overview = () => {
  return (
    <div className='referral_overview'>
         <BottomNav />
         <div className='overview'>
            <div className='overview_details'>
            
            <div className='referral_toggle'>
                <div className='r_toggle'>Overview <img src={underline}></img></div>
                <div>By Currency</div>
            </div>

            <div className='total_earns'>
                <div className='te_title'>
                    <p>See your total earnings in </p>
                    <div><img src={usaflag}></img>USD<img src={downarrow}></img></div>
                    <img src={help} style={{marginLeft: '10px'}} ></img>
                </div>

                <div className='te_options'>
                    <div className='te_options_earn'>
                        <p>Total earned</p>
                        <h1>$0.00</h1>
                    </div>
                    <div>
                        <p>No. of people referred</p>
                        <h1>0</h1>
                    </div>
                </div>
            </div>

            <div className='people_referred'>
                <h3>People you have  referred</h3>
                <div className='no_data'>
                    <img src={nodata}></img>
                    <h3>No data</h3>
                    <p>The people you refer will appear here</p>
                </div>
            </div>

        
            </div>
            <div className='referral_link'>
                <ReferralLink />
                <div className='support_btn'>
                <div><img src={support}></img></div>
                    <p>Support</p>
                </div>
            </div>
       
          
         </div>
 

    </div>
  )
}

export default Overview