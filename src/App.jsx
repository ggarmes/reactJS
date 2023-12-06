import { useState } from 'react'
import teAdoptoLogo from './assets/logo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                <a href="#" target="_blank"><img src={teAdoptoLogo} alt="Te Adopto logo" width={80}/></a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Refugios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Mascotas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">MarketPlace</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Mi Cuenta</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default App
