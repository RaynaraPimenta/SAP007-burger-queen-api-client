import React, {useState} from 'react';
// import logo from '../img/logo.png';
import Button from '../componentes/button';
import Form from '../componentes/form';
import Input from '../componentes/input'
import '../pages-css/login.css';
import Footer from '../componentes/footer';


function App() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  return (
  <>
      <header>
        {/* <img className='logo-img' src={logo} />  */}
      </header>
        <Form>
<<<<<<< HEAD
          <label>Email
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
          <Button className='padrao verde'  title='CADASTRAR' />
=======
        <label>Email</label>
                <Input  className="inputs"
                type="email"
                placeholder="user@user.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required/>
            <label>Senha</label>
                <Input className="inputs"
                type="password"
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required/> 
                <Button cor="azul" className='button-form'>entrar</Button>
                <Button  cor="vermelho"className='button-form'>cadastrar</Button>
>>>>>>> c1f46d168db50daffb220e16c59fd1894c4a42ce
        </Form>
     <Footer/>
  </>
  );
}

export default App;
