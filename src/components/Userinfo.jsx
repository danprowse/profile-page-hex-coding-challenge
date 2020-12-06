import React from 'react'
import profileImage from './css/images/profile-pic.jpg'

import './css/Userinfo.css'
export default function Userinfo() {
  return (
    <section className="user-info-container">
      <div className="profile-pic-container">
        {/* image */}
        <img src={profileImage} alt="profile-img" className="profile-pic"></img>
      </div>
      <div className="user-details">
        {/* name - job title - email */}
        <p className="name">Daniel Prowse</p>
        <p className="title">Junior Frontend Developer</p>
      </div>
    </section>
  )
}
