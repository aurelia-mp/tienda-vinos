import NavBar from "./components/Header/NavBar";
import { BrowserRouter } from 'react-router-dom'
import Main from "./components/Main";

function App() { 
  const onAdd = (cantidad, articulo) =>{
    alert(`${cantidad} ${articulo} agregados al carrito`)
  }

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Main onAdd={onAdd}/>
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
