import React from 'react'
import TopNavbar from 'components/navbar/top_navbar'
import BottomNav from 'components/navbar/bottom_navbar'
import img1 from '../../assets/drawables/otherimg/img1.png'
import img2 from '../../assets/drawables/otherimg/img2.png'
import img3 from '../../assets/drawables/otherimg/img3.png'
import forexvid from '../../assets/video/forex.mp4'
import search_icon from '../../assets/drawables/search_icon.png'
import './style.scss'
const Otherpage = () => {
  return (
    <div>
        <TopNavbar />
        <BottomNav />
        <div className='otherpage_text'>
            <h1>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</h1>
            <form className='otherpage_search'>
                <img src={search_icon}></img>
                <input placeholder='search' type='text' />

            </form>
            <div className='otherpage_btn'>
                <span>All</span>
                <span>Investments</span>
                <span>Money Transfer</span>
                <span>ICE Bank</span>
            </div>
        
        <div className='otherpage_card'>
                <div className='otherpage_card_items'>
                   <video width="400"  controls  autostart autoPlay="true" src={forexvid} type='video/mp4' />
                    <div>
                        <h3>Understanding the Forex<br />
                            Backed Securities
                        </h3>
                        <p>investment . 5 mins</p>
                    </div>
                </div>
                <div className='otherpage_card_items'>
                    <img src={img2}></img>
                    <div>
                        <h3>Open dollar account with <br /> ICE Bank
                        </h3>
                        <p>ICE Bank . 3 mins</p>
                    </div>
                </div>
                <div className='otherpage_card_items'>
                    <img src={img3}></img>
                    <div>
                        <h3>Using your virtual Card
                        </h3>
                        <p>investment . 5 mins</p>
                    </div>
                </div>
                <div className='otherpage_card_items'>
                    <img src={img1}></img>
                    <div>
                        <h3>Understanding the Forex<br />
                            Backed Securities
                        </h3>
                        <p>investment . 5 mins</p>
                    </div>
                </div>
                <div className='otherpage_card_items'>
                    <img src={img1}></img>
                    <div>
                        <h3>Understanding the Forex<br />
                            Backed Securities
                        </h3>
                        <p>investment . 5 mins</p>
                    </div>
                </div>
                <div className='otherpage_card_items'>
                    <img src={img1}></img>
                    <div>
                        <h3>Understanding the Forex<br />
                            Backed Securities
                        </h3>
                        <p>investment . 5 mins</p>
                    </div>
                </div>
                <div className='otherpage_card_items'>
                    <img src={img1}></img>
                    <div>
                        <h3>Understanding the Forex<br />
                            Backed Securities
                        </h3>
                        <p>investment . 5 mins</p>
                    </div>
                </div>
                <div className='otherpage_card_items'>
                    <img src={img1}></img>
                    <div>
                        <h3>Understanding the Forex<br />
                            Backed Securities
                        </h3>
                        <p>investment . 5 mins</p>
                    </div>
                </div>
                <div className='otherpage_card_items'>
                    <img src={img1}></img>
                    <div>
                        <h3>Understanding the Forex<br />
                            Backed Securities
                        </h3>
                        <p>investment . 5 mins</p>
                    </div>
                </div>
            
        </div>
    </div>
    </div>

  )
}

export default Otherpage