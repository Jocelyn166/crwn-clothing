import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const { imageUrl, name, price} = product;
    return(
        <div className ='product-card-container'>
        <img src = {imageUrl} alt = {`${name}`}></img>
        <Button buttonType = 'inverted' >ADD TO CART</Button>
        <div className ='footer'>
            <span className ='name'>{name}</span>
            <span className ='price'>{price}</span>

        </div>

    </div>
    )
  


}
export default ProductCard;