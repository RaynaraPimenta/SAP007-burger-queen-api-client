import React, {useState} from 'react';
import Button from '../../componentes/button';
import Input from '../../componentes/input'
import Footer from '../../componentes/footer';
import logo from '../../img/logo.png';
import './style.css';

function Menu() {

  const [table, setTable] = useState("");
  const [client, setClient] = useState("");

  return (
    <>
      <header>
        <nav className='nav'>
          <label className="label">Mesa</label>
          <Input className="inputs"
            type="number"
            max="10"
            min="0"
            placeholder="Mesa"
            onChange={(e) => setTable(e.target.value)}
            value={table}
            required />
          <label className="label">Cliente</label>
          <Input className="inputs"
            type="text"
            placeholder="Cliente"
            onChange={(e) => setClient(e.target.value)}
            value={client}
            required />
            <img className='logo-img' src={logo} />
        </nav>
      </header>
      <main>
        <section>
          <div className="product-data"></div>
        </section>

      </main>
      <section className="menu">
        <Button className='button-product'>Café da Manhã</Button>
        <Button className='button-product'>Lanches</Button>
        <Button className='button-product'>Porções</Button>
        <Button className='button-product'>Bebidas</Button>
      </section>

      <section className="requests">
        <Button className='button-product'>Pedidos Prontos</Button>
        <Button className='button-product'>Pedidos Finalizados</Button>
        <Button className='button-product'>Novo Pedido</Button>

      </section>

      <Footer />
    </>
  )
}

export default Menu;