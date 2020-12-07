import React, { useState, useEffect } from 'react'
import profileImage from './css/images/pic.jpg'

import './css/Userinfo.css'
export default function Userinfo() {
  const [apiActive, setApiActive ] = useState();
  
  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:4000/api')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setApiActive(true)
        })
        .catch((err) => {
          console.log(err);
          setApiActive(false)
        })
    }
    fetchData();
  }, []);

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
        <div className="api-active-container">
          <p>API status:</p> {apiActive ? <i className="far fa-check-circle icon icon-tick"></i> : <i class="far fa-times-circle icon icon-cross"></i>}
        </div>
      </div>
    </section>
  )
}
