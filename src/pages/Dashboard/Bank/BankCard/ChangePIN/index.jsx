import React from 'react'
import './style.scss'
import OtpInput from "react-otp-input";
import { useState } from 'react';

const ChangePIN = () => {
  const [otp, setOtp] = useState(false);

  const handleChange = (otp) => {
    setOtp(otp);
  };
  return (
   
    <div className='change_pin'>
      <div className='change_pin'>
        <h3>Change Card PIN</h3>
        <p>Set a 4 digit card PIN. Use your card PIN to make transactions</p>
      </div>
      <div className='otp_wrap'>
        <label>Enter current PIN</label>
        <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span> </span>}
          />
        </div>
        <div className='otp_wrap' style={{marginTop: '24px'}}>
        <label>Enter new PIN</label>
        <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span> </span>}
          />
        </div>
        <div className='otp_wrap' style={{marginTop: '24px'}}>
        <label>Confirm new PIN</label>
        <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span> </span>}
          />
        </div>
        <div className='proceed_btn'>
          <button style={{backgroundColor: '#173963'}}>Change PIN</button>
        </div>
    </div>
    
  )
}

export default ChangePIN