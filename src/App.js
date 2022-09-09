import NavBar from "./components/Header/NavBar";
import { BrowserRouter } from 'react-router-dom'
import Main from "./components/Main";
import { CartContextProvider } from "./context/CartContext";
 
function App() { 

  return (
    <CartContextProvider>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Main />
        <footer className="footer">
          <p>Footer</p>
        </footer>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
