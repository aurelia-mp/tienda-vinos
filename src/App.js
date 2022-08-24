import ItemListContainer from "./components/Items/ItemListContainer/ItemListContainer";
import NavBar from "./components/Header/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";

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
      <ItemCount stock='10' initial='0' onAdd={onAdd}/>
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
