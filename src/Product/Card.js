import React from 'react';

import './Card.css';
import './Stars.css';



class Card extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
            count:0,
            user_id:window.localStorage.getItem('id'),
            product_id:"",
            stars_count:0
        }
    }

    clickMe=(num)=>{
      //update stars count
      let element_id="p"+this.state.product_id+"s"
      

      let user_id=this.state.user_id;
      let product_id=this.state.product_id;

      let data=JSON.stringify({
        'product_id':product_id,
        'user_id':user_id,
        'stars':num
      })

      fetch(`http://localhost:4000/putData/rating`, {
      method: 'PUT', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
      })
      .then(data=>data.json()
      .then(data=>{
        this.props.func(element_id,num);
        this.setState({
          stars_count:num
        })

      })
      )
      
    }


    componentDidMount(){
      let user_id=this.state.user_id;
        
        let product_id=this.props.id;
        
        let data=JSON.stringify({
            "user_id":user_id,
            "product_id":product_id
        })
        
        //fetch rating

        fetch("http://localhost:4000/getData/rating", {
            method: 'POST', 
            mode: 'cors', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: data 
          })
          .then(data=>data.json()
          .then(data=>{
              let count=0;

              if(data.length!==0){
              count=parseInt(data[0].stars)
              let element_id="p"+this.state.product_id+"s"
              this.props.func(element_id,count);
              }
              this.setState({
                count:count,
                product_id:this.props.id
                })
          }));
    }
    
  render(){
    
      return(
            
        <div class="card" >
          <div class="card-body">
            <h2 class="card-title">{this.props.name}</h2>
            <h6 class="card-subtitle mb-2 text-muted">{this.props.description}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${this.props.cost}</h6>

            <div className="Stars">
                <span id={"p"+this.state.product_id+"s1"} key="1" class="fa fa-star" onClick={() => this.clickMe(1)}></span>
                <span id={"p"+this.state.product_id+"s2"} key="2" class="fa fa-star" onClick={() => this.clickMe(2)}></span>
                <span id={"p"+this.state.product_id+"s3"} key="3" class="fa fa-star" onClick={() => this.clickMe(3)}></span>
                <span id={"p"+this.state.product_id+"s4"} key="4" class="fa fa-star" onClick={() => this.clickMe(4)}></span>
                <span id={"p"+this.state.product_id+"s5"} key="5" class="fa fa-star" onClick={() => this.clickMe(5)}></span>
            </div>
          </div>
        </div>

      )
    
    
  }
    
}

export default Card;
