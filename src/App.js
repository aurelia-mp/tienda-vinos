import NavBar from "./components/Header/NavBar";
import { BrowserRouter } from 'react-router-dom'
import Main from "./components/Main";
 
function App() { 

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Main />
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
