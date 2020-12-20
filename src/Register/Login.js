import React, { createRef } from 'react';
import { Redirect } from 'react-router';
import './Login.css';


class Login extends React.Component{
  constructor(props){
    super(props);
    // const 
    this.state={
      loggedin:false
    }
}
  login=()=>{
    let email=this.refs.email.value
    let password=this.refs.password.value

    let data=JSON.stringify({
      "email":email,
      "password":password
    })

    fetch(`http://localhost:4000/getData/user`, {
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(data=>
        data.json()
        .then(data=>{
          console.log(data)
          if(data=='error'){
            //user not found
            alert("user not found")
          }
          else{
            //store in local storage
              window.localStorage.setItem('id',data.id)
              window.localStorage.setItem('name',data.name)
              this.setState({
                loggedin:true
                
              })
          }
        })
        .catch(err=>{
          console.log(err)
        })
        
      )
  

  }
  render(){
    return(
      this.state.loggedin?
      <Redirect to='/products'/>
      :
        <div className="Login-Parent">
            
        <form className="Form">
        <div class="form-group">
          <label for="exampleInputEmail1" >Email address</label>
          <input type="email" ref="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" >Password</label>
          <input type="password" ref="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <input type="button" class="btn btn-primary" onClick={this.login} value="Login"/>
      </form>
      </div>
    )
  }
}

export default Login;
