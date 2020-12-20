import React from 'react';
import { Router, Route,Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './Register/Register';
import reportWebVitals from './reportWebVitals';
import Products from './Product/Products'


ReactDOM.render(
  <React.StrictMode>
    
     <BrowserRouter>          
          <Route exact path='/' component={Register}></Route>
          <Route exact path='/products' component={Products}></Route>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
