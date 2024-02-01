import '../style/shopItem.css'
import PropTypes from 'prop-types';
import starIcon from '../assets/star.svg'
import filledStarIcon from '../assets/filled_star.svg'
import { useState } from 'react';
import { CartItem } from '../scripts/data/cartItem';

function ShopStar({imgSrc})
{
    return (<>
        <img src={imgSrc} />
    </>)
    
}

ShopStar.propTypes = {
    imgSrc: PropTypes.string,
}

function ShopItem({product, passCartArray, updateCart})
{
    const [itemAmount, setItemAmount] = useState(1);
    let productDescription = product.description;

    if(productDescription.length > 80)
    {
        productDescription = productDescription.substring(0, 80) + "...";
    }

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
    <div className="shopItem">
        <div className="shopItemImage">
            <img src={product.image} />
        </div>
        <div className="shopItemContent">
            <div className="shopItemName">{product.title}</div>
            <div className="shopItemDescription">{productDescription}</div>
            <div className="shopItemInformation">
                <div className="shopItemPrice">{product.price} EUR</div>
                <div className="shopItemCategory">{product.category}</div>
                <div className="shopItemRating">{productRatingResult}</div>                
            </div>
            <div className="shopItemActions">
                <div className="shopItemAmount">
                        <div className='shopItemModify' onClick={() => { 
                            if(itemAmount > 0) { 
                                setItemAmount(itemAmount - 1) 
                            } 
                        }}>-</div>
                        <input type="number" value={itemAmount} onChange={(e) => { setItemAmount(+(e.target.value)) }} />
                        <div className='shopItemModify' onClick={() => {
                            if(itemAmount < 99999999) {
                                 setItemAmount(itemAmount + 1) 
                            } 
                        }}>+</div>
                    </div>
                <div className="shopItemAdd">
                    <button type='button' data-id={product.id} onClick={(e) => {
                        let itemId = +(e.target.dataset.id);
                        if(passCartArray.findIndex((cartItem) => cartItem.id === itemId) > -1)
                        {
                            let newArray = passCartArray.map((cartItem) => {
                                if(cartItem.id === itemId)
                                {
                                    cartItem.amount += itemAmount;
                                }
                                return cartItem;
                            });
                            updateCart(newArray);
                        } else {
                            let newItem = new CartItem(itemId, itemAmount);
                            updateCart(passCartArray.concat([newItem]));
                        }
                    }}>Add to cart</button>
                </div>
                <div className="shopItemMore">
                    <button type='button'>About this product</button>
                </div>
            </div>
        </div>
    </div>
    </>)
}

ShopItem.propTypes = {
    product: PropTypes.object,
    passCartArray: PropTypes.array,
    updateCart: PropTypes.func,
}

export default ShopItem