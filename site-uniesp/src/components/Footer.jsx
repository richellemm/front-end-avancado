import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#002F6C' }} className="text-white py-3 mt-4">
      <Container className="text-center">
        <p className="mb-1">© {new Date().getFullYear()} Uniesp</p>
        <small>Todos os direitos reservados.</small>
      </Container>
    </footer>
  )
}

export default Footer