import React, { useState } from 'react'
import Form from '../../componentes/form'
import Input from '../../componentes/input'
import Button from '../../componentes/Button/index.jsx'
import logo from '../../img/logo.png'
import vector from '../../img/vector.png'
import { useNavigate } from 'react-router-dom'
import './register.css'
import { creatUser } from '../../services/data'
import { saveToken, saveRole } from '../../services/token'
import msgError from '../../services/errors/errors'
import Footer from '../../componentes/footer'

function Register () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const navigate = useNavigate()

  const handleCreate = (e) => {
    e.preventDefault()
    creatUser(name, email, password, role)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        };
      })
      .then((data) => {
        saveToken(data.token)
        saveRole(data.role)
        navigate('/login')
      })
      .catch((error) => {
        msgError(error)
      })
  }

  const handleBack = (e) => {
    e.preventDefault()
    navigate('/login')
  }
  return (
    <>
        <nav className='nav'>
            <button className='noBorder' onClick={handleBack}>
                <img className='icone-voltar' src={vector} alt="seta de voltar" />
            </button>
            <img className='logo-img logo-register' src={logo} alt="Ícone do Burger Café"/>
            <h4 className='h4'>Cadastrar</h4>
        </nav>
        <Form>
            <label className="label">Nome</label>
            <Input
                className="inputs"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required/>
            <label className="label">Email</label>
            <Input
                className="inputs"
                type="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required/>
            <label className="label">Função</label>
            <Input
                className="input-radio"
                type="radio"
                onChange={(e) => setRole(e.target.value)}
                value="salão"
                required
                checked
                name="role"/>
            <label className="label">Salão</label>
            <Input
                className="input-radio"
                type="radio"
                onChange={(e) => setRole(e.target.value)}
                value="cozinha"
                required
                name="role"/>
            <label className="label">Cozinha</label>
            <label className="label">Senha</label>
            <Input
                className="inputs"
                type="password"
                placeholder="Digite uma senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required/>
            <Button onClick={handleCreate} className='button green'> Cadastrar </Button>
        </Form>
    <Footer/>
    </>
  )
}

export default Register
