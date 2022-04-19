import '../Bank/style.scss'
import BottomNav from "components/navbar/bottom_navbar"
import wallets from 'assets/drawables/wallets.png'
import { useState } from 'react'
import Modal from "components/ModalPopUp";
import { useNavigate } from "react-router-dom";
import CardType from './CardType';
import NewCard from './NewCard';
const Bank = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  console.log(openModal);
  const navigate = useNavigate();

  return (
    
    <div className='bank'>
      <BottomNav />
        <div className='bank_options'>
          <span onClick={""}>Account</span>
          <span className='bank_card'>Cards</span>
        </div>

        <div onClick={() => {
          setOpenModal(true);
        }}
         className='empty_card'>
          <p>+ Create new card</p>
        </div>

        <div className='no_account'>
        <img src={wallets}></img>
        you have no account
        </div>

        <Modal closeModal={() => setOpenModal(false)} openModal={openModal}>
         <CardType setOpenModal2={setOpenModal2} setOpenModal={setOpenModal} />
        </Modal>

        <Modal closeModal={() => setOpenModal2(false)} openModal={openModal2}>
            <NewCard />
        </Modal>

    </div>
  )
}

export default Bank