import React, { useState } from 'react'
import './PopupLogin.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const Popuplogin = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")

    const {url,setToken} = useContext(StoreContext)

    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) =>{
        const name =event.target.name;
        const value =event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event)=>{
        event.preventDefault()
        let newUrl = url;
        if(currState==="Login"){
            newUrl +="/api/user/login"
        }
        else{
            newUrl+= "/api/user/register"
        }
        const response = await axios.post(newUrl,data)
        if(response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }

  return (
    <div className='popup-login'>
        <form onSubmit={onLogin} className="popup-login-container">
            <div className="popup-login-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""></img>
            </div>
            <div className="popup-login-inputs">
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required></input>}
                <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required></input>
                <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required></input>
            </div>
            <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="popup-login-condition">
                <input type="checkbox" required></input>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here </span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default Popuplogin