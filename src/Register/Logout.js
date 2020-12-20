import React from 'react';
import { Redirect, Route } from 'react-router';

class Logout extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loggedout:false
        }
      }

    logout=()=>{
        window.localStorage.removeItem('id')
        window.localStorage.removeItem('name')
        this.setState({
            loggedout:true
        })
    }
    render(){
        if(this.state.loggedout){
            return(
            <Route>
                <Redirect to='/'/>
            </Route>
            )
        }
        else{
            return(
                <div className="Logout">
                    <input type="Button" className="btn btn-primary" value="Logout" onClick={this.logout}/>
                </div>
            )
        }
        
    }
}

export default Logout;