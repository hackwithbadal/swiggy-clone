import React from 'react';
import './Help.css'

function Help() {
  const [show ,showitem]=React.useState(false)
  const [showOne ,showitemOne]=React.useState(false)
  const [showTwo ,showitemTwo]=React.useState(false)
  const [showTri ,showitemTri]=React.useState(false)
  const [showFour ,showitemFour]=React.useState(false)
  const [showFive ,showitemFive]=React.useState(false)
  return <div className='helpmenu'>
    <div className='helpme'>
      <h1 className='HelpHeading'>Help & Support</h1>
      <p className='desc'>Let's take a step ahead and help you better</p>
    </div>
    <div className='toogle'>
    <div className='toogleOne'>
      <h3 className='one' onClick={() =>showitem(!show)}>Why swiggy</h3>
      {
        show?<p>we provide you the best servive across the world </p>:null
      }
    </div>
    <div className='toogleOne'>
      <h3 className='one' onClick={() =>showitemOne(!showOne)}>What is Swiggy Customer Care Number?</h3>
      {
        showOne?<p>We value our customers time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

        Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>:null
      }
    </div>
    <div className='toogleOne'>
      <h3 className='one' onClick={() =>showitemTwo(!showTwo)}>Can I edit my order?</h3>
      {
        showTwo?<p>Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents</p>:null
      }
    </div>
    <div className='toogleOne'>
      <h3 className='one' onClick={() =>showitemTri(!showTri)}>Do you charge for delivery?</h3>
      {
        showTri?<p>Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. </p>:null
      }
    </div>
    <div className='toogleOne'>
      <h3 className='one' onClick={() =>showitemFour(!showFour)}>Do you accept Sodexo, Ticket Restaurant etc.?</h3>
      {
        showFour?<p>We do not accept Sodexo vouchers but we do accept Sodexo card. You can select the Sodexo card option while selecting payment options at the time of order</p>:null
      }
    </div>
    <div className='toogleOne'>
      <h3 className='one' onClick={() =>showitemFive(!showFive)}>Cancellations and Refunds</h3>
      {
        showFive?<p>a) As a general rule you shall not be entitled to cancel your order once placed. You may choose to cancel your order only within one-minute of the order being placed by you. However, subject to your previous cancellation history, Swiggy reserves the right to deny any refund to you pursuant to a cancellation initiated by you even if the same is within one-minute.  b)If you cancel your order after one minute of placing it, Swiggy shall have a right to charge you 100% of the order amount as the cancellation fee , with a right to either not to refund the order value in case your order is prepaid or recover from your subsequent order in case your order is postpaid, to compensate our restaurant/merchants and delivery partners. c)Swiggy reserves the right to charge you cancellation fee for the orders constrained to be cancelled by Swiggy for reasons not attributable to Swiggy, including but not limited to: i)in the event if the address provided by you is either wrong or falls outside the delivery zone; ii) failure to contact you by phone or email at the time of delivering the order booking; iii) failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or iv) unavailability of all the items ordered by you at the time of booking the order. However, in the unlikely event of an item on your order being unavailable, Swiggy will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund to an amount upto 100% of the order value. d)In case of cancellations for the reasons attributable to Swiggy or the restaurant partner or delivery partners, Swiggy shall not charge you any cancellation fee.</p>:null
      }
    </div>
    </div>
  </div>
}

export default Help;
