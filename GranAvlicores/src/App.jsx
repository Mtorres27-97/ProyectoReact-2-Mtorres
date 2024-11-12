import './App.css'
import Navbar from  './components/Navbar'
import ItemListContainer from  './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a nuestro ecommerce" />
    </div>
  );
};


export default App