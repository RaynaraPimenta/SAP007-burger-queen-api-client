import React from 'react';
import Button from '../componentes/button.js';


function App() {
  return (
      <header>
          <Button className='padrao azul'  title='ENTRAR'    />
          <p> ou </p>
          <Button className='padrao verde'  title='CADASTRAR' />
      </header>
  );
}

export default App;
