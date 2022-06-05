import React, {useState} from 'react';
import logo from'../../img/logo.png';
import Form from '../../componentes/form/index';
import Input from '../../componentes/input';
import Button from '../../componentes/button';
import { creatUser } from '../../services/data';
import { saveToken, saveRole } from '../../services/token';
import msgError from '../../services/errors/errors';
import Footer from '../../componentes/footer';

function Register(){
    
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [role, setRole]=useState("");

    //const result= response.json();
    const handleCreate= (e) => {
        e.preventDefault();
        creatUser(name, email, password, role)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            };
        })
        .then((data)=> {
            saveToken(data.token);
            saveRole(data.role);
        })
        .catch((error) => {
            msgError(error);
        });

    }
    
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
                    value="salão"
                    required/> 
                <label className="label">Cozinha</label>
                <Input  className="input-radio"
                    type="radio"
                    onChange={(e) => setRole(e.target.value)}
                    value="cozinha"
                    required/> 
            </section>
            <label className="label">Senha</label>
            <Input className="inputs"
                type="password"
                placeholder="Digite uma senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required/> 
            <Button children="Cadastrar" onClick={handleCreate} className='button green'/>
        </Form>
    <Footer/>
    </>
    );
}

export default Register;