import ItemListContainer from "./components/Items/ItemListContainer/ItemListContainer";
import NavBar from "./components/Header/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import {useState} from 'react'

function App() { 
  const [counter, setCounter] = useState(0)

  const onAdd = (cantidad, item) =>{
    console.log(`${cantidad} ${item.title} agregados al carrito`)
    
    if(item.stock -cantidad >= 0) {
      item.stock -= cantidad;
      setCounter(counter+cantidad)}
    else{
      alert("stock insuficiente");
    }
  }

  return (
    <div>
      <header>
        <NavBar counter={counter}/>
      </header>
      <ItemListContainer saludo='Bienvenido a Tienda de Vinos. Sitio en construcción' onAdd={onAdd}/>
      <ItemCount stock='10' initial='0' onAdd={onAdd}/>
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
