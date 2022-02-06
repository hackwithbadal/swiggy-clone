import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Helmet } from 'react-helmet';
import { useAlert } from 'react-alert'
import { useSelector } from 'react-redux';
import './Restaurants.css'

function Restaurants1() {
  const id = useSelector(state => state.id);
  const alert = useAlert()
  function CallAlert() {
    alert.show("ADDED ITEM IN CART !!!")
  };


  return <div className='Restaurabts1Details'>
    <div>
      <Helmet><title>{id.restaurants[0].title} |Swiggy</title></Helmet>
    </div>
    <div className='backBtn'><li className='backbutton'><Link to="/home"><IoMdArrowRoundBack /></Link></li></div>
    <div className='restaurantHeading'>
      <div className='ImgHeading'>
        <img src={id.restaurants[0].imgurl} alt="loading" />
      </div>
      <div className="restaurantInfo">
        <h3 className='HotelNameInfo'>{id.restaurants[0].title}</h3>
        <p className='hotelDescInfo '>{id.restaurants[0].rest_desc}</p>
        <div className='obj'>
          <div id='Hotelrating'>
            <h3>{id.restaurants[0].ratings}</h3>
            <p>Rating by custumers</p>
          </div>
          <div id='FoodTime'>
            <h3>{id.restaurants[0].food[0].food_time}</h3>
            <p>Delivary time</p>
          </div>
          <div id='Charges'>
            <h3>{id.restaurants[0].food[0].food_price}</h3>
            <p>COST OF ONE</p>
          </div>
        </div>
      </div>
      <div className='RestaurantsOffer'>
        <p id='promoCodeInfo'><MdOutlineLocalOffer />{id.restaurants[0].food[0].offer}</p>
      </div>
    </div>
    <div className='AvilableFood'>
      <div>
        <h1>Avilable Food</h1><hr />
      </div>
    </div>
    <div className='itemsContainerLite'>
      <div id='item1' >
        <div className='itemName' id='itemnames'>
          <h4>{id.restaurants[0].food[0].food_name}</h4>
          <p> ₨ {id.restaurants[0].food[0].food_price}</p>
        </div>
        <div className='ItemImage' id='ItemImage'>
          <img src={id.restaurants[0].food[0].food_imgurl} alt="loading" />
        </div>
        <div className='AddToCart' id='AddToCart'>
          <button id='btn' onClick={CallAlert}>ADD TO CART</button>
        </div>
      </div>
      <div id='item2' >
        <div className='itemName' id='itemnames'>
          <h4>{id.restaurants[0].food[1].food_name}</h4>
          <p> ₨ {id.restaurants[0].food[1].food_price}</p>
        </div>
        <div className='ItemImage' id='ItemImage'>
          <img src={id.restaurants[0].food[1].food_imgurl} alt="loading" />
        </div>
        <div className='AddToCart' id='AddToCart'>
          <button id='btn' onClick={CallAlert}>ADD TO CART</button>
        </div>
      </div>
      <div id='item3' >
        <div className='itemName' id='itemnames'>
          <h4>{id.restaurants[0].food[2].food_name}</h4>
          <p> ₨ {id.restaurants[0].food[2].food_price}</p>
        </div>
        <div className='ItemImage' id='ItemImage'>
          <img src={id.restaurants[0].food[2].food_imgurl} alt="loading" />
        </div>
        <div className='AddToCart' id='AddToCart'>
          <button id='btn' onClick={CallAlert}>ADD TO CART</button>
        </div>
      </div>
      <div id='item4' >
        <div className='itemName' id='itemnames'>
          <h4>{id.restaurants[0].food[3].food_name}</h4>
          <p> ₨ {id.restaurants[0].food[3].food_price}</p>
        </div>
        <div className='ItemImage' id='ItemImage'>
          <img src={id.restaurants[0].food[3].food_imgurl} alt="loading" />
        </div>
        <div className='AddToCart' id='AddToCart'>
          <button id='btn' onClick={CallAlert}>ADD TO CART</button>
        </div>
      </div>
      <div id='item5' >
        <div className='itemName' id='itemnames'>
          <h4>{id.restaurants[0].food[4].food_name}</h4>
          <p> ₨ {id.restaurants[0].food[4].food_price}</p>
        </div>
        <div className='ItemImage' id='ItemImage'>
          <img src={id.restaurants[0].food[4].food_imgurl} alt="loading" />
        </div>
        <div className='AddToCart' id='AddToCart'>
          <button id='btn' onClick={CallAlert}>ADD TO CART</button>
        </div>
      </div>
      <div id='item6' >
        <div className='itemName' id='itemnames'>
          <h4>{id.restaurants[0].food[5].food_name}</h4>
          <p> ₨ {id.restaurants[0].food[5].food_price}</p>
        </div>
        <div className='ItemImage' id='ItemImage'>
          <img src={id.restaurants[0].food[5].food_imgurl} alt="loading" />
        </div>
        <div className='AddToCart' id='AddToCart'>
          <button id='btn' onClick={CallAlert}>ADD TO CART</button>
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

{/* {
        id.map(khof => {
          return (
            <div id='item1' >
              <div className='itemName' id='itemnames'>
                <h4>Veg Fried Rice</h4>
                <p> ₨ 90</p>
              </div>
              <div className='ItemImage' id='ItemImage'>
                <img src="https://hackwithbadal.github.io/foodImages/food1.jpg" alt="loading" />
              </div>
              <div className='AddToCart' id='AddToCart'>
                <button id='btn' onClick={CallAlert}>ADD TO CART</button>
              </div>
            </div>
          )
        })
      } */}