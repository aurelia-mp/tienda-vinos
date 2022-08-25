import CartWidget from "./CartWidget";

const NavBar = ({counter}) => {
    return(
        <div className="navBar">
            <div className="logo">
                <a href="https://google.com" target="_blank" rel="noreferrer">Tienda de Vinos</a>
            </div>
            <div className="links">
                <a href="https://google.com" target="_blank" rel="noreferrer">Quiénes somos</a>
                <a href="https://google.com" target="_blank" rel="noreferrer">Envíos</a>
                <a href="https://google.com" target="_blank" rel="noreferrer">Contacto</a>
            </div>
            <CartWidget counter={counter}/>
        </div>
    );
};

export default NavBar;