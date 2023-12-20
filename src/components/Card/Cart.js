import { useContext } from "react";
import { CartContext } from '../../App';

const Cart = () => {
    const {cartItems, removeItemFromCart} = useContext(CartContext)

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.map((item) => {
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.qantity}</p>
                    <button onClick={()=> removeItemFromCart(item.id)}>Remove</button>
                </div>
            })}
            <button>Cancel</button>
            <button>Order</button>
        </div>
    );


}

export default Cart;