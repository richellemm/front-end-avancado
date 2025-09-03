import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Divisao from './components/Divisao'
import Multiplicacao from './components/Multiplicacao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={2}></Adicao>
      <Subtracao num1 = {2} num2 = {2}></Subtracao>
      <Divisao num1 = {2} num2 = {2}></Divisao>
      <Multiplicacao num1 = {2} num2 = {2}></Multiplicacao>
      <PrecisoEstudar nomeDaTecnologia="React"></PrecisoEstudar>
    </div>
  )
}

export default App