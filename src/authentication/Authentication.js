import React from 'react'
import './Authentication.css'
import loginPageImage from '../assets/login page image.png'
import Login from './Login'

function Authentication () {
  return (
    <div className='authentication'>
      <div className='auth_left'>
        <img src={loginPageImage} alt='' />
      </div>
      <div className='auth_right'>
        <Login />
        <div className='auth_more'>
          <span>
            Don't have an account?<button>Sign Up</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Authentication
