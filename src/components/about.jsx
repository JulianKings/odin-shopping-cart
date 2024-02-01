/* eslint-disable react/no-unescaped-entities */
import '../style/about.css'

function About()
{
    return (<>
    <div className='aboutContent'>
        <h1>About me</h1>
        <p>This is a shopping cart mockup site to practice with react, routing and fetching data (I use the <a href='https://fakestoreapi.com/'>FakeStore API</a> to load my products), state and to hone my skills. There will be at some point an update to this sate (or a new site on my <a href='https://github.com/JulianKings'>GitHub</a>) so the payment section works (as a mockup) and you can see each product's page. Also giving some search functionality to the Shop page is on my plans. </p>
        <p>I tried to be somewhat close to a real product, but also keep practicing so I avoided Tailwind, Bootstrap or any other css helper to build the site. I also tried to use as less external tools as possible so that I'm forced to build everything from scratch.</p>
        <p>There are also some compromises, since I could have sent the product data to the cart using data attributes instead of saving the ID and fetching it again, but that would leave me open to someone modifying the price of the article (!!) and I don't think it's a good idea to have different versions of the same product on my code, so I had to think of a way to fetch the products again as efficient as I could manage.</p>
        <p>There isn't much more to say, I hope you enjoyed my mockup and I appreciate any suggestions or improvements that can be made to it.</p>
    </div>
    </>)
}

export default About