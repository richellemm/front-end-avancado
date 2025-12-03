import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavbar'
import Faculdade from './pages/Faculdade'
import Inicial from './pages/Inicial'
import Footer from './components/Footer'
import DPO from './pages/Dpo'

const App = () => {
  return (
    <BrowserRouter>

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        <CustomNavbar />

        {/* grow = flex:1 para empurrar o footer */}
        <div style={{ flex: 1 }}>
          <Container className="my-4">
            <Routes>
              <Route path="/" element={<Inicial />} />
              <Route path="/a-faculdade" element={<Faculdade />} />
              <Route path="/dpo-lgpd" element={<DPO />} />
            </Routes>
          </Container>
        </div>

        <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App