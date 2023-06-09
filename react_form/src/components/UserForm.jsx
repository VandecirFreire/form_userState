import React, { useState } from 'react'
import { LabelForm } from './LabelForm'

export const UserForm = () => {
// useState [variavel, sempre inicia com set metodo que atualiza] = valor inicial
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  const submitForm = (event) => {
    event.preventDefault()
    console.log('submit', nome, email, senha)
  }

  return (
    <div className='container'>
      <h1>Cadastro de Usuário</h1>

      <form className='form' onSubmit={submitForm}>
        <div className="col-md-4 mb-3">
          <LabelForm name="Nome" />
          {/* <label htmlFor='nome' className='form-label'>Nome:</label> */}
          <input 
            type="text" 
            name='nome' 
            id='nome' 
            className='form-control' 
            onChange={e => setNome(e.target.value)}
            value={nome}
          />
        </div>

        <div className="col-md-3 mb-3">
          <LabelForm name="E-mail" />
          {/* <label htmlFor='email' className='form-label'>E-mail:</label> */}
          <input 
            type="email" 
            name="email" 
            id="e-mail" 
            className='form-control' 
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="col-md-3 mb-3">
          <LabelForm name="Senha" />
          {/* <label htmlFor='senha' className='form-label'>Senha:</label> */}
          <input 
            type="password" 
            name="senha" 
            id="senha" 
            className='form-control' 
            onChange={e => setSenha(e.target.value)}
            value={senha}
          />
        </div>

        <button type='submit' className='btn btn-primary btn-sm'>Enviar</button>
      </form>
    </div>
  )
}
