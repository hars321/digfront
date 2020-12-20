import React from 'react';
import Login from './Login';
import './Register.css';
import Signup from './Signup';

import {Route,Redirect} from 'react-router-dom'


class Register extends React.Component{
  constructor(props){
    super(props);
    let loggedin=window.localStorage.getItem('id')?true:false;
    
    this.state={
        loggedin:loggedin,
        signupPage:false
    }
}
changeLogin=()=>{
  let currentState=this.state.signupPage;

  this.setState({
    signupPage:!currentState
  })
}
  render(){
    if(this.state.loggedin==false){
    if(!this.state.signupPage){
      return(
        <div className="Register">
            <Login/>
            <div className="Register-option">
              <button className="Register-button btn btn-secondary" onClick={this.changeLogin}>Signup</button>
            </div>
        </div>
      )
    }
    else{
      return(
        <div className="Register">
          <Signup/>
          <div className="Register-option">
            <button className="Register-button btn btn-secondary" value="Login" onClick={this.changeLogin}>Login</button>
          </div>
        </div>
      )
    }
  }
  else{
    return(
    <Redirect to='/products'/>
    )
  }
  }
    
}

export default Register;
