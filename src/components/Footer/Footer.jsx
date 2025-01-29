import React from 'react'
import'./Footer.css'
import facebook_icon from '../../assets/facebook_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import insta_icon from '../../assets/insta_icon.png'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
      <img src = {facebook_icon}></img>
      <img src = {youtube_icon}></img>
      <img src = {twitter_icon}></img>
      <img src = {insta_icon}></img>
      </div>

      <div className="footer-text">
        <ul type="none">
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p>Service Code</p><br></br>
        <p id="copy-right">&copy; 1997-2025 Netflix, Inc.</p>
      </div>
      
      
    </div>
  )
}

export default Footer
