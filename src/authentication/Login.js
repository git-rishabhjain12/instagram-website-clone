import React, { useState } from 'react'
import './Login.css'
import instagramLogo from '../assets/Logo-Instagram-1.png'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='login'>
      <img src={instagramLogo} alt='' />
      <input
        type='email'
        placeholder='Email'
        onChange={e => {
          setEmail(e.target.value)
        }}
        value={email}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={e => {
          setPassword(e.target.value)
        }}
        value={password}
      />
      <button>Log In</button>
    </div>
  )
}

export default Login
