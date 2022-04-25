import BottomNav from 'components/navbar/bottom_navbar'
import React from 'react'
import profileimg from 'assets/drawables/profileimg.png'
import empty_img from 'assets/drawables/empty_img.png'
import './style.scss'
import ngn from 'assets/drawables/flags/Nigeria.png'
const Profile = () => {
  return (
    <div className='profile_section'>
        <BottomNav />
        <div className='profile_details'>
            <h3>Profile</h3>
            <p style={{paddingTop: '10px'}}>Manage your profile information</p>
            <div className='profile_info'>
                <div className='Profile_title'>
                    personal account    
                </div> 

                <div className='profile_items'>
                  <div className='profile_img'>
                    <img src={empty_img}></img>
                    <p>Upload Picture</p>
                  </div>


                <div className='all_profile'>

                <div className='profile_names'>
                    <div style={{marginRight: '135px'}}>
                      <p>First name</p>
                      <span>Ademola</span>
                    </div>
                    <div style={{marginRight: '135px'}}>
                      <p>Last Name</p>
                      <span>Ademola</span>
                    </div>
                    <div>
                      <p>Date of Birth</p>
                      <span>19/02/1992</span>
                    </div>
                  </div>

                  <div className='profile_names' style={{marginTop: '35px'}}>
                    <div style={{marginRight: '80px'}}>
                      <p>Phone Number</p>
                      <span>+2348084728384</span>
                    </div>
                    <div style={{marginRight: '150px'}}>
                      <p>Gender</p>
                      <span>Male</span>
                    </div>
                    <div>
                      <p>Country</p>
                      <div className='ngn_flag'><img src={ngn}></img>Nigeria</div>
                    </div>
                  </div>

                  <div className='profile_names' style={{marginTop: '35px'}}>
                    <div style={{marginRight: '135px'}}>
                      <p>State</p>
                      <span>lagos</span>
                    </div>
                  </div>
                </div>

              
                    

                 

                </div>
                <div className='edit_btn'>Edit</div>
            </div>

           
        </div>

    </div>
  )
}

export default Profile  