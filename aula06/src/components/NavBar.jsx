import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link>
        <br></br>
        <Link to="/contato">Contato</Link>
        <br></br>
        <Link to="/a-faculdade">Faculdade</Link>
        <br></br>
        <Link to="/noticias">Noticias</Link>
        <br></br>
         <Link to="/dpo-lgpd">DPO LGPD</Link>        

    </nav>

  )
}

export default NavBar