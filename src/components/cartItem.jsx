import '../style/cartItem.css'
import PropTypes from 'prop-types';
import starIcon from '../assets/star.svg'
import filledStarIcon from '../assets/filled_star.svg'
import { useState } from 'react';

function ShopStar({imgSrc})
{
    return (<>
        <img src={imgSrc} />
    </>)
    
}

ShopStar.propTypes = {
    imgSrc: PropTypes.string,
}

function CartComponent({product, passCartArray, updateCart, productsArray, updateProducts})
{
    let productIndex = passCartArray.findIndex((cartItem) => cartItem.id === product.id);    
    const [itemAmount, setItemAmount] = useState(passCartArray[productIndex].amount);

    let productRating = [];
    let starsCount = Math.round(product.rating.rate);
    for(let i = 0; i < starsCount; i++)
    {
        productRating.push(filledStarIcon)
    }
    for(let i = 0; i < (5-starsCount); i++)
    {
        productRating.push(starIcon)
    }

    let productRatingResult;
    if(productRating.length > 0)
    {
        productRatingResult = productRating.map((rating, index) => {
            return <ShopStar imgSrc={rating} key={index}></ShopStar>;
        });
    }

    return (<>
    <div className="cartItem">
        <div className="cartItemImage">
            <img src={product.image} />
        </div>
        <div className="cartItemContent">
            <div className="cartItemName">{product.title}</div>
            <div className="cartItemDescription">{product.description}</div>
            <div className="cartItemInformation">
                <div className="cartItemPrice">{product.price} EUR</div>
                <div className="cartItemCategory">{product.category}</div>
                <div className="cartItemRating">{productRatingResult}</div>                
            </div>
            <div className="cartItemActions">
                <div className="cartItemAmountDesc">Product Amount:</div>
                <div className="cartItemAmount">
                        <div className='cartItemModify' data-id={product.id} onClick={(e) => { 
                            if(itemAmount > 0) { 
                                setItemAmount(itemAmount - 1) 
                                let itemId = +(e.target.dataset.id);
                                if(passCartArray.findIndex((cartItem) => cartItem.id === itemId) > -1)
                                {
                                    let newArray = passCartArray.map((cartItem) => {
                                        if(cartItem.id === itemId)
                                        {
                                            cartItem.amount = (itemAmount - 1);
                                        }
                                        return cartItem;
                                    });
                                    updateCart(newArray);
                                }
                            } 
                        }}>-</div>
                        <input type="number" data-id={product.id} value={itemAmount} onChange={(e) => { 
                            setItemAmount(+(e.target.value))
                            let itemId = +(e.target.dataset.id);
                            if(passCartArray.findIndex((cartItem) => cartItem.id === itemId) > -1)
                            {
                                let newArray = passCartArray.map((cartItem) => {
                                    if(cartItem.id === itemId)
                                    {
                                        cartItem.amount = +(e.target.value);
                                    }
                                    return cartItem;
                                });
                                updateCart(newArray);
                            }
                        }} />
                        <div className='cartItemModify' data-id={product.id} onClick={(e) => {
                            if(itemAmount < 99999999) {
                                setItemAmount(itemAmount + 1) 
                                let itemId = +(e.target.dataset.id);
                                if(passCartArray.findIndex((cartItem) => cartItem.id === itemId) > -1)
                                {
                                    let newArray = passCartArray.map((cartItem) => {
                                        if(cartItem.id === itemId)
                                        {
                                            cartItem.amount = (itemAmount + 1);
                                        }
                                        return cartItem;
                                    });
                                    updateCart(newArray);
                                }
                            } 
                        }}>+</div>
                    </div>
                <div className="cartItemRemove">
                    <button type='button' data-id={product.id} onClick={(e) => {
                        let itemId = +(e.target.dataset.id);
                        let newArray = passCartArray.filter((cartItem) => cartItem.id !== itemId);
                        updateCart(newArray);
                        let newProductsArray = productsArray.filter((productItem) => productItem.id !== itemId);
                        updateProducts(newProductsArray);
                    }}>Remove from cart</button>
                </div>
                <div className="cartItemMore">
                    <button type='button'>About this product</button>
                </div>
            </div>
        </div>
    </div>
    </>)
}

CartComponent.propTypes = {
    product: PropTypes.object,
    passCartArray: PropTypes.array,
    updateCart: PropTypes.func,
    productsArray: PropTypes.array,
    updateProducts: PropTypes.func,
}

export default CartComponent