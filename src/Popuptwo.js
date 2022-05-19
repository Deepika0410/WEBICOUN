import React, {useState} from 'react'
import './Popuptwo.css'
import axios from 'axios';

function Popuptwo(props) {
    const[mobile, setMobile] = useState('');
    const[password, setPassword] = useState('');

    const gettoken = async(token) => {
        console.log("token from app" + token);
        const res = await axios.get('https://immense-plateau-95409.herokuapp.com/test/blog', {
      headers: {
    "Authorization": "Bearer "+token
  }
}).then(response => {
    console.log(response);
    props.data(response.data);
})
    }

    const handlemobile = (e) => {
        e.preventDefault();
        setMobile(e.target.value);
        console.log(mobile)
     }

     const handlepassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
     }

     const verify = async(e) => {
         e.preventDefault();
         const result = {
             "mobileNo" : mobile,
             "password" : password
         }
         const res = await axios.post('https://immense-plateau-95409.herokuapp.com/test/auth/verify-password', result)
        .then(response => {
           gettoken(response.data.data.token);
        })
        setMobile('');
        setPassword('');
        props.handleClose();
     }

  return (
    <div>
    <div className="popup-box">
      
    <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="content">
        <img className='logo' src='https://media-exp1.licdn.com/dms/image/C4E0BAQGDfGpSoN2yUw/company-logo_200_200/0/1599881009401?e=2147483647&v=beta&t=xm_PkcCZ4PUTAdcI0qSJir6ZrgjObtB-n7VzxoRaUxI'></img>
        <h2 className="welcome">Welcome to Webicoun India</h2>
        <label>Mobile Number</label>
        <input className="mobile" type='text' placeholder='Mobile number' onChange={handlemobile}></input>
        <label>Password</label>
        <input className="mobile" type='text' placeholder='Password' onChange={handlepassword}></input>
        <button className='Continue' onClick={verify}>Continue</button>
        <br></br>
        <a href=''>Login with OTP</a>
        </div>

    </div>
    </div>
    </div>
  )
}

export default Popuptwo