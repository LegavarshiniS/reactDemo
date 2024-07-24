// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import './login.css';
//  const Logindem=()=>
//  {
   
//    return (
     
//      <div class="login-wrapper">
//       <form action="" class="form">
//        <h2>LOGIN</h2>
//        <div class="input-group">
//          <input type="text" name="loginUser" id="loginUser" />
//          <label for="loginUser">User Name</label>
//        </div>
//        <div class="input-group">
//          <input
//            type="password"
//            name="loginPassword"
//            id="loginPassword"
           
//          />
//          <label for="loginPassword">Password</label>
//        </div>
      
//          {/* <input type="submit" value="LOGIN" class="submit-btn" /><Link to="/mainpage"></Link><br></br>  */}
//          <Button variant="contained" class="conta"><Link style={{textDecoration:'none',color:'black'}} to="/mainpage">LOGIN</Link></Button><br></br> 
//        {/* <center>Not a member?<Link to="/register"><h4>Register here!</h4></Link></center> */}

//        <center><h6>Don't have an account? <Link style={{textDecoration:'none',color:'white'}}to="/register">Signup here</Link></h6></center>
//    </form>
   
//    </div>
   
//      )
// }

// export default Logindem;

import { Button } from '@mui/base';
import { TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import "./login.css"
import { API_URL } from '../common/Variables';

export default function Login(props) {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [error, updateError] = useState('');

  const handleLogin = (e) => {
    if (username && password) {
      axios.get(API_URL + "users?username=" + username + "&password=" + password)
      .then(res => {
        var data = res.data
        if(data.length) {
          window.location.pathname = '/mainpage';
          localStorage.setItem("user", JSON.stringify(data[0]));
        } else {
          updateError("Invalid Username or Password")
        }
      })
      .catch(error => {
        console.log(error)
        updateError("Something went wrong")
      });
      
    } else {
      updateError("Please enter Username and Password")
    }
  };

  const handleusernamechange = (e) => {
    var value = e.target.value;
    updateUsername(value);
    updateError("");
  };
  const handlepasswordchange = (e) => {
    var value = e.target.value;
    updatePassword(value);
    updateError("");
  };

  const goToRegister = () => {
    window.location.pathname = '/register';
  }

  return (
    <div className="login-page-container">
            <div className="login-left-portion">
                <h1 className='container-header'>Login</h1>
                <div className="input-field-items">
                    <div className='input-field-item'>
                    <TextField 
                        name="username"
                        label="" 
                        variant="standard"
                        placeholder="Username"
                        sx={{width: "100%", div: { borderRadius: "unset" }}}
                        value={username}
                        onChange={handleusernamechange}
                    />
                    </div>
                    <div className='input-field-item'>
                    <TextField 
                        name="password"
                        label="" 
                        type="password"
                        variant="standard"
                        placeholder="Password"
                        sx={{width: "100%", div: { borderRadius: "unset" }}}
                        value={password}
                        onChange={handlepasswordchange}
                    />
                    </div>
                    {error ? <div className='input-field-item' style={{color: "red"}}>{error}</div> : null}
                    <Button
                        variant="contained" 
                        className='btn-text'
                        onClick={handleLogin}
                      >Login</Button>
                </div>
                <div className='create-account'>
                  <span>New User?</span>
                  <span className='account-link' onClick={goToRegister}>Create Account</span>
                </div>
            </div>
            <div className="login-right-portion">
            </div>
        </div>
  );
}