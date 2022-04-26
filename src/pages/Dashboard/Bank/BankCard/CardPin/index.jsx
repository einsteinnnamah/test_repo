import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'
import OtpInput from "react-otp-input";
const CardPin = () => {
    const [otp, setOtp] = useState(false);

  const handleChange = (otp) => {
    setOtp(otp);
  };
  return (
    <div className='enter_pin'>
        <div className='enter_pin_title'>
            <h3>Enter PIN</h3>
            <p>Please enter your card PIN to show the details</p>
        </div>
        <div className='otp_wrap'>
        <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span> </span>}
          />
        </div>

        <div className='proceed_btn'>
       <button style={{backgroundColor: '#173963'}}>Show Details</button>
        </div>
    </div>
  )
}

export default CardPin