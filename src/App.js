import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer";
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
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
