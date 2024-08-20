import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
    const [password,setPassword] = useState("")
    const navigate =useNavigate()
    const {token} =useParams()
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/auth/resetPassword/'+token,{
        password,
      })
      .then(res =>{
        if(res.data.status){
         
          navigate('/login')
        }
      }).catch(err => {
        console.log(err)
       })
    }
    
  return (
    <div className="sign-up-container">
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <label htmlFor="password" id='password'>Password:</label>
      <input
        type="password"
        autoComplete="off"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Reset</button>
    </form>
  </div>
  )
}

export default ResetPassword
