import React from 'react'
import './style.scss'
import sidearrow from 'assets/drawables/sidearrow.svg'
import img2 from 'assets/drawables/img2.png'
import img3 from 'assets/drawables/img3.png'
import img1 from 'assets/drawables/img1.png'
const ReferralData = () => {
  return (
    <div className='referred_list'>
        <h3>People you have referred</h3>
        <div className='referred_profiles'>
          <div className='profile'>
            <img src={img1}></img>
            <div className='profile_text' style={{marginRight: '402px'}}>
            <p>Adeyemo Olayinka</p>
            <span>$14.23</span>
            </div>
            <img src={sidearrow}></img>
          </div>

          <div className='profile'>
            <img src={img2}></img>
            <div className='profile_text' style={{marginRight: '430px'}}>
            <p> Olayinka Tawio</p>
            <span>$14.23</span>
            </div>
            <img src={sidearrow}></img>
          </div>

          <div className='profile'>
            <img src={img3}></img>
            <div className='profile_text' style={{marginRight: '425px'}}>
            <p> Owosho Adeola</p>
            <span>$14.23</span>
            </div>
            <img src={sidearrow}></img>
          </div>
         
        </div>
      </div>

  )
}

export default ReferralData