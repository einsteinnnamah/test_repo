import React from 'react'
import './style.scss'
import downicon from 'assets/drawables/down.svg'
import sendicon from 'assets/drawables/send.svg'
import sidearrow from 'assets/drawables/sidearrow.svg'
const TransDetails = () => {
  return (
    <div className='trans_history'>
      <div className='trans_title'>
        <span className='trans_title_head'>Transaction History</span>
        <span style={{marginLeft: '22rem'}} className='trans_title_btn'>Feb. 09, 2022 <img src={downicon}></img></span>
        <hr></hr>
        <h5>TODAY</h5>
      </div>

      <div className='trans_details'>
        <div className='td_items'>
          <div className='td_icon'>
            <img src={sendicon}></img>
          </div>
          <div className='td_text' style={{marginRight: '92px'}}>Transfer to Ademola</div>
          <div className='td_btn' style={{marginRight: '35px'}}>
            <p>In Progress</p>
          </div>
          <div className='td_amount'>
          <p className='td_amount_bg'>534.23 USD </p> 
          <p className='td_amount_sm'>345.23 USD</p>
          </div>

          <div className='td_arrow' style={{marginLeft: '28px'}} >
            <img src={sidearrow}></img>
          </div>
          
        </div>

        <div className='td_items' style={{marginTop: '27px'}}>
          <div className='td_icon'>
            <img src={sendicon}></img>
          </div>
          <div className='td_text' style={{marginRight: '92px'}}>Transfer to Ademola</div>
          <div className='td_btn' style={{marginRight: '35px'}}>
            <p>In Progress</p>
          </div>
          <div className='td_amount'>
          <p className='td_amount_bg'>534.23 USD </p> 
          <p className='td_amount_sm'>345.23 USD</p>
          </div>

          <div className='td_arrow' style={{marginLeft: '28px'}} >
            <img src={sidearrow}></img>
          </div>
          
        </div>

        <div className='td_items' style={{marginTop: '27px'}}>
          <div className='td_icon'>
            <img src={sendicon}></img>
          </div>
          <div className='td_text' style={{marginRight: '92px'}}>Transfer to Ademola</div>
          <div className='td_btn' style={{backgroundColor: '#DFFFE4', color: '#3AA64C'  , marginRight: '35px'}}>
            <p>Successful</p>
          </div>
          <div className='td_amount'>
          <p className='td_amount_bg'>534.23 USD </p> 
          <p className='td_amount_sm'>345.23 USD</p>
          </div>

          <div className='td_arrow' style={{marginLeft: '28px'}} >
            <img src={sidearrow}></img>
          </div>
          
        </div>

        <div className='td_items' style={{marginTop: '27px'}}>
          <div className='td_icon'>
            <img src={sendicon}></img>
          </div>
          <div className='td_text' style={{marginRight: '92px'}}>Transfer to Ademola</div>
          <div className='td_btn' style={{backgroundColor: '#FFD9D0', color: '#F34018'  , marginRight: '35px'}}>
            <p>Successful</p>
          </div>
          <div className='td_amount'>
          <p className='td_amount_bg'>534.23 USD </p> 
          <p className='td_amount_sm'>345.23 USD</p>
          </div>

          <div className='td_arrow' style={{marginLeft: '28px'}} >
            <img src={sidearrow}></img>
          </div>
          
        </div>

        <div className='td_items' style={{marginTop: '27px'}}>
          <div className='td_icon'>
            <img src={sendicon}></img>
          </div>
          <div className='td_text' style={{marginRight: '92px'}}>Transfer to Ademola</div>
          <div className='td_btn' style={{marginRight: '35px'}}>
            <p>In Progress</p>
          </div>
          <div className='td_amount'>
          <p className='td_amount_bg'>534.23 USD </p> 
          <p className='td_amount_sm'>345.23 USD</p>
          </div>

          <div className='td_arrow' style={{marginLeft: '28px'}} >
            <img src={sidearrow}></img>
          </div>
          
        </div>

        <div className='td_items' style={{marginTop: '27px'}}>
          <div className='td_icon'>
            <img src={sendicon}></img>
          </div>
          <div className='td_text' style={{marginRight: '92px'}}>Transfer to Ademola</div>
          <div className='td_btn' style={{marginRight: '35px'}}>
            <p>In Progress</p>
          </div>
          <div className='td_amount'>
          <p className='td_amount_bg'>534.23 USD </p> 
          <p className='td_amount_sm'>345.23 USD</p>
          </div>

          <div className='td_arrow' style={{marginLeft: '28px'}} >
            <img src={sidearrow}></img>
          </div>
          
        </div>
        




       
      </div>
      

    </div>
  )
}

export default TransDetails