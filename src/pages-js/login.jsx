import React, {useState} from 'react';
// import logo from '../img/logo.png';
import Button from '../componentes/button';
import Form from '../componentes/form';
import Input from '../componentes/input'


function App() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  return (
      <header>
        {/* <img className='logo-img' src={logo} />  */}
        <Form>
          {/* <label>Email
            <Input 
            type="email"
            placeholder="user@user.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required/>
          </label>
          <label>Senha
            <Input
            type="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required/>
          </label> 
          <Button className='padrao azul'  title='ENTRAR'    />
          <p> ou </p>
          <Button className='padrao verde'  title='CADASTRAR' /> */}
        </Form>
      </header>
  );
}

export default App;
