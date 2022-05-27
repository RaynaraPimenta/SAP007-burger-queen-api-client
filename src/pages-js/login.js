import React from 'react';
import Button from '../componentes/button.js';


function App() {
  return (
      <header>
          <Button className='padrao' color='azul' title='ENTRAR'    />
          <p> ou </p>
          <Button className='padrao' color='verde' title='CADASTRAR' />
      </header>
  );
}

export default App;
