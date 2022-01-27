import React from 'react';
import "./signIn.css"

function SignIn() {
  return <div className='signInContainer'>
    <div className='login'>
      <h1 className='heading'>Login</h1>
      <p id='account'>or<a href="#">create new account</a></p>
      <input id='input' type="text" placeholder='Mobile Number' /> <br />
      <button onClick={() =>{alert('badal')}} id='btn'>Login</button>
      <p id='tc'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy<a href="#">t&c</a></p>
    </div>
  </div>;
}

export default SignIn;
