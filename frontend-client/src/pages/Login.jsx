import React from 'react'
import Button from '../components/Button'
import { useLocation } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <input type="email" placeholder='email' />
      <input type="password" placeholder='password'/>
      <><Button text="Log In"></Button></>
    </div>
  )
}

export default Login