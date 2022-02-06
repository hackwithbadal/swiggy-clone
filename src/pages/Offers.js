import { Helmet } from 'react-helmet';
import React from 'react';
import './offers.css'

function changeWord(){
  document.getElementById('btn1').innerText = "COPIED"
};
function changeWord1(){
  document.getElementById('btn2').innerText = "COPIED"
};
function changeWord2(){
  document.getElementById('btn3').innerText = "COPIED"
};
function changeWord3(){
  document.getElementById('btn4').innerText = "COPIED"
};
function changeWord4(){
  document.getElementById('btn5').innerText = "COPIED"
};
function changeWord5(){
  document.getElementById('btn6').innerText = "COPIED"
};
function changeWord6(){
  document.getElementById('btn7').innerText = "COPIED"
};
function changeWord7(){
  document.getElementById('btn8').innerText = "COPIED"
};
function changeWord8(){
  document.getElementById('btn9').innerText = "COPIED"
};
function changeWord9(){
  document.getElementById('btn10').innerText = "COPIED"
};
function changeWord10(){
  document.getElementById('btn11').innerText = "COPIED"
};
function changeWord11(){
  document.getElementById('btn12').innerText = "COPIED"
};
function changeWord12(){
  document.getElementById('btn13').innerText = "COPIED"
};
function changeWord13(){
  document.getElementById('btn14').innerText = "COPIED"
};
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
        <button className='ShowOffer' id='btn1' onClick={() =>  navigator.clipboard.writeText('UUJIK744') && changeWord()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>DFHDU8D</h2>
        <h4>Get 30% discount using Citi Bank World Debit Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹600 on orders above ₹1000</p>
        <button className='ShowOffer' id='btn2' onClick={() =>  navigator.clipboard.writeText('DFHDU8D') && changeWord1()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>PSJSM85S</h2>
        <h4>Get 20% discount using RuPay Platinum Debit Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹100 on orders above ₹129
        </p>
        <button className='ShowOffer' id='btn3' onClick={() =>  navigator.clipboard.writeText('PSJSM85S') && changeWord2()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>DETD855</h2>
        <h4>Get 30% discount using IDFC FIRST Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹125 on orders above ₹299
        </p>
        <button className='ShowOffer' id='btn4' onClick={() =>  navigator.clipboard.writeText('DETD855') && changeWord3()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>DOWUD855</h2>
        <h4>Get 20% discount using Kotak Bank CardsGet 20% discount using IndusInd Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹200 on orders above ₹600
        </p>
        <button className='ShowOffer' id='btn5' onClick={() =>  navigator.clipboard.writeText('DOWUD855')  && changeWord4()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>OFOWU55</h2>
        <h4>Get 30% discount using slice Visa card</h4>
        <p id='OfferPara'>Maximum discount up to ₹100 on orders above ₹249
        </p>
        <button className='ShowOffer' id='btn6' onClick={() =>  navigator.clipboard.writeText('OFOWU55')  && changeWord5()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>KDIWH55</h2>
        <h4>Get 40% discount using AU Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹100 on orders above ₹150</p>
        <button className='ShowOffer' id='btn7' onClick={() =>  navigator.clipboard.writeText('KDIWH55')  && changeWord6()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>OWUN652</h2>
        <h4>Get 30% discount using Uni Pay 1/3rd Card</h4>
        <p id='OfferPara'>Maximum discount up to ₹150 on orders above ₹299
        </p>
        <button className='ShowOffer' id='btn8' onClick={() =>  navigator.clipboard.writeText('OWUN652')  && changeWord7()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>JDHS855</h2>
        <h4>Get 40% discount using Axis Bank Select Credit Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹200 on orders above ₹400
        </p>
        <button className='ShowOffer' id='btn9' onClick={() =>  navigator.clipboard.writeText('JDHS855')  && changeWord8()}>COPY CODE</button>
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
        <button className='ShowOffer' id='btn10' onClick={() =>  navigator.clipboard.writeText('UTYDGJ52')  && changeWord9()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>APWJ855</h2>
        <h4>Get 15% discount using Standard Chartered Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹150 on orders above ₹600
        </p>
        <button className='ShowOffer' id='btn11' onClick={() =>  navigator.clipboard.writeText('APWJ855')  && changeWord10()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>QIOEDJK8</h2>
        <h4>Get 20% discount using Federal Bank Cards</h4>
        <p id='OfferPara'>Maximum discount up to ₹125 on orders above ₹500
        </p>
        <button className='ShowOffer' id='btn12' onClick={() =>  navigator.clipboard.writeText('QIOEDJK8')  && changeWord11()}>COPY CODE</button>
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
        <button className='ShowOffer' id='btn13' onClick={() =>  navigator.clipboard.writeText('POWIEDJ86')  && changeWord12()}>COPY CODE</button>
      </div>
      <div className='card'>
        <h2 id='OfferCode'>POHS296W</h2>
        <h4>Get 10X Reward Points</h4>
        <p id='OfferPara'>Pay using YES Bank Consumer Credit Cards to avail 10X Reward Points on orders above INR 400/-</p>
        <button className='ShowOffer' id='btn14' onClick={() =>  navigator.clipboard.writeText('POHS296W')  && changeWord13()}>COPY CODE</button>
      </div>
    </div>

  </div>;
}

export default Offers;
