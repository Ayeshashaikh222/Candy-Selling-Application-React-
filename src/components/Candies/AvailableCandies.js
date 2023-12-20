import { useContext } from "react";
import { CartContext } from '../../App';

const AvailableCandies = ({candies}) => {

    const {addItemToCart} = useContext(CartContext);

   return (
    <div>
        <h2>Available Candies</h2>
        {candies.map((candy) => (
            <div key={candy.Name}>
             <p>{candy.name}</p>
             <p>{candy.description}</p>
             <p>${candy.price}</p>
             <button onClick = {() => addItemToCart(candy, 1)}>Buy One</button>
             <button onClick = {() => addItemToCart(candy, 2)}>Buy Twoe</button>
             <button onClick = {() => addItemToCart(candy, 3)}>Buy Three</button>
            </div>
        ))}
    </div>
   );
};

export default AvailableCandies;