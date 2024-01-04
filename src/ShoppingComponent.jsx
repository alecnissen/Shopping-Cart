import react from "react" 
import Header from "./Header"
import Footer from "./Footer"
import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Outlet, useSearchParams } from "react-router-dom"
// import Checkout from "./CheckoutComponent"
import CheckoutComponent from "./CheckoutComponent"


export default function ShoppingComponent() { 

    const [data, setData] = useState([]);

    const [cartCount, setCartCount] = useState([]);

    const newCartCount = cartCount.length;

    console.log(cartCount);

    useEffect(() => { 
  const getData = async () => { 
    try { 
      const response = await axios.get('https://fakestoreapi.com/products')
      console.log(response.data);
      setData(response.data);
    } catch (error) { 
      console.log(error);
    }
  }
  getData();
}, [])

    return ( 
        <> 
        <Header newCartCount={newCartCount}></Header>
        <h1 className="shopping-component-header-text">Our Collection</h1>

        <div className="shopping-component-products-container"> 
            {data.map((item) => { 
                 return ( 
                    <div className="shopping-component-card-container" key={item.id}> 

                    <Card style={{ width: '18rem' }}>
                      <Link to={`/ProductPage/${item.id}`}> 
                    <Card.Img variant="top" src={item.image} style={{ width: '10em' }} className="shopping-component-card-img" />
                    </Link>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <p>Select Quanity</p>
                      <input type="number" min="0" max="10"></input>
                      <p>${item.price}</p>
                      <Button variant="primary" onClick={(e) => { 
                        
                        setCartCount([...cartCount, item]);
                        console.log(cartCount);

                      

                        // <CheckoutComponent cartCount={cartCount}></CheckoutComponent>

                        CheckoutComponent(cartCount);

                        // how do I pass this data, to header? I cannot pass it as props 
                        // I have tried calling a function, 

                      }}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                    </div>
                )
            })}
        </div>

        <Footer></Footer>
        </>
    )
}