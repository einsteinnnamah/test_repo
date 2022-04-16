
import '../Bank/style.scss'
import BottomNav from "components/navbar/bottom_navbar"
import wallets from 'assets/drawables/wallets.png'
const Bank = () => {
  return (
    
    <div className='bank'>
      <BottomNav />
        <div className='bank_options'>
          <span>Account</span>
          <span className='bank_card'>Cards</span>
        </div>

        <div 
         className='empty_card'>
          <p>+ Create new card</p>
        </div>

        <div className='no_account'>
        <img src={wallets}></img>
        you have no account
        </div>

      

    </div>
  )
}

export default Bank