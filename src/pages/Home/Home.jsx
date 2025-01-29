import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import start_up from '../../assets/start_up.jpg'
import start_up_title from '../../assets/start_up_title.png'
import N_tab_logo from '../../assets/N_tab_logo.png'
import play_icon from '../../assets/play_icon.png'
import more_info from '../../assets/more_info.png'
import Titlecards from '../../components/Titlecards/Titlecards.jsx'
import Footer from '../../components/Footer/Footer.jsx'
const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      
      <div className="startup">
        <img src={start_up} className="banner-img"/>
        
        <div className="startup_caption">

          <div className="N-series">
          <img src={N_tab_logo} className="N-title"/>
          <p id="series"> SERIES</p>
          </div>

        <img src={start_up_title} className="caption_img"></img>
        <p>K-pop idol Bae Suzy stars as an aspiring tech CEO who navigates <br></br> business rivalries, an unexpected love triangle and family drama on <br></br>her way to success.</p>
        <div className="startup-buttons">
          <button className="playbutton" ><img src={play_icon} className="playicon"></img> Play</button>
          <button className="infobutton"><img src={more_info}className="moreinfo"></img> More info</button>


        </div>
        
        </div>
        <Titlecards/>
      </div>

      <div className="more-cards">
        <Titlecards title = {"Blockbuster"} category={"popular"}/>
        <Titlecards title={"Only on Netflix"} category={"top_rated"}/>
        <Titlecards title={"Upcoming"} category={"upcoming"}/>
        <Titlecards title={"Top picks for you"} category={"now_playing"}/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Home
