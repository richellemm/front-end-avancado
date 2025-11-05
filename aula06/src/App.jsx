import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from './pages/Inicial'
import Contato from './pages/Contato'
import Faculdade from './pages/Faculdade'
import Noticias from './pages/Noticias'
import DpoLgpd from './pages/DpoLgpd'
import NavBar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Inicial />}> </Route>
      <Route path="/contato" element={<Contato />}> </Route>
      <Route path="/dpo-lgpd" element={<DpoLgpd />}> </Route>
      <Route path="/a-faculdade" element={<Faculdade />}> </Route>
      <Route path="/noticias" element={<Noticias />}> </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App