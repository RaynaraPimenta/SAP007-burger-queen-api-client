import React, {useState} from 'react';
import logo from '../../img/logo.png';
import Button from '../../componentes/button';
import Form from '../../componentes/form';
import Input from '../../componentes/input'
import './login.css';
import Footer from '../../componentes/footer';
import {useNavigate} from 'react-router-dom';


function Login() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate = useNavigate();

  const handleRegister=(e)=>{
    e.preventDefault();
    navigate("/register")
  }

  return (
  <>
      <header>
        <img className='logo-img' src={logo} /> 
      </header>
      <Form>
        <label className="label">Email</label>
          <Input  className="inputs"
          type="email"
          placeholder="user@user.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required/> 
        <label className="label">Senha</label>
          <Input className="inputs"
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required/> 
        <Button children="Entrar"className='button blue'/>
        <Button children="Cadastrar" onClick={handleRegister} className='button green'/> 
      </Form>
    <Footer/>
  </>
  );
}

export default Login;


