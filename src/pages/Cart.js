import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React from 'react';
import './Cart.css'

function Cart() {
  return <div className='MyCart'>
    <div>
      <Helmet><title>Cart | Swiggy</title></Helmet>
    </div>
    <div className='cart'>
      <h1 className='CartHeading'>Secure Checkout</h1>
      <p className='CartDesc'>Your cart</p>
    </div>
    <div className='cartContainer'>
    <div id='itemInCart' >
        <div className='itemNameCart' id='itemnamesCart'>
          <h4>havwa</h4>
          <p> ₨ 69</p>
        </div>
        <div className='ItemImageCart' id='ItemImageCart'>
          <img id='foodImage1' src="https://hackwithbadal.github.io/foodImages/img1.jpg" alt="loading" />
        </div>
        <div className='IncDec'>
          <button id='Dec'>-</button>
          <h6 id='CartValue'>0</h6>
          <button id='Inc'>+</button>
        </div>
        <div className='AddItemToCart' id='AddItemToCart'>
          <button id='btn-Cart'>REMOVE</button>
        </div>
      </div>
      <div>
        {/* <h1>2000rs Check Out</h1> */}
      </div>
      {/* <div className='cartItem'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
        <h2>
          Your cart is empty
        </h2>
        <p>You can go to home page to view more restaurants</p>
        <Link to="/home" ><a href="/home">SEE RESTAURANTS NEAR YOU</a></Link>
      </div> */}

    </div>
  </div>;
}

export default Cart;