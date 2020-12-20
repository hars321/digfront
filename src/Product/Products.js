import React from 'react';
import Logout from '../Register/Logout';
import Card from './Card';
import './Stars.css';
import './Products.css';


class Products extends React.Component{

  constructor(props){
    super(props);
    this.state={
        data:""
    }
  }

  markStars=(element_id,num)=>{

    for(let i=1;i<=num;i++){

        document.getElementById(element_id+i).classList.add('checked');
    }
    for(let i=num+1;i<=5;i++){

        document.getElementById(element_id+i).classList.remove('checked')
    }

  }

  componentDidMount(){
      fetch('http://localhost:4000/getData/products')
      .then(response => response.json()
      .then(data=>{

          var arr=[];
          for(let i=0;i<data.length;i++){
            let element=<Card
            id={data[i].id}
            key={data[i].id}
            name={data[i].name}
            description={data[i].image}
            cost={data[i].cost}
            id={data[i].id}
            func={this.markStars}
            />
            arr.push(element);
          }
          this.setState({
              data:arr
          })
      }))
      .catch(data => console.log(data));
  }
  render(){
    return(
        <div className="Products">
            
            <div className="Product-List">
              {this.state.data}
            </div>
            <Logout/>
        </div>
    )
    
  }
    
}

export default Products;
