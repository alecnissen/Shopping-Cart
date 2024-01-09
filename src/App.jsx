import './App.css'
import react from "react"
import Header from './Header'
import MainComponent from './MainComponent'
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import Footer from './Footer';
import ShoppingComponent from './ShoppingComponent';
import NotFound from './NotFound';
import HomePage from './HomePage';
import { Route, Routes } from 'react-router-dom'
import ProductPage from './ProductPage';
import About from './About';
import CheckoutComponent from './CheckoutComponent';


function App() { 

  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  // console.log(cartItems); 

  console.log(itemQuantity);

  const newCartItems = cartItems.length;

  return (
    <>

    <Routes> 
      <Route path='/' element={<HomePage newCartItems={newCartItems}></HomePage>}></Route>

      <Route path='/ShoppingComponent' element={<ShoppingComponent cartItems={cartItems} setCartItems={setCartItems} newCartItems={newCartItems} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} ></ShoppingComponent>}></Route>
      <Route path='/ProductPage/:id' element={<ProductPage newCartItems={newCartItems} setCartItems={setCartItems} cartItems={cartItems} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} ></ProductPage>}></Route>
      <Route path='/About' element={<About newCartItems={newCartItems}></About>}></Route>
      <Route path='/CheckoutComponent' element={<CheckoutComponent cartItems={cartItems} setCartItems={setCartItems} newCartItems={newCartItems} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}></CheckoutComponent>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  
    </>
  )
}

export default App
