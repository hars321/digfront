import React from 'react';
import './Signup.css';
import { Redirect } from 'react-router';


class Signup extends React.Component{
  constructor(props){
    super(props);
    // const 
    this.state={
      loggedin:false
    }
  }
  signup=()=>{
    let email=this.refs.email.value
    let password=this.refs.password.value
    let name=this.refs.name.value;

      let data=JSON.stringify({
        "email":email,
        "password":password,
        "name":name
      })


      fetch(`http://localhost:4000/putData/user`, {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      })
      .then(data=>data.json()
      .then(data=>{
        if(data=="User already exists"){
          return alert("User already exists")
        }
        else{
          //store in local storage
          console.log(data)
          window.localStorage.setItem('id',data.id)
          window.localStorage.setItem('name',data.name)
          this.setState({
            loggedin:true
            
          })
        }
      })
      )
      
    }
  
  render(){
    return(
      this.state.loggedin?
      <Redirect to='/products'/>
      :
        <div className="Signup-Parent">
            
        <form className="Form">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" ref="name" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name"/>
          
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" ref="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" ref="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <input type="button" class="btn btn-primary" onClick={this.signup} value="Signup"/>
      </form>
      </div>
    )
  }
}

export default Signup;
