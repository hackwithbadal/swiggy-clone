import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeid } from '../actions/action';
import './Home.css'
function Home() {
  const dispatch = useDispatch();
  const [raw, setraw] = useState([]);
  const getInfo = async () => {
    const response = await fetch('https://foodieone.herokuapp.com/cities');
    setraw(await response.json());
  }
  useEffect(() => {
    getInfo();
  }, []);
  return <div className='MainHome'>
    <div>
      <Helmet><title>Swiggy | Home</title></Helmet>
    </div>
    <div className='HomeContainer'>
      <h1 className='HomeHeading'>Find The Best food For You</h1>
      <p className='HomeDesc'>stay healthy ,stay fit</p>
    </div>
    <div className='itemsContainer'>
      {
        raw.map(dar => {
          return ( 

            <div className='foodItem'>
              <h6>{dar._id}</h6>
              <img src={dar.restaurants[0].imgurl} alt="loading" />
              <h3 className='HotelName'>{dar.restaurants[0].title}</h3>
              <p className='hotelDesc '>{dar.restaurants[0].rest_desc}</p>
              <div className='obj'>
                <div>{dar.restaurants[0].ratings}</div>
                <div>{dar.restaurants[0].food[0].food_time}</div>
                <div>RS {dar.restaurants[0].food[0].food_price} FOR ONE</div>
              </div>
              <p id='promoCode'>{dar.restaurants[0].food[0].offer}</p>
              {/* <li id='ItemBtn'><Link to="/Restaurants1">QUICK VIEW</Link></li> */}
              <Link to="/Restaurants1"><button id='HomeButton' key={dar._id} onClick={() => dispatch(changeid(dar))}>QUICK VIEW</button></Link>
              {/* <a href='/Restaurants1' id='ItemBtn'><button>Click here</button></a> */}
            </div>)
        })
      }

    </div>
  </div>;
};
export default Home;
