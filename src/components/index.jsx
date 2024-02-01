import '../style/index.css'
import { Link } from 'react-router-dom'

function Index()
{
    return (<>
        <div className='homeContent'>
            <h1>Welcome to PlaceHolder Shop!</h1>
            <p>This is the most amazing shop you have found just yet! We have the latest trends in clothing, electronics and anything you can realistically need.</p>
            <p>We even have <b>furniture</b>! Yes! We have added a bunch of furniture to our shop as part of our special 2024 Winter Campaign, do not be afraid and check it out.</p>
            <p>What about <b>SALES</b>? We have the hottest sales, from 20% to 90% on our products, just check out our <Link to='/shop'>Shop</Link> and be sure you will find something of use for you. Do you need to be warm during winter? We have the coziest coats! Do you need more space on your computer? We have the best HDD and SSD of the market! <Link to='/shop'>Just check them out</Link>!</p>
            <p>We also deliver <b>worlwide</b>! And <b>our nationwide shipping is free</b>, what else could you expect from the best shop in the last decade, PlaceHolder Shop!</p>
        </div>
        </>)
}

export default Index