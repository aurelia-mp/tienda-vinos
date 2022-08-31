import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/Header/NavBar";
import { ItemDetailContainer } from "./components/Items/ItemDetailContainer";

function App() { 
  const onAdd = (cantidad, articulo) =>{
    console.log(`${cantidad} ${articulo} agregados al carrito`)
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <ItemListContainer saludo='Bienvenido a Tienda de Vinos. Sitio en construcción' />
      <ItemDetailContainer onAdd={onAdd} />
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
