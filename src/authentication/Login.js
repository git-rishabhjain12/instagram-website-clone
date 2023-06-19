import React from 'react'
import './Login.css'
import instagramLogo from '../assets/Logo-Instagram-1.png'

function Login () {
  return (
    <div className='login'>
      <img src={instagramLogo} alt='' />
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <button>Log In</button>
    </div>
  )
}

export default Login
