// import React from 'react'
// import {Link} from 'react-router-dom';
// import './register.css';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// function Register(){
//   return (
//     <div class="cont">
//      <div class="container">
// <form action="" id="form">
//  <h1>SIGN UP</h1>
//   <div class="input-group">
// <label for="username">Username</label>
//  <input type="text" id="username" name="username"></input>
//  <div class="error"></div>
//  </div>  
//   <div class="input-group">
//   <label for="email">Email</label>
//  <input type="text" id="email" name="email" ></input>
//   <div class="error"></div>
//   </div>
//   <div class="input-group">
//   <label for="password">Password</label>
//   <input type="password" id="password" name="password"></input>
//  <div class="error"></div>
//   </div>
//   <div class="input-group">
//  <label for="mobile">Mobile Number</label>
//  <input type="tel" ></input>
//  <div class="error"></div>
//  </div>
  
//   <Button variant="contained"><Link style={{textDecoration:'none',color:'black'}} to="/login">SIGN UP</Link></Button>
//   {/* <button type="submit"><Link style={{ textDecoration: 'none'}} to="/login"><p>REGISTER</p></Link></button><br></br> */}
//   <center><h5 style={{color:'white'}}>Already a User? <Link style={{textDecoration:'none',color:'white'}}to="/login">Login</Link></h5></center>
//   </form>
//   </div>
//   </div>
//     );
//  }
//  export default Register;
// Register.js
// Register.js
import { Button } from '@mui/base';
import { TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

import "./register.css"
import { API_URL } from '../common/Variables';

export default function Register(props) {
  const [name, updateName] = useState('');
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [confirmPassword, updateConfirmPassword] = useState('');
  const [error, updateError] = useState("");
  const [success, updateSuccess] = useState("");

  const resetValues = () => {
    updateUsername("");
    updateName("");
    updatePassword("");
    updateConfirmPassword("");
  }

  const resetWarningMsg = () => {
    updateError("");
    updateSuccess("");
  }

  const handleRegister = (e) => {
    resetWarningMsg();
    if (name && username && password && confirmPassword) {
      if (password === confirmPassword) {
        axios.post(API_URL + "users", { name: name, username: username, password: password, id: username })
          .then(res => {
            resetValues();
            updateSuccess("Account created successfully");
          })
          .catch(error => {
            var msg = error.response.data;
            resetValues();
            if (typeof msg === 'string' && msg.includes("duplicate")) {
              updateError("Already username registered");
            } else {
              updateError("Something went wrong. Unable to create account");
            }
          });
      } else {
        updateError("Password and Confirm Password should match");
      }
    } else {
      updateError("Please enter all the fields");
    }
  };

  const handleusernamechange = (e) => {
    var value = e.target.value;
    updateUsername(value);
    resetWarningMsg();
  };

  const handlenamechange = (e) => {
    var value = e.target.value;
    updateName(value);
    resetWarningMsg();
  };

  const handlepasswordchange = (e) => {
    var value = e.target.value;
    updatePassword(value);
    resetWarningMsg();
  };

  const handleconfirmpasswordchange = (e) => {
    var value = e.target.value;
    updateConfirmPassword(value);
    resetWarningMsg();
  };

  const goToLogin = () => {
    window.location.pathname = '/login';
  }

  return (
    <div className="signup-page-container">
      <div className="signup-left-portion">
        <h2 className='container-header'>Create Account</h2>
        <div className="input-field-items">
          <div className='input-field-item'>
            <TextField
              name="name"
              label=""
              variant="standard"
              placeholder="Name"
              sx={{ width: "100%", div: { borderRadius: "unset" } }}
              value={name}
              onChange={handlenamechange}
            />
          </div>
          <div className='input-field-item'>
            <TextField
              name="username"
              label=""
              variant="standard"
              placeholder="Email"
              sx={{ width: "100%", div: { borderRadius: "unset" } }}
              value={username}
              onChange={handleusernamechange}
            />
          </div>
          <div className='input-field-item'>
            <TextField
              name="password"
              label=""
              variant="standard"
              type='Password'
              placeholder="Password"
              sx={{ width: "100%", div: { borderRadius: "unset" } }}
              value={password}
              onChange={handlepasswordchange}
            />
          </div>
          <div className='input-field-item'>
            <TextField
              name="confirm-password"
              label=""
              variant="standard"
              type="password"
              placeholder="Confirm Password"
              sx={{ width: "100%", div: { borderRadius: "unset" } }}
              value={confirmPassword}
              onChange={handleconfirmpasswordchange}
            />
          </div>
          {error ? <div className='input-field-item' style={{color: "red"}}>{error}</div> : null}
          {success ? <div className='input-field-item' style={{color: "green"}}>{success}</div> : null}
          <Button
            variant="contained"
            className='btn-text'
            onClick={handleRegister}
          >Create Account</Button>
        </div>
        <div className='create-account'>
          <span>Already have an account?</span>
          <span className='account-link' onClick={goToLogin}>Login</span>
        </div>
      </div>
      <div className="signup-right-portion">
      </div>
    </div>
  );
}