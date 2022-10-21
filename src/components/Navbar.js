import CardWidjet from "./CardWidjet";



const Navbar = () => {
  return <header className="header">
      <img src={"https://d368r8jqz0fwvm.cloudfront.net/themes/mtg2018/img/montagne-logo.svg"} className="header__logo" alt="logo" />
      <div className='header__nav'><h3>Hombre</h3><h3>Mujer</h3><h3>Niños</h3></div>
      <div className="header__buttons"><button>Carrito</button></div>
      

      <CardWidjet />
      
      
  </header>
}


export default Navbar;