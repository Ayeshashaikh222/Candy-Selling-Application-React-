import './App.css';
// import ReactDOM from 'react-dom';
import SellerForm from './components/Candies/SellerForm';
import AvailableCandies from './components/Candies/AvailableCandies';
import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import Cart from './components/Card/Cart';

const CartContext = React.createContext();

function App() {

  const [candies, setCandies] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item, quantity) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id == item.id);

    if (existingItem) {
      const updateCart = cartItems.map((cartItem) =>
      cartItem.id == item.id ? {...cartItem, quantity: cartItem.quantity + quantity} : cartItem
      );
      setCartItems(updateCart);
    } else {
      setCartItems([...cartItems, {...item, quantity}]);
    }
  };

  const removeItemFromCart = (id) => {
    const updateItems = cartItems.filter((item) => 
    item.id !== id);
    setCartItems(updateItems);
  };

const addCandy = (candy) => {
  setCandies([...candies, candy]);
};


  return (
    <CartContext.Provider value={{cartItems, addItemToCart, removeItemFromCart}}>
      <div>
        <SellerForm onAddCandy={addCandy}/>
        <AvailableCandies candies={candies}/>
        <Cart />
      </div>
    </CartContext.Provider>
  );
};

export default App;
