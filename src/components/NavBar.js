import React, {useState} from 'react';
import CartWidget from "./CartWidget";
import SocialMedia from './SocialMedia';
import BurguerButton from "./BurguerButton";
import { Link, NavLink } from 'react-router-dom';


const Navbar = () =>{

    //para el estado activo
    const  [clicked, setClicked] = useState(false);

    //función del evento botón hamburguesa
    const handleClick = () =>{
        setClicked(!clicked);
    }

    return(
        //INICIO NAVBAR DESKTOP
        <header>
            <div className="navbar__logo-container">
                <h3 className="navbar__logo"><Link to={`/`}>OMIND</Link></h3>
            </div>

            <nav className="navbar__container">
                <ul className= {`navbar ${clicked ? 'active' : ''}`}>
                    
                    <li className="navbar__item"><Link to={`/`}>Inicio</Link></li>
                    <li className="navbar__item"><NavLink to={`/category/men`}>Hombre</NavLink></li>
                    <li className="navbar__item"><NavLink to={`/category/women`}>Mujer</NavLink></li>
                    <li className="navbar__item"><NavLink to={`/category/kids`}>Niños</NavLink></li>

                </ul>
            </nav>

            <div className="mobileMenu__container">
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <div className="icons__container">
                <CartWidget/>
                <SocialMedia/>
            </div>

            <div className={`initial ${clicked ? 'active' : ''} `}></div>

        </header>

    );

}

export default Navbar;