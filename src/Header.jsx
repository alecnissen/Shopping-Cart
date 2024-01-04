import react from "react"
import Button from 'react-bootstrap/Button';
import searchIcon from "../Icons/search-svgrepo-com.svg"
import cartIcon from "../Icons/cart-shopping-svgrepo-com.svg"
import { Link, Outlet, useSearchParams } from "react-router-dom"
import PropTypes from "prop-types"

export default function Header( {newCartCount} ) { 
    console.log(typeof newCartCount);
    return ( 
    <> 
    <div className="header-style-container">

    <h1>Shopping Cart</h1>
    
    <nav className="header-navbar-styles"> 
    <Button variant="primary"><Link to="/">Home</Link></Button>
    <Button variant="primary"><Link to="/ShoppingComponent">Shop Now</Link></Button>
    <Button variant="primary"><Link to="/About">About Us</Link></Button>
    </nav> 

    <br></br>

<div className="header-icon-container"> 
<img src={searchIcon} className="search-icon-header"></img>
<div className="badge-icon-for-shopping-cart">{newCartCount}</div>
<img src={cartIcon} className="cart-icon-header"></img>

</div>
   
</div>
</>
) 
} 

Header.propTypes = { 
    newCartCount: PropTypes.number
}