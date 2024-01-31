import './content.css'
import shoppingCartImage from './assets/shopping-cart.svg'
import { Link, Outlet } from 'react-router-dom'

function MainContent() {

  return (
    <>
    <nav className='navigation'>
      <div className='navigationBar'>
        <div className='navigationItem'><Link to='/'>Home</Link></div>
        <div className='navigationItem'><Link to='/shop'>Shop</Link></div>
        <div className='navigationItem'><Link to='/about'>About</Link></div>
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
