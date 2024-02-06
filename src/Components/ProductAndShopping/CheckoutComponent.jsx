import react from 'react';
import ShoppingComponent from './ShoppingComponent';
import { useEffect, useState } from 'react';
import HomePage from '../HomePage/HomePage';
import Header from '../HomePage/Header';
// import { useEffect } from "react";
import crypto from 'crypto';
import PropTypes from 'prop-types';
import backToShoppingArrow from "../../../Images/checkout-component-back-arrow.png"

export default function CheckoutComponent({
  cartItems,
  setCartItems,
  numberOfCartItems,
  itemQuantity,
  setItemQuantity,
  isOpen,
  setIsOpen,
}) {
  let total = 0;

  function handleDelete(item) {
    setCartItems(cartItems.filter((selectedItem) => selectedItem.title !== item.title));
  }

  function changeQuantityIncrement(item) {
    setItemQuantity(++item.quantity);
  }

  function changeQuantityDecrement(item) {
    setItemQuantity(--item.quantity);
  }

  return (
    <>
      <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>
      

      <div className='checkout-component-wrapper'> 
        


        <div className='checkout-component-container'> 

          <div className='checkout-component-backtoshop-checkout-title-container'> 

            <div className='container-for-img-and-title'>
            <img src={backToShoppingArrow}></img>
            <h6>Back to shopping</h6>
            </div>

            <h3>Checkout</h3>

          </div> 


          <div className='contact-info-container'>

          <h5>Contact Information</h5>

          <div className='first-last-name-container'> 
            <div className='input-label-pair-first-name'> 
              <label>First Name:</label>
              <input type="text"></input>
            </div>

            <div className='input-label-pair-last-name'> 
            <label>Last Name:</label>
            <input type="text"></input>
            </div>


          
          </div>


          <div className='phone-email-container'> 
          <div className='input-label-pair-first-email'> 
              <label>Email:</label>
              <input type="text"></input>
            </div>

            <div className='input-label-pair-last-phone'> 
            <label>Phone:</label>
            <input type="text"></input>
            </div>
          
          </div>


          </div>


      <div className='delivery-container'> 
      <h5>Where should we deliever your order?</h5>
      <div className='input-label-pair-address'> 
              <label>Address:</label>
              <input type="text"></input>
            </div>


        <div className='input-label-pair-delivery-instructions'>
          <label>Delivery Instructions</label>
          <input type="text"></input>
        </div>
      
      </div>



      <div className='receive-order-container'> 
        <h5>When would you like to receive your order?</h5>

        <div className='input-label-pair-receive-asap'>
        <input type="radio"></input>
        <label>ASAP</label>
        </div>

        <div className='input-label-pair-receive-scheduled'> 
        <input type="radio"></input>
        <label>Scheduled Delivery</label>
        
        </div>
      
      
      
      </div>

      <div className='payment-method-container'> 
      <h5>Payment Method</h5>

      <div className='input-label-pair-credit-card'> 
      <input type="radio"></input>
      <label>Credit Card</label>

      </div>



      <div className='input-label-pair-cash-on-delivery'> 
      <input type="radio"></input>
      <label>Cash on Delivery</label>
      </div>


      <div className='input-label-pair-apple-google-pay'> 
      <input type="radio"></input>
      <label>Apple/Google Pay</label>

      </div>

      <div className='place-order-btn-container'>
      <button>Place Order</button>
      </div>



      </div>



        </div>

















      </div>



    </>
  );
}

CheckoutComponent.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
  numberOfCartItems: PropTypes.number,
  itemQuantity: PropTypes.array,
  setItemQuantity: PropTypes.func,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};











// export default function CheckoutComponent({
//   cartItems,
//   setCartItems,
//   numberOfCartItems,
//   itemQuantity,
//   setItemQuantity,
//   isOpen,
//   setIsOpen,
// }) {
//   let total = 0;

//   function handleDelete(item) {
//     setCartItems(cartItems.filter((selectedItem) => selectedItem.title !== item.title));
//   }

//   function changeQuantityIncrement(item) {
//     setItemQuantity(++item.quantity);
//   }

//   function changeQuantityDecrement(item) {
//     setItemQuantity(--item.quantity);
//   }

//   return (
//     <>
//       <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>
//       {cartItems.map((item) => {
//         let productPrice = item.price * item.quantity;
//         total += productPrice;

//         return (
//           <div key={item.id}>
//             <h5>{item.title}</h5>
//             <img src={item.image} alt="view of the selected product" />
//             <h5>{item.quantity}</h5>
//             <h5>${item.price}</h5>
//             <button
//               onClick={() => {
//                 console.log(itemQuantity);
//                 changeQuantityIncrement(item);
//               }}
//             >
//               +
//             </button>
//             <input type="number" min="0" max="10" placeholder="0" value={item.quantity} onChange={() => {}}></input>
//             <button
//               onClick={() => {
//                 changeQuantityDecrement(item);
//               }}
//             >
//               -
//             </button>
//             <button
//               onClick={() => {
//                 handleDelete(item);
//               }}
//             >
//               Remove
//             </button>
//             <p>product price</p>
//             <h1>{productPrice}</h1>
//           </div>
//         );
//       })}
//       <p>total price</p>
//       <h1>{total}</h1>
//     </>
//   );
// }

































// old checkout component
// export default function CheckoutComponent( { cartItems, setCartItems, newCartItems, itemQuantity, setItemQuantity, isOpen, setIsOpen }) {
//     let total = 0;
//     // let productPrice = 0

//     function handleDelete(item) {
//          setCartItems(cartItems.filter(selectedItem => selectedItem.title !== item.title ));
//     }

//     function changeQuantityIncrement(item) {
//         setItemQuantity(++item.quantity);
//     }

//     function changeQuantityDecrement(item) {
//         setItemQuantity(--item.quantity);
//     }

//     return (
//         <>
//         <Header newCartItems={newCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>
//         {cartItems.map((item) => {
//             <div key={item.id}>   // added div around all
//             let productPrice = 0
//             productPrice += item.price * item.quantity
//             total += productPrice

//             return (
//                 <>
//             <h5>{item.title}</h5>
//             <img src={item.image} />
//             <h5>{item.quantity}</h5>
//             <h5>${item.price}</h5>
//             <button onClick={((e) => {
//                 console.log(itemQuantity);
//                 changeQuantityIncrement(item);

//             })}>+</button>
//             <input type="number" min="0" max="10" placeholder="0" value={item.quantity} onChange={((e) => {

//             })}>
//             </input>
//             <button onClick={((e) => {
//                 changeQuantityDecrement(item);
//             })}>-</button>

//             <button onClick={((e) => {
//                 handleDelete(item)
//             })}>Remove</button>
//             <p>product price</p>
//             <h1>{productPrice}</h1>

//             </>
//             )
//             </div>  // closing tag here

//         })}
//         <p>total price</p>
//         {<h1>{total}</h1>}
//         </>
//     )
// }
