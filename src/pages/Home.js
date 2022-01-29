import React from 'react';
import './Home.css'

function Home() {
  return <div className='MainHome'>
    <div className='HomeContainer'>
      <h1 className='HomeHeading'>Find The Best food For You</h1>
      <p className='HomeDesc'>stay healthy ,stay fit</p>
    </div>
    <div className='itemsContainer'>
      <div className='foodItem'>
        <img src="https://hackwithbadal.github.io/foodImages/img1.jpg" alt="loading" />
        <h3 className='HotelName'>Hotel royel plaza</h3>
        <p className='hotelDesc '>Veg , Non-Veg</p>
        <div className='obj'>
          <div>4</div>
          <div>35min</div>
          <div>100RS FOR TWO</div>
        </div>
        <p id='promoCode'>10% in master card</p>
        <button className='ItemBtn'>QUICK VIEW</button>
      </div>
      <div className='foodItem'>
        <img src="https://hackwithbadal.github.io/foodImages/img2.jpg" alt="loading" />
        <h3 className='HotelName'>vibha celibration</h3>
        <p className='hotelDesc '>Beverages , wine , bear</p>
        <div className='obj'>
          <div>4.7</div>
          <div>45min</div>
          <div>230RS FOR TWO</div>
        </div>
        <p id='promoCode'>40% in SBI credit card</p>
        <button className='ItemBtn'>QUICK VIEW</button>
      </div>
      <div className='foodItem'>
        <img src="https://hackwithbadal.github.io/foodImages/img3.jpg" alt="loading" />
        <h3 className='HotelName'>The Cafe</h3>
        <p className='hotelDesc '>Fast Food , pizza</p>
        <div className='obj'>
          <div>3.5</div>
          <div>55min</div>
          <div>160RS FOR TWO</div>
        </div>
        <p id='promoCode'>60% on bharat pe</p>

        <button className='ItemBtn'>QUICK VIEW</button>
      </div>
      <div className='foodItem'>
        <img src="https://hackwithbadal.github.io/foodImages/img4.jpg" alt="loading" />
        <h3 className='HotelName'>Shri Restaurant</h3>
        <p className='hotelDesc '>veg, indian food</p>
        <div className='obj'>
          <div>4.6</div>
          <div>25min</div>
          <div>300RS FOR TWO</div>
        </div>
        <p id='promoCode'>5% in fampay</p>

        <button className='ItemBtn'>QUICK VIEW</button>
      </div>
      <div className='foodItem'>
        <img src="https://hackwithbadal.github.io/foodImages/img5.jpg" alt="loading" />
        <h3 className='HotelName'>Rangoli Restaurant And Bar</h3>
        <p className='hotelDesc '>Fruits , Juice</p>
        <div className='obj'>
          <div>4.9</div>
          <div>58min</div>
          <div>700RS FOR TWO</div>
        </div>
        <p id='promoCode'>95% in golden card</p>

        <button className='ItemBtn'>QUICK VIEW</button>
      </div>
      <div className='foodItem'>
        <img src="https://hackwithbadal.github.io/foodImages/img6.jpg" alt="loading" />
        <h3 className='HotelName'>V.I.P Family Restaurant.</h3>
        <p className='hotelDesc '>Veg , Non-veg </p>
        <div className='obj'>
          <div>4.9</div>
          <div>35min</div>
          <div>440RS FOR TWO</div>
        </div>
        <p id='promoCode'>25%  on swiggy subscrition</p>

        <button className='ItemBtn'>QUICK VIEW</button>
      </div>
      <div className='foodItem'>
        <img src="https://hackwithbadal.github.io/foodImages/img7.jpg" alt="loading" />
        <h3 className='HotelName'>Indiya Oye Radisson Blu</h3>
        <p className='hotelDesc '>Fast Food , Bevarages</p>
        <div className='obj'>
          <div>4.5</div>
          <div>55min</div>
          <div>200RS FOR TWO</div>
        </div>
        <p id='promoCode'>20% in rupay credit card</p>

        <button className='ItemBtn'>QUICK VIEW</button>
      </div>
      <div className='foodItem'>
        <img src="https://hackwithbadal.github.io/foodImages/img8.jpg" alt="loading" />
        <h3 className='HotelName'>Spice Jain Restaurant</h3>
        <p className='hotelDesc '>vegen , juice ,breakfast</p>
        <div className='obj'>
          <div>4.6</div>
          <div>35min</div>
          <div>230RS FOR TWO</div>
        </div>
        <p id='promoCode'>100% off for VIPS</p>

        <button className='ItemBtn'>QUICK VIEW</button>
      </div>
    </div>
  </div>;
}
export default Home;