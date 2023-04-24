import React from 'react'
import { LabelForm } from './LabelForm'

export const UserForm = () => {
  return (
    <div className='container'>
      <h1>Cadastro de Usuário</h1>

      <form className='form'>
        <LabelForm nome="Nome"/>
        {/* <label htmlFor='nome' className='form-label'>Nome:</label> */}
        <input type="text" name='nome' id='nome' className='form-control'/>

        <label htmlFor='email' className='form-label'>E-mail:</label>
        <input type="email" name="email" id="email" className='form-control'/>

        <label htmlFor='senha' className='form-label'>Senha:</label>
        <input type="password" name="senha" id="senha" className='form-control'/>

        <button type='submit' className='btn btn-primary btn-sm'>Enviar</button>
      </form>
    </div>
  )
}
