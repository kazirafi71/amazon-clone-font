import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios'
import jwt from 'jwt-decode'
import store from './store/store';
import Navbar from './components/Navbar';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import CheckOut from './pages/CheckOut';
import Footer from './components/Footer';


let token = localStorage.getItem('auth_token')
if(token){
  
  let decoded = jwt(token)
  //  console.log(decoded);
  axios.defaults.headers.common['Authorization'] = token;
  store.dispatch({
    type: "SET_USER",
    payload: decoded
  })}
  
  
  
  const Routing=()=>{
    let token = localStorage.getItem('auth_token')
    const history=useHistory()
    
  
    // useEffect(()=>{
    //   if(!token){
    //     return(history.push('/login'))
    //   }
    // },[])
    
    return(
  <Switch>
        <Route exact path='/register'>
          <Register/>
        </Route >
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/checkout'>
          <CheckOut/>
        </Route>
       
      </Switch>
    )
    
    
  }

function App() {
  // const user=useSelector(state=>console.log(state))
  return (
    <div className="App">
      <Navbar/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
