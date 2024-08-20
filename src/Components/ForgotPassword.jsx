
import axios from 'axios'
import '../App.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

  const [email,setEmail] = useState("")
  const navigate =useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/forgotPassword',{
      email,
    })
    .then(res =>{
      if(res.data.status){
        alert('check you email for reset password link')
        navigate('/login')
      }
    }).catch(err => {
      console.log(err)
     })
  }
  
  return (
    <div className="sign-up-container">
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <label htmlFor="email" id='email'>Email:</label>
      <input
        type="email"
        autoComplete="off"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  </div>
  )
}

export default ForgotPassword
