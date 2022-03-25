import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';
import './checkout-item.styles.scss';

 const CheckOutItem = ({cartItem}) => {
    const { addItemToCart, removeItemFromCart, removeItemFromCheckout } = useContext(CartContext);
    const {imageUrl,price,name, quantity} = cartItem;

    const addItemToCartHandler = ()=> addItemToCart(cartItem);
    const removeItemFromCartHandler = ()=> removeItemFromCart(cartItem);
    const removeItemFromCheckoutHandler = ()=> removeItemFromCheckout(cartItem);
    
     return( 
        <div className = 'checkout-item-container'>
            <div className = 'image-container'>
                <img src = {imageUrl} alt = {`${name}`}/>
            </div>
            <span className = 'name'>{name}</span> 
            <span className = 'quantity'>
                <div className = 'arrow' onClick={removeItemFromCartHandler}>
                    &#10094;
                </div>
                <span className = 'value'> { quantity}</span> 
                <div className = 'arrow'  onClick={addItemToCartHandler}>
                    &#10095;
                </div>

            </span>
            <span className = 'price'>{price}</span>
            <div className = 'remove-button' onClick = {removeItemFromCheckoutHandler}>&#10005;</div>

        </div>
         
     );
 };
 export default CheckOutItem;