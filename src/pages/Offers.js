import { Helmet } from 'react-helmet';
import React from 'react';
import './offers.css'

function Offers() {

  return <div className='OfferContainer'>
    <div>
      <Helmet><title>Swiggy | Offers</title></Helmet>
    </div>
    <div className='OfferHeading'>
      <h1 className='headingOne'>Offers For You</h1>
      <p id='para'>Explore top deals and offers exclusively for you!</p>
    </div>
    <div className='availableOffer'>
      <h2>Available Coupons</h2>
    </div>
    <div className='cardOffer'>
      <div className='card'>
        <h2 id='OfferCode'>UUJIK744</h2>
        <h4>Get 20% discount using Kotak Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹125 on orders above ₹500</p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>DFHDU8D</h2>
        <h4>Get 30% discount using Citi Bank World Debit Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹600 on orders above ₹1000</p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>PSJSM85S</h2>
        <h4>Get 20% discount using RuPay Platinum Debit Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹100 on orders above ₹129
        </p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>DETD855</h2>
        <h4>Get 30% discount using IDFC FIRST Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹125 on orders above ₹299
        </p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>DOWUD855</h2>
        <h4>Get 20% discount using Kotak Bank CardsGet 20% discount using IndusInd Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹200 on orders above ₹600
        </p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>OFOWU55</h2>
        <h4>Get 30% discount using slice Visa card</h4>
        <p id='OfferPara'>Maximum discount up to ₹100 on orders above ₹249
        </p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>KDIWH55</h2>
        <h4>Get 40% discount using AU Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹100 on orders above ₹150</p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>OWUN652</h2>
        <h4>Get 30% discount using Uni Pay 1/3rd Card</h4>
        <p id='OfferPara'>Maximum discount up to ₹150 on orders above ₹299
        </p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>JDHS855</h2>
        <h4>Get 40% discount using Axis Bank Select Credit Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹200 on orders above ₹400
        </p>
        <button id='showOffer'>COPY CODE</button>
      </div>
    </div>
    <div className='availableOffer'>
      <h2>UnAvailable Coupons</h2>
    </div>
    <div className='cardOffer'>
      <div className='card'>
        <h2 id='OfferCode'>UTYDGJ52</h2>
        <h4>Get 15% discount using SBI Credit Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹100 on orders above ₹400
        </p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>APWJ855</h2>
        <h4>Get 15% discount using Standard Chartered Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹150 on orders above ₹600
        </p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>QIOEDJK8</h2>
        <h4>Get 20% discount using Federal Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹125 on orders above ₹500
        </p>
        <button id='showOffer'>COPY CODE</button>
      </div>
    </div>
    <div className='availableOffer'>
      <h2>Bank Offers</h2>
    </div>
    <div className='cardOffer'>
      <div className='card'>
        <h2 id='OfferCode'>POWIEDJ86</h2>
        <h4>Get 4% Cashback</h4>
        <p id='OfferPara'>Pay using Flipkart Axis Bank Credit Cards & get 4% cashback</p>
        <button id='showOffer'>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>POHS296W</h2>
        <h4>Get 10X Reward Points</h4>
        <p id='OfferPara'>Pay using YES Bank Consumer Credit Cards to avail 10X Reward Points on orders above INR 400/-</p>
        <button id='showOffer'>COPY CODE</button>
      </div>
    </div>

  </div>;
}

export default Offers;
