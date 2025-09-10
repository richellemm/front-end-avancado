import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstaComSono from './components/EstaComSono'

const App = () => {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo={false}/>
      <EstaComSono estaComSono={true}/>
    </div>
    
  )
}

export default App