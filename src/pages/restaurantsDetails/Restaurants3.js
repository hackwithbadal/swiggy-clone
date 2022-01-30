import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Helmet } from 'react-helmet';
import './Restaurants.css'


function Restaurants1() {
  return <div className='Restaurabts1Details'>
    <div>
      <Helmet><title>Swiggy | The Cafe</title></Helmet>
    </div>
    <div className='backBtn'><li className='backbutton'><Link to="/home"><IoMdArrowRoundBack /></Link></li></div>

    <div className='restaurantHeading'>
      <div className='ImgHeading'>
        <img src="https://hackwithbadal.github.io/foodImages/img3.jpg" alt="loading" />
      </div>
      <div className="restaurantInfo">
        <h3 className='HotelNameInfo'>The Cafe</h3>
        <p className='hotelDescInfo '>Fast Food , pizza</p>
        <div className='obj'>
          <div id='Hotelrating'>
            <h3>3.5</h3>
            <p>Rating by custumers</p>
          </div>
          <div id='FoodTime'>
            <h3>35 min</h3>
            <p>Delivary time</p>
          </div>
          <div id='Charges'>
            <h3>160rs</h3>
            <p>COST OF TWO</p>
          </div>
        </div>
      </div>
      <div className='RestaurantsOffer'>
        <p id='promoCodeInfo'><MdOutlineLocalOffer />60% on bharat pe</p>
      </div>
    </div>
    <div className='AvilableFood'>
      <div>
        <h1>Avilable Food</h1><hr />
      </div>
      <div id='item1' >
        <div className='itemName'>
          <h4>Veg Fried Rice</h4>
          <p> ₨ 90</p>
        </div>
        <div className='ItemImage'>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lqvtd7vilxulyo5sihoi" alt="loading" />
        </div>
        <div className='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
      <div id='item2' >
        <div className='itemName'>
          <h4>Veg Fried Rice</h4>
          <p> ₨ 90</p>
        </div>
        <div className='ItemImage'>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lqvtd7vilxulyo5sihoi" alt="loading" />
        </div>
        <div className='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
      <div id='item3' >
        <div className='itemName'>
          <h4>Veg Fried Rice</h4>
          <p> ₨ 90</p>
        </div>
        <div className='ItemImage'>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lqvtd7vilxulyo5sihoi" alt="loading" />
        </div>
        <div className='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
      <div id='item4' >
        <div className='itemName'>
          <h4>Veg Fried Rice</h4>
          <p> ₨ 90</p>
        </div>
        <div className='ItemImage'>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lqvtd7vilxulyo5sihoi" alt="loading" />
        </div>
        <div className='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
      <div id='item5' >
        <div className='itemName'>
          <h4>Veg Fried Rice</h4>
          <p> ₨ 90</p>
        </div>
        <div className='ItemImage'>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lqvtd7vilxulyo5sihoi" alt="loading" />
        </div>
        <div className='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
      <div id='item6' >
        <div className='itemName'>
          <h4>Veg Fried Rice</h4>
          <p> ₨ 90</p>
        </div>
        <div className='ItemImage'>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lqvtd7vilxulyo5sihoi" alt="loading" />
        </div>
        <div className='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
    </div>
    <div className='CheckOutBtn'>
      <li id='CheckOutBtn'><Link to='/home'>← GO BACK</Link></li>
      <li id='CheckOutBtn'><Link to='/cart'>CHECK OUT →</Link></li>
    </div>
  </div>;
}

export default Restaurants1;
