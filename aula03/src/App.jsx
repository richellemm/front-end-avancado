import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstaComSono from './components/EstaComSono'
import Aluno from './components/Aluno'
import Linguagens from './components/Linguagens'
import Produto from './components/Produto'

const App = () => {
  return (
    <>
    <EstouConseguindoAprenderReact estouConseguindo={false}/>
    <EstaComSono estaComSono={true}/>

      {
        [
          {nome:"Joao", email:"joao@email.com", curso:"Sistemas para Internet", media: 8},
          {nome:"Maria", email:"maria@email.com", curso:"Sistema de Informação", media: 5},
          {nome:"Erika", email:"erika@email.com", curso:"Sistemas para Internet", media: 10},
        ].map((aluno) => 
        <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>)
      }

      {
        [
          {nome: "Java", dificuldade: "Moderada"},
          {nome: "Python", dificuldade: "Difícil"},
          {nome: "Javascript", dificuldade: "Difícil"}
        ].map((linguagens) => 
        <Linguagens nome={linguagens.nome} dificuldade={linguagens.dificuldade}/>)
      }

      {
        [
          {nome: "caneta", preco: 3.5, categoria: "papelaria", quantidade: 100},
          {nome: "lápis", preco: 1.5, categoria: "papelaria", quantidade: 0},
          {nome: "caneca", preco: 20, categoria: "louça", quantidade: 2}
        ].map((produto) => 
        <Produto nome={produto.nome} preco={produto.preco} categoria={produto.categoria} quantidade={produto.quantidade}/>)
      }
    </>
  )
}

export default App