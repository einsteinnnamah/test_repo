import React from 'react'
import './style.scss'
import { useState } from 'react'
import down from 'assets/drawables/downarrow.svg'
import search from 'assets/drawables/searchicon.svg'
import usaflag from 'assets/drawables/flags/USA.png'
import Briflag from 'assets/drawables/flags/British.png'
import euroflag from 'assets/drawables/flags/Euro.png'

const NewCard = ({setOpenModal3, setOpenModal2}) => {
  const [onSelect, showSelect] = useState(false)
 
  return (
    <div className='new_card'>
  
        <h3>Request new card</h3>
     
        
        <div className='select_option'>
        <form className='forms'>

            <label className='card_name'>
              <p>Card Name</p>  
  
              <input value="Ademola Adekanbi" />
            </label> 

              
            <label className='choose_currency' >
              <p>Currency</p>
              <div className='currencies' onClick={() => showSelect(!onSelect)}>Select Currency <img src={down}></img>{onSelect === true ? '' : ''}</div>
              { onSelect && 
            <div className='choose_show_currency'>
              <div className='search_currency'>
                <input  placeholder='Search for currency'/>
               
                
              </div>
              <hr></hr>

              <div className='all_currencies'>
                <div className='currency'><img src={usaflag}></img><span>USD</span> United States Dollar</div>
                <div className='currency'><img src={Briflag}></img><span>GBP</span> British Pounds</div>
                <div className='currency'><img src={euroflag}></img><span>EUR</span> Euro</div>
              </div>

            </div>
            }

            </label>


            <label className='fund'>
            <p>How much money do you want to fund the card with?</p> 
              <input type="number" placeholder='$'/>
          
            </label> 

            

        </form>

          <div className='conditions'>
          <p>You wil be charged NGN13.896.00 at NGN579.00 to USD1</p>
          <p className='con_2'>Please note that this includes an additional card creation fee of NGN1,158.00 (USD2).</p>
          </div>

        <div onClick={() => {
          setOpenModal3(true);
          setOpenModal2(false);
        }}
        className='proceed_btn'>
          <button  style={{backgroundColor: "#173E6F"}}>Proceed</button>
        </div>
        </div>

       

    </div>
  )
}

export default NewCard