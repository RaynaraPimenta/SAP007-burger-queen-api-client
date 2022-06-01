import React, {useState} from 'react';
import logo from'../../img/logo.png';
import Form from '../../componentes/form';
import Input from '../../componentes/input';
import Button from '../../componentes/button';

function Register(){
    
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [role, setRole]=useState("");
    
    return(
    <>
        <nav>
            <img className='logo-img' src={logo} /> 
        </nav>
        <Form>
            <label className="label">Nome</label>
            <Input  className="inputs"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required/> 
            <label className="label">Email</label>
            <Input className="inputs"
                type="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required/>
            <section>
                <label className="label">Salão</label>
                <Input  className="input-radio"
                    type="radio"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    required/> 
                <label className="label">Cozinha</label>
                <Input  className="input-radio"
                    type="radio"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    required/> 
            </section>
            <label className="label">Senha</label>
            <Input className="inputs"
                type="password"
                placeholder="Digite uma senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required/> 
            <Button className='button green'>Cadastrar</Button>
        </Form>
    </>
    );
}

export default Register;