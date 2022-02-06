import { Helmet } from 'react-helmet';
import React from 'react';
import "./signIn.css"

function SignIn() {
  return <div className='signInContainer'>
    <div>
      <Helmet><title>SignIn | Swiggy</title></Helmet>
    </div>
    <div className='login' id='TOlogin'>
      <h1 className='heading'>Login</h1>
      <p id='account'>or<a id='tndc' onClick={() => { document.getElementById("registerAccount").style.display = 'block'; document.getElementById("TOlogin").style.display = 'none' }} href="#registerAccount">create new account</a></p>
      <input id='input' type="text" placeholder='Mobile Number' /> <br />
      <button id='btn'>LOGIN</button>
      <p id='tc'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy<a id='tandc' href="#">t&c</a></p>
    </div>
    <div id='registerAccount'>
      <h1 className='SignHeading'>Sign Up</h1>
      <p id='manageAccount'>or <a id='SignTC' href='#login' onClick={() => { document.getElementById("registerAccount").style.display = 'none'; document.getElementById("TOlogin").style.display = 'block' }}>login to account</a></p>
      <input type="Number" name="" id="SignInput" placeholder='Phone Number' /><br />
      <input type="text" id='SignInput' placeholder='Name' /><br />
      <input type="email" id='SignInput' placeholder='Email' /><br />
      <input type="password" id='SignInput' placeholder='Password' /><br />
      <button id='btn'>CONTINUE</button>
      <p id='tc'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy<a id='tandc' href="#">t&c</a></p>
    </div>
  </div>;
}

export default SignIn;
