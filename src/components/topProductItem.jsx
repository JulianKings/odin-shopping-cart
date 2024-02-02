import { Link } from 'react-router-dom';
import '../style/topProductItem.css'
import PropTypes from 'prop-types';

function TopProductItem({product}) {

    let productTitle = product.title;

    if(productTitle.length > 28)
    {
        productTitle = productTitle.substring(0, 28) + "...";
    }


    return (<>
        <div className='productItem'>
            <div className='productItemImage'>
                <img src={product.image} />
            </div>
            <div className='productItemShop'><Link to='/shop'><button type='button'>Visit the shop!</button></Link></div>
            <div className='productItemName'>{productTitle}</div>
        </div>
    </>)
}

TopProductItem.propTypes = {
    product: PropTypes.object,
}

export default TopProductItem