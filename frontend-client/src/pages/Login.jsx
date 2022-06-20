import React, { useEffect } from 'react'
import Button from '../components/Button'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

  // Initial state of email and password

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // let data = new FormData();
  // data.append('email', email);
  // data.append('password', password);

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    logIn()
  };

  //Login API
    const logIn = async () => {

      let user_data = new FormData();
      user_data.append('email', email);
      user_data.append('password', password);

      const res = await fetch("http://127.0.0.1:8000/api/v1/login", {
        method: "POST",
        // headers: {
        //   "Content-type": "application/json",
        // },
        // body: JSON.stringify(user_data),
        body: user_data,
      });
      const response = await res.json();
      console.log(response)
      setEmail("")
      setPassword("")
    };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="email" placeholder='email' value={email} required onChange={(e) => {
            setEmail(e.target.value);
      }}/>
      <input type="password" placeholder='password' value={password} required onChange={(e) => {
            setPassword(e.target.value);
      }}/>
      <input type="submit" className='btn' />
    </form>
  )
}

export default Login