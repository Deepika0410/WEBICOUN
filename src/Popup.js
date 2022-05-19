import React, {useState} from "react";
import './Popup.css'
import axios from 'axios';
import Popuptwo from './Popuptwo'
 
const Popup = props => {
    const[mobile, setMobile] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const onhandledata = (data) => {
        console.log(data);
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
     

    const handlemobile = (e) => {
       e.preventDefault();
       setMobile(e.target.value);
       console.log(mobile);
    }

    const handleclick = async (e) => {
        e.preventDefault();
        const result={
            "mobileNo": mobile
        }
        const res = await axios.post('https://immense-plateau-95409.herokuapp.com/test/auth/verify-mobileno', result)
        .then(response => {
            if(response.data.code === 200)
            {
                
                setIsOpen(true);
                props.handleclick();
            }
            else
            {
                alert('Wrong or missing field, kindly check again');
            }
        })
    setMobile('');
        
      
     }

  return (
    <div className="popup-box">
      
    <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="content">
        <img className='logo' src='https://media-exp1.licdn.com/dms/image/C4E0BAQGDfGpSoN2yUw/company-logo_200_200/0/1599881009401?e=2147483647&v=beta&t=xm_PkcCZ4PUTAdcI0qSJir6ZrgjObtB-n7VzxoRaUxI'></img>
        <h2 className="welcome">Welcome to Webicoun India</h2>
        <label>Mobile Number</label>
        <input className="mobile" type='text' placeholder='Mobile number' value={mobile} onChange={handlemobile}></input>
        <input
         type="button"
         className="Continue"
         value="Continue"
         onClick={handleclick}

        />
       
    {isOpen && <Popuptwo
      handleClose={togglePopup}
      data={onhandledata}
    />}
        </div>
      </div>


    </div>
  );
};
 
export default Popup;