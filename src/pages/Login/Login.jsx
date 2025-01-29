import React, {useState} from 'react'
import './Login.css'
import netflix_logo from '../../assets/netflix_logo.png'
import {login, signup} from '../../firebase'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const user_auth = async(event)=>{
    event.preventDefault;
    if(signState === "Sign In"){
      await login(email, password);
    }
    else{
      await signup(name, email, password);
    }
  }


  return (
    
    <div className="form">
      <img src={netflix_logo} ></img>
      <div className="login-form">
      <h2>{signState}</h2>

        <div className="form-box">
          {signState==="Sign Up"?
          <input type="text" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}}></input>:<></>}

        <input type="email" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
        <button id="sign-up-button" onClick={user_auth} type='submit'>{signState}</button>
        </div>
        
        
        <div className="help">

          <div className="remember">
          <input type="checkbox" className="rem"></input>
          <label htmlFor="" id="label-remember">Remember me</label>
          </div>

          <p>Need Help?</p>
        </div>
           <div className="last-para">
            {signState==="Sign In"? 
            <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:
            <p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
                        
           </div>

      </div>
    </div>
  )
}

export default Login
