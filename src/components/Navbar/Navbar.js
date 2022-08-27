import './Navbar.css'
/* import Button from '../Button/Button' */
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
      <nav className="navbar navbar-light bg-light">
        <Link to='/' className="Title">
          <h1 class="m-3">Compumundo HMR</h1>
        </Link>
        <div className='Categories'>
          <Link to='/category/Notebook' className='category'>Notebooks</Link>
          <Link to='/category/PC'className='category' >PC</Link>
          <Link to='/category/Componente' className='category'>Componentes</Link>
          <Link to='/category/Celular' className='category'>Celulares</Link>
          <Link to='/category/Consola' className='category'>Consolas</Link>
        </div>
        <CartWidget />
      </nav>
    )
}

export default Navbar 