import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <ItemListContainer saludo='Bienvenido a Tienda de Vinos. Sitio en construcción' />
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
