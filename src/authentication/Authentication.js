import React, { useState } from 'react'
import './Authentication.css'
import loginPageImage from '../assets/login page image.png'
import Login from './Login'
import Signup from './Signup'

function Authentication () {
  const [active, setActive] = useState('login')

  const handleChange = () => {
    setActive(active === 'login' ? 'signup' : 'login')
  }

  return (
    <div className='authentication'>
      <div className='auth_left'>
        <img src={loginPageImage} alt='' />
      </div>
      <div className='auth_right'>
        {active === 'login' ? <Login /> : <Signup />}

        <div className='auth_more'>
          {active === 'login' ? (
            <>
              Don't have an account?
              <button onClick={handleChange}>Sign Up</button>
            </>
          ) : (
            <>
              Already have an account?
              <button onClick={handleChange}>Log In</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Authentication
