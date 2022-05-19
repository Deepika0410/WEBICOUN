import React, { useState } from 'react';
import Popup from './Popup';
import './App.css'
 
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const t='';

 
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
   <h1 className='Heading'>WELCOME TO WEBICOUN INDIA</h1>
   {t}
    <img src='https://media-exp1.licdn.com/dms/image/C4E0BAQGDfGpSoN2yUw/company-logo_200_200/0/1599881009401?e=2147483647&v=beta&t=xm_PkcCZ4PUTAdcI0qSJir6ZrgjObtB-n7VzxoRaUxI'></img>
    <input
    type="button"
    value="Click to Login"
    onClick={togglePopup}
  />
  <br></br>
    {isOpen && <Popup
      handleClose={togglePopup}
    />}
  </div>
}
 
export default App;
