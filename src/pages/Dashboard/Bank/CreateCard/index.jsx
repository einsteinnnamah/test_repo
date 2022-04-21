import './style.scss'
import BottomNav from 'components/navbar/bottom_navbar'
import wallets from 'assets/drawables/wallets.png'
import { useState } from 'react'
import Modal from "components/ModalPopUp";
import { useNavigate } from "react-router-dom";
import CardType from './CardType';
import NewCard from './NewCard';
import CardOTP from './CardOTP';
import CardCreated from './CardCreated';
import underline from 'assets/drawables/Rectangle_702.png'
import CardTrans from '../BankCard/CardTrans';
import { Link } from 'react-router-dom';
const Bank = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);

  const navigate = useNavigate();

  return (
    
    <div className='bank'>
      <BottomNav />
        <div className='bank_options'>
        <Link style={{ textDecoration: 'none' , color: '#525252' }} to="/dashboard/bank/Account"> <div onClick={""}>Account</div> </Link>
          <div className='bank_card'>Cards <img src={underline}></img></div>
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
            <NewCard setOpenModal3={setOpenModal3} setOpenModal2={setOpenModal2} />
        </Modal>

        <Modal closeModal={() => setOpenModal3(false)} openModal={openModal3}>
            <CardOTP setOpenModal4={setOpenModal4} setOpenModal3={setOpenModal3}/>
        </Modal>

        <Modal closeModal={() => setOpenModal4(false)} openModal={openModal4} NoModal={true}>
            <CardCreated />
        </Modal>

        <Modal closeModal={() => setOpenModal5(false)} openModal={openModal5}>
            <CardTrans setOpenModal5={setOpenModal5} />
        </Modal>

    </div>
  )
}

export default Bank