import './content.css'
import shoppingCartImage from './assets/shopping-cart.svg'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'

function MainContent() {
  const [cartArray, setCartArray] = useState([]);

  let cartContents;

  if(cartArray.length > 0)
  {
    cartContents = (<><div className='navigationCartCounter'>{cartArray.length}</div></>);
  }

  return (
    <>
    <div className='pageWrapper'>
      <nav className='navigation'>
        <div className='navigationBar'>
          <div className='navigationItem'><NavLink to='/' className={({ isActive }) => isActive ? "selected" : ""}>Home</NavLink></div>
          <div className='navigationItem'><NavLink to='/shop' className={({ isActive }) => isActive ? "selected" : ""}>Shop</NavLink></div>
          <div className='navigationItem'><NavLink to='/about' className={({ isActive }) => isActive ? "selected" : ""}>About</NavLink></div>
        </div>
        <div className='navigationCart'>
          <Link to='/cart'><img src={shoppingCartImage} /></Link>
          {cartContents}
        </div>
      </nav>
        <div className="mainContent">
          <Outlet context={[cartArray, setCartArray]} />
        </div>
        <div className='footer'>(<a href='https://github.com/JulianKings'>GitHub</a>) Site made as a project for The Odin Project</div>
    </div>
    
    </>
  )
}

export default MainContent
