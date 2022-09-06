import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navBar">
            <div>
                <NavLink className="logo" to='/'>Tienda de Vinos</NavLink>
            </div>
            <div className='linksContainer'>
                <NavLink className='links' to="/">Ver Todos</NavLink>
                <NavLink className='links' to="/category/tintos">Tintos</NavLink>
                <NavLink className='links' to="/category/blancos">Blancos</NavLink>
                <NavLink className='links' to="/category/espumantes">Espumantes</NavLink>
            </div>
                <Link to='cart'><CartWidget /></Link>
        </div>
    );
};

export default NavBar;