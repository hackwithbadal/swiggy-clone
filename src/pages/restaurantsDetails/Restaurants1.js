import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Helmet } from 'react-helmet';
import './Restaurants.css'

function Restaurants1() {
  return <div className='Restaurabts1Details'>
    <div>
      <Helmet><title>Swiggy | Hotel royel plaza</title></Helmet>
    </div>
    <div className='backBtn'><li className='backbutton'><Link to="/home"><IoMdArrowRoundBack /></Link></li></div>
    <div className='restaurantHeading'>
      <div className='ImgHeading'>
        <img src="https://hackwithbadal.github.io/foodImages/img1.jpg" alt="loading" />
      </div>
      <div className="restaurantInfo">
        <h3 className='HotelNameInfo'>Hotel royel plaza</h3>
        <p className='hotelDescInfo '>Veg , Non-Veg</p>
        <div className='obj'>
          <div id='Hotelrating'>
            <h3>4.1</h3>
            <p>Rating by custumers</p>
          </div>
          <div id='FoodTime'>
            <h3>35 min</h3>
            <p>Delivary time</p>
          </div>
          <div id='Charges'>
            <h3>100rs</h3>
            <p>COST OF TWO</p>
          </div>
        </div>
      </div>
      <div className='RestaurantsOffer'>
        <p id='promoCodeInfo'><MdOutlineLocalOffer />20% off up to ₹125 | Use FEDERAL125 Above ₹500</p>
        <p id='promoCodeInfo'><MdOutlineLocalOffer />20% off up to ₹200 | Use INDUSIND20 Above ₹600</p>
      </div>
    </div>
    <div className='AvilableFood'>
      <div>
        <h1>Avilable Food</h1><hr />
      </div>
      <div id='item1' >
        <div className='itemName' id='itemnames'>
          <h4>Veg Fried Rice</h4>
          <p> ₨ 90</p>
        </div>
        <div className='ItemImage' id='ItemImage'>
          <img src="https://hackwithbadal.github.io/foodImages/food1.jpg" alt="loading" />
        </div>
        <div className='AddToCart' id='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
      <div id='item2' >
        <div className='itemName'>
          <h4>Vegetable Spring Roll</h4>
          <p> ₨ 315</p>
        </div>
        <div className='ItemImage'>
          <img src="https://hackwithbadal.github.io/foodImages/food2.jpg" alt="loading" />
        </div>
        <div className='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
      <div id='item3' >
        <div className='itemName'>
          <h4>Chicken Spring Roll</h4>
          <p> ₨ 335</p>
        </div>
        <div className='ItemImage'>
          <img src="https://hackwithbadal.github.io/foodImages/food3.jpg" alt="loading" />
        </div>
        <div className='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
      <div id='item4' >
        <div className='itemName'>
          <h4>Kung Pao Chicken</h4>
          <p> ₨ 515</p>
        </div>
        <div className='ItemImage'>
          <img src="https://hackwithbadal.github.io/foodImages/food4.jpg" alt="loading" />
        </div>
        <div className='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
      <div id='item5' >
        <div className='itemName'>
          <h4>Chilli Vegetable</h4>
          <p> ₨255</p>
        </div>
        <div className='ItemImage'>
          <img src="https://hackwithbadal.github.io/foodImages/food5.jpg" alt="loading" />
        </div>
        <div className='AddToCart'>
          <button id='btn'>ADD TO CART</button>
        </div>
      </div>
      <div id='item6' >
        <div className='itemName'>
          <h4>Special Fried Chilli Chicken</h4>
          <p> ₨ 555</p>
        </div>
        <div className='ItemImage'>
          <img src="https://hackwithbadal.github.io/foodImages/food6.jpg" alt="loading" />
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
