import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import netflix_logo from '../../assets/netflix_logo.png'
import search_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell_icon.png'
import profile_img from '../../assets/profile_img.jpg'
import caret_down_icon from '../../assets/caret_down_icon.png'
import { logout } from '../../firebase'
const Navbar = () => {

  const  navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div className="navbar" ref={navRef}>
        

      <div className="nav_left">
        <img src={netflix_logo} className="logo"/>
        <ul type="none">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
        </ul>
      </div>


      <div className="nav_right">
        <img src={search_icon}className="icons" />
        <p> Children</p>
        <img src={bell_icon} className="icons"/>
        <div className="navbar-profile">
           <img src={profile_img} className="profile"/>
           <img src={caret_down_icon} className="profile"/>


           <div className="dropdown">
            <p>Children</p>
            <p>Manage Profiles</p>
            <p>Transfer Profile</p>
            <p>Account</p>
            <p>Help Centre</p>
            <hr></hr>
            <p onClick={()=>{logout()}}> Sign out of Netflix</p>
           </div>
           

        </div>
        </div>
       
       


    </div>
  )
}

export default Navbar
