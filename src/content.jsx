import './content.css'
import shoppingCartImage from './assets/shopping-cart.svg'
import { Link, NavLink, Outlet } from 'react-router-dom'

function MainContent() {

  return (
    <>
    <nav className='navigation'>
      <div className='navigationBar'>
        <div className='navigationItem'><NavLink to='/' className={({ isActive }) => isActive ? "selected" : ""}>Home</NavLink></div>
        <div className='navigationItem'><NavLink to='/shop' className={({ isActive }) => isActive ? "selected" : ""}>Shop</NavLink></div>
        <div className='navigationItem'><NavLink to='/about' className={({ isActive }) => isActive ? "selected" : ""}>About</NavLink></div>
      </div>
      <div className='navigationCart'>
      <Link to='/cart'><img src={shoppingCartImage} /></Link>
      </div>
    </nav>
      <div className="mainContent">
        <Outlet />
      </div>
    </>
  )
}

export default MainContent
