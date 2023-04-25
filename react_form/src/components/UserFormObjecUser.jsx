import React, { useState } from 'react'
import { LabelForm } from './LabelForm'

export const UserFormObjecUser = () => {
// useState [variavel, sempre inicia com set metodo que atualiza] = valor inicial
  const [user, setUser] = useState({
    nome: '',
    email: '',
    senha: ''
  });


  const submitForm = (event) => {
    event.preventDefault()
    console.log('submit', user)
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
            onChange={(e) => setUser({...user, nome: e.target.value})}
            value={user.nome}
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
            onChange={(e) => setUser({...user, email: e.target.value})}
            value={user.email}
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
            onChange={(e) => setUser({...user, senha: e.target.value})}
            value={user.senha}
          />
        </div>

        <button type='submit' className='btn btn-primary btn-sm'>Enviar</button>
      </form>
    </div>
  )
}
