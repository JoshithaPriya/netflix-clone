import React, {useEffect} from 'react'
import Home from './pages/Home/Home'
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import { logout } from './firebase.js'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, async(user)=>{
        if(user){
          console.log("Signed In");
          if(location.pathname === "/login"){
            navigate('/');

          }
          
        }
       
        else{
          console.log("Logged Out");
          navigate('/login');
        }
      })
    })
  return (
    <div>
      <ToastContainer theme='dark'/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/player/:id" element={<Player/>}></Route>
      </Routes>

    </div>

    
    
    
  )
}

export default App
