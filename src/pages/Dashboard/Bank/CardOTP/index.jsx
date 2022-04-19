import React from 'react'
import { useState } from 'react';
import "pages/Authentication/Otp"
import './style.scss'
import OtpInput from "react-otp-input";
const CardOTP= ({setOpenModal3, setOpenModal4}) => {
  console.log()
  const [otp, setOtp] = useState(false);

  const handleChange = (otp) => {
    setOtp(otp);
  };
  return (
    <div className='card_pin'>
      <h3>Create Card PIN</h3>
      <p>Set a 4 digit card PIN. Use your card PIN to make transactions</p>
      <div className='pd_otp'>
        <div className='otp_wrap'>
          <label>Enter PIN</label>
        <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span> </span>}
          />
        </div>
        <div className='otp_wrap'>
          <label> Confirm PIN</label>
        <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span> </span>}
          />
        </div>
      </div>
      <div onClick={() => {
          setOpenModal4(true);
          setOpenModal3(false);
        }}
      className='btn'>
        <button  
        style={{backgroundColor: "#173E6F"}}>Proceed</button>
      </div>
    </div>
  )
}

export default CardOTP