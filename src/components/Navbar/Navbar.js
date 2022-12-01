import './Navbar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (

    <nav className="fixed-top">
      <header class="navbar navbar-expand-md navbar-light bg-light ">
        <div class="container-fluid">
          <Link to='/' className="Title">
            <h1 class="m-3">Compumundo HMR</h1>
          </Link>
          <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='Categories navbar-nav me-auto mb-2 mb-lg-0'>
              <li class="nav-item">
                <Link to='/category/Notebook' className='category'>Notebooks</Link>
              </li>
              <li class="nav-item">
                <Link to='/category/PC' className='category' >PC</Link>
              </li>
              <li class="nav-item">
                <Link to='/category/Componente' className='category'>Componentes</Link>
              </li>
              <li class="nav-item">
                <Link to='/category/Celular' className='category'>Celulares</Link>
              </li>
              <li class="nav-item">
                <Link to='/category/Consola' className='category'>Consolas</Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </header>
    </nav>
  )
}

export default Navbar 