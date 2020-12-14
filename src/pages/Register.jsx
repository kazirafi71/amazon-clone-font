import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [error,setError]=useState('')
    const history=useHistory()

    const SubmitHandler=(e)=>{
        e.preventDefault();
        let userData={
            name,email,password,confirmPassword
        }
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            return toast('Email not valid')
        }
        Axios.post('/register',userData)
        .then(res=>{toast('Registration successful')
        history.push('/login')})
        .catch(err=>{
            toast(err.response.data.error)
            setError(err.response.data)
        console.log(err.response.data)})
    }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
              <h2 className='text-center'>Register here</h2><br/>
              <ToastContainer/>
            <form onSubmit={SubmitHandler}>
                <p>{error.error}</p>
            <div className="form-group">
                <label >UserName</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Please enter your name"
                  onChange={(e)=>setName(e.target.value)}
                  
                />
              </div><br/>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Please enter your email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div><br/>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Please enter your password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div><br/>
              <div className="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Please enter your Confirm Password"
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                />
              </div><br/>
              <p>Already have an account?<Link to='/login'>Login here</Link></p>

              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
