import React from 'react'
import './style.scss'
import { useState } from 'react'
import down from 'assets/drawables/downarrow.svg'
import search from 'assets/drawables/searchicon.svg'
import usaflag from 'assets/drawables/flags/USA.png'
import Briflag from 'assets/drawables/flags/British.png'
import euroflag from 'assets/drawables/flags/Euro.png'
const NewCard = () => {
  const [onSelect, showSelect] = useState(true)
 
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
            <div className='show_currency'>
              <div className='search_currency'>
                <img src={search}></img> Search for Currency
                
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
              <input type="number" />
            </label> 

        </form>

        <div className='btn'>
          <button>Proceed</button>
        </div>
        </div>

       

    </div>
  )
}

export default NewCard