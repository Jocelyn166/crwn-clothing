import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';
import { CheckoutItemContainer,ImageContainer,BaseSpan,Quantity,Value,Arrow,RemoveButton } from './checkout-item.styles';

 const CheckOutItem = ({cartItem}) => {
    const { addItemToCart, removeItemFromCart, removeItemFromCheckout } = useContext(CartContext);
    const {imageUrl,price,name, quantity} = cartItem;

    const addItemToCartHandler = ()=> addItemToCart(cartItem);
    const removeItemFromCartHandler = ()=> removeItemFromCart(cartItem);
    const removeItemFromCheckoutHandler = ()=> removeItemFromCheckout(cartItem);
    
     return( 
        <CheckoutItemContainer>
            <ImageContainer>
                <img src = {imageUrl} alt = {`${name}`}/>
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan> 
            <Quantity>
                <Arrow onClick={removeItemFromCartHandler}>
                    &#10094;
                </Arrow>
                <Value> { quantity}</Value> 
                <Arrow onClick={addItemToCartHandler}>
                    &#10095;
                </Arrow>

            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick = {removeItemFromCheckoutHandler}>&#10005;</RemoveButton>

        </CheckoutItemContainer>
         
     );
 };
 export default CheckOutItem;