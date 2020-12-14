import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = () => {
 
  const { user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  console.log(cart.cartInfo)
  let dispatch=useDispatch()




  
 
  return (
    <div>
      <nav className="nav__position navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid text-light">
          <Link className="navbar-brand" to="/">
            <img
              className="nav__image"
              src="https://s3.india.com/wp-content/uploads/2016/03/amazon1.jpg"
            ></img>
          </Link>
          <button
            className="navbar-toggler bg-danger"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-warning"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <form className="form-inline form__fixed d-flex my-2 px-lg-5">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {user.name ? (
                  <Link className="nav-link text-light" to="/">
                    {user.name}
                    <button onClick={()=>{
                      localStorage.clear('auth_token')
                      dispatch({type:"Clear_User"})
                    }} className="btn btn-outline-warning mx-5">Logout</button>
                  </Link>
                 
                ) : (
                  <Link className="nav-link text-light" to="/login">
                    Login
                  </Link>
                )}
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/checkout">
                  <ShoppingCartIcon/>{cart.initialCart}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
