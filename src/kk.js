return (
    <div className="App">
      <header className="header">
      <img src= "./simbol.png" className="header__logo"alt="logo"/>
      <div className='header__nav'> <h3>Hombre</h3> <h3>Mujer</h3> <h3>Niños</h3></div>
      <div><button className="header__buttons">Carrito</button></div>
      </header>


    
      <main className="productos">

      <div className="card">

        <span className="card__name">Botas de Montaña</span>
        <p className="class__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex adipisci et fuga iste inventore labore enim at omnis sunt.</p>
        <span className="card__price">$45000</span>
        <span className="card__stock">Stock 5</span>


      </div>

      <div className="card">

      <span className="card__name">Camperas</span>
      <p className="class__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex adipisci et fuga iste inventore labore enim at omnis sunt.</p>
      <span className="card__price">$55000</span>
      <span className="card__stock">Stock 5</span>

      </div>

      <div className="card">

      <span className="card__name">Zapatillas</span>
      <p className="class__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex adipisci et fuga iste inventore labore enim at omnis sunt.</p>
      <span className="card__price">$35000</span>
      <span className="card__stock">Stock 5</span>
    
   


      </div>

      </main>

      <footer className="footer">

      <h3 className="footer__item">Politica de Privacidad</h3>
      <h3 className="footer__item">Terminos y Condiciones</h3>
      <h3 className="footer__item">Consulta</h3>

      </footer>


    </div>
  );
}