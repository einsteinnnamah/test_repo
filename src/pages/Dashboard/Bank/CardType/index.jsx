import React from 'react'
import NewCard from '../NewCard'
import './style.scss'
import { useState } from 'react'
import Modal from "components/ModalPopUp";
const CardType = () => {
  const [openModal, setOpenModal, ] = useState(false);

  return (
    <div className='card_type'>
        <h3>Select Card Type</h3>
        <p className='select'>What kind of card do you want to create?</p>
            <div className='all_cards'>
            <div className='card_options'>

              <div className='virtual_card'>
                  <div className='card_prop'>
                  <div className='card_img'>

                    </div>
                    <p>Virtual card</p>
                  </div>

              </div>
              <div className='physical_card'>
                  <div className='card_prop'>
                    <div className='card_img'>

                    </div>
                      <p>Physical Card</p>
                  </div>

              </div>
            </div>


            <div className='bank_card_btn' onClick={() => {
                  setOpenModal(true);
                }}>
                <button  type="submit">Proceed</button>

            </div>


            </div>

            <Modal closeModal={() => setOpenModal(false)} openModal={openModal}>
               <NewCard />
            </Modal>


        </div>



  )
}

export default CardType
