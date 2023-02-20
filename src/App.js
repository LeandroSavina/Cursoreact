import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import CartWidjet from './components/CartWidjet.js';



function App() {

  return (
     <div className="App">
     <Navbar />
     <ItemListContainer/>
        
     </div>
  );
  
}


export default App;


