import React from 'react'
import './style.scss'
import gift from 'assets/drawables/gift.svg'
import fbicon from 'assets/drawables/fbicon.svg'
import twittericon from 'assets/drawables/twittericon.svg'
import instagramicon from 'assets/drawables/instagramicon.svg'
import linkedinicon from 'assets/drawables/linkedinicon.svg'
const ReferralLink = () => {
  return (
    <div className='referral_link'>
           
        <img src={gift}></img>
          <p>Get your friends to signup on ICE with your <br />
              referral code and enjoy reward once they start <br />
              investing on the platform <br />
          </p>
          <h3>Share the referral link</h3>
          <p>You can share your link by copying and <br />
            sending it or sharing on your social media
          </p>

          <div className='referral_btn'>
            <span>wwww.ice.com/ademola-98jsjdh7</span>
            <span style={{color: '#173E6F', fontWeight: 'bold', cursor: 'pointer'}}>Copy link</span> 
          </div>

          <div className='referral_icons'>
            <img src={fbicon}></img>
            <img src={twittericon}></img>
            <img src={instagramicon}></img>
            <img src={linkedinicon}></img>
          </div>
        <p style={{color: '#173E6F'}}>Read terms and conditions</p>
    </div>
   
  )
}

export default ReferralLink