import React, { useState } from 'react'
import './Signup.css'
import instagramLogo from '../assets/Logo-Instagram-1.png'

function Signup () {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='signup'>
      <img src={instagramLogo} alt='' />
      <input
        type='email'
        placeholder='Email'
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        type='text'
        placeholder='Username'
        onChange={e => setUsername(e.target.value)}
        value={username}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button>Sign Up</button>
    </div>
  )
}

export default Signup
