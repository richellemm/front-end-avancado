import React from 'react'

const EstaComSono = (props) => {
  return (
    <div>
        {props.estaComSono ? <h1>Hora de descansar</h1> : <h1>Bora estudar mais um pouco!</h1>}
    </div>
  )
}

export default EstaComSono