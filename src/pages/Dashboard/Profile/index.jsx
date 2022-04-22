import BottomNav from 'components/navbar/bottom_navbar'
import React from 'react'
import profileimg from 'assets/drawables/profileimg.png'
import './style.scss'
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
            </div>
        </div>

    </div>
  )
}

export default Profile  