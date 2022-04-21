import React from 'react'
import './style.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import back_icon from 'assets/drawables/backicon.svg'
import usercard from 'assets/drawables/usercard.png'
import BottomNav from 'components/navbar/bottom_navbar'
import TransDetails from './TransDetails'
import Modal from "components/ModalPopUp"
import CardPin from '../CardPin'
import ChangePIN from '../ChangePIN'
import DeactivatePIN from '../DeactivatePIN'
import DeleteCard from '../DeleteCard'
import { color } from '@mui/system'
const CardTrans = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [onSelect, showSelect] = useState(false)
  console.log();
  return (
    <div className='card_trans'>
        <BottomNav />
        <div className='card_trans_items'>
          < div className='card_items'>
         
            <div className='back'>
            
              <p><Link style={{ textDecoration: 'none' , color: '#173963' }} to="/dashboard/bank/UserCard"><img src={back_icon}></img> Back to ICE Bank</Link></p>
              
            </div>

          <h3 className='id_card'>Your Card</h3>
          <div className='card_img'>
            <img src={usercard}></img>
            
          </div>
          <div className='card_btn'>
            <div onClick={() => {
              setOpenModal(true);
            }}>View Details</div>
            <div className='manage_card' onClick={() => showSelect(!onSelect)}>Manage Card{onSelect === true ? '' : ''}
            { onSelect && 
            <div className='manage_card_options'>
              <div style={{color: 'black'}} onClick={() => {
                setOpenModal2(true);
              }}>Card PIN</div>
              <div style={{color: 'black'}} onClick={() => {
                setOpenModal3(true);
              }}>Deactivate Card</div>
              <div style={{color: '#F34018'}} onClick={() => {
                setOpenModal4(true);
              }}>Delete card</div>
            </div>
              }
            </div>

          </div>
        
          <div className='card_details'>
                <h3>Card Details</h3>
                <hr></hr>
                <div className='card_id'>
                  <p style={{color: '#0D458A'}}>Card Name</p>
                  <p>Ademola julius</p>
                </div>

                <div className='card_num'>
                  <p style={{color: '#0D458A'}}>Card Number</p>
                  <p>1234 5678 9028 2345</p>
                </div>

                <div className='card_date'>
                  <div>
                    <p style={{color: '#0D458A'}}>CVV</p>
                    <p>456</p>
                  </div>
                  <div>
                    <p style={{color: '#0D458A'}}>Expiry Date</p>
                    <p>22/22</p>
                  </div>
                  <div>
                    <p style={{color: '#0D458A'}}>Zip Code</p>
                    <p>23401</p>
                  </div>
                </div>
                <div className='bill_address'>
                  <p style={{color: '#0D458A'}}>Billing Address</p>
                  <p>17, Baptist Church Street, Lekki</p>
                </div>
            </div>

          </div>
          <div className='trans_details'>
          <TransDetails />
        </div>

        </div>
           
        <Modal closeModal={() => setOpenModal(false)} openModal={openModal}>
            <CardPin />
        </Modal>

        <Modal closeModal={() => setOpenModal2(false)} openModal={openModal2}>
            <ChangePIN />
        </Modal>
     
        <Modal closeModal={() => setOpenModal3(false)} openModal={openModal3}>
            <DeactivatePIN />
        </Modal>

        <Modal closeModal={() => setOpenModal4(false)} openModal={openModal4}>
            <DeleteCard />
        </Modal>
      
    </div>
  )
}

export default CardTrans