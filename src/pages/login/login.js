import React, {useState} from 'react';
import logo from '../../img/logo.png';
import Button from '../../componentes/button';
import Form from '../../componentes/form';
import Input from '../../componentes/input'
import './login.css';
import Footer from '../../componentes/footer';
import {useNavigate} from 'react-router-dom';
import { saveToken, saveRole } from '../../services/token';
import {loginUser} from '../../services/data';
import msgError from '../../services/errors/errors.js';


function Login() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate = useNavigate();

  const handleRegister=(e)=>{
    e.preventDefault();
    navigate("/register")
  }

  const handleLogin=(e)=>{
    e.preventDefault();
    loginUser(email, password)
    .then((response)=> {
      if(response.status === 200) {
        return response.json();
      }
      msgError(response)
    })
    .then((data) => {
      saveToken(data.token);
      if (data.role == "salão") {
        navigate("/menu");
      } else {alert ("Usuário ou conta não identificado, realize seu cadastro!")}
    })
    .catch((error) => {
      console.log("error de fech")
     // msgError(error);
  }) 
  };
  
  return (
  <>
      <header>
        <img className='logo-img' src={logo} /> 
      </header>
      <Form>
        <label className="label">Email</label>
          <Input  className="inputs"
          type="Email"
          placeholder="usuario@usuario.com"
          onChange={(e) => setEmail(e.target.value)}
          required/> 
        <label className="label">Senha</label>
          <Input className="inputs"
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required/> 
        <Button children="Entrar" onClick={handleLogin} className='button blue'/>
        <Button children="Cadastrar" onClick={handleRegister} className='button green'/> 
      </Form>
    <Footer/>
  </>
  );
}

export default Login;


