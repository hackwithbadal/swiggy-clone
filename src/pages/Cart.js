import React from 'react';
import './Cart.css'

function Cart() {
  return <div  className='MyCart'>
    <div className='cart'>
      <h1 className='CartHeading'>Secure Checkout</h1>
      <p className='CartDesc'>Your cart</p>
    </div>
    <div className='cartItem'>
      <h5>Your Cart is Empty</h5>
    </div>
  </div>;
}

export default Cart;