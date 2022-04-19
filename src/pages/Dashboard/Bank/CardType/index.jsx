import React from 'react'
import './style.scss'
const CardType = ({setOpenModal2, setOpenModal}) => {
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


            <div className='btn' onClick={() => {
                  setOpenModal2(true);
                  setOpenModal(false);
                }}>
                <button  type="submit">Proceed</button>
               
            </div>


            </div>

          
       
            
        </div>
      
      
  
  )
}

export default CardType