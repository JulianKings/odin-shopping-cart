import '../style/index.css'
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'
import slide4 from '../assets/slide4.png'
import slide5 from '../assets/slide5.png'
import slide6 from '../assets/slide6.png'
import slide7 from '../assets/slide7.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function showSlide(slide, prevSlide)
{
    let slides = document.getElementsByClassName('slide');

    if(slides.length === 0)
    {
        return 1;
    }

    // Fix weird calls
    if(slide >= slides.length)
    {
        slide = 1;
    }

    if(slide < 0)
    {
        slide = slides.length;
    }

    // reset status
    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
        slides[i].className = "slide";
    }

    // update slide
    slides[slide].style.display = "block";
    if(slide < prevSlide)
    {
        slides[slide].className += " slideLeft";
    } else if(slide > prevSlide) {
        slides[slide].className += " slideRight";
    }
    return slide;
}

function Index()
{
    const [slide, setSlide] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // rotate between slides
        const key = setInterval(() => {
            setCounter(count => count + 1)
        }, 5000);
    
        return () => {
          clearInterval(key);
        };
      }, []);

    useEffect(() => {
        let nextSlide = showSlide(slide + 1, slide);
        setSlide(nextSlide);
    }, [counter]);

    return (<>
    <div className='homeBody'>
        <div className='slideshowContainer'>
            <div className='slide'>
                <img src={slide1} />
            </div>

            <div className='slide'>
                <img src={slide2} />
            </div>

            <div className='slide'>
                <img src={slide3} />
            </div>

            <div className='slide'>
                <img src={slide4} />
            </div>

            <div className='slide'>
                <img src={slide5} />
            </div>

            <div className='slide'>
                <img src={slide6} />
            </div>

            <div className='slide'>
                <img src={slide7} />
            </div>
        </div>

        <div className='homeContent'>
            <h1>Welcome to PlaceHolder Shop!</h1>
            <p>This is the most amazing shop you have found just yet! We have the latest trends in clothing, electronics and anything you can realistically need.</p>
            <p>We even have <b>furniture</b>! Yes! We have added a bunch of furniture to our shop as part of our special 2024 Winter Campaign, do not be afraid and check it out.</p>
            <p>What about <b>SALES</b>? We have the hottest sales, from 20% to 90% on our products, just check out our <Link to='/shop'>Shop</Link> and be sure you will find something of use for you. Do you need to be warm during winter? We have the coziest coats! Do you need more space on your computer? We have the best HDD and SSD of the market! <Link to='/shop'>Just check them out</Link>!</p>
            <p>We also deliver <b>worlwide</b>! And <b>our nationwide shipping is free</b>, what else could you expect from the best shop in the last decade, PlaceHolder Shop!</p>
        </div>
    </div>
    </>)
}

export default Index