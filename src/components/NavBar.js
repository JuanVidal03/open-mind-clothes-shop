import React, {useState} from 'react';
import CartWidget from "./CartWidget";
import SocialMedia from './SocialMedia';
import BurguerButton from "./BurguerButton";


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
                <h3 className="navbar__logo">OMIND</h3>
            </div>

            <nav className="navbar__container">
                <ul className= {`navbar ${clicked ? 'active' : ''}`}>
                    <li className="navbar__item"><a href="#" onClick={handleClick}>Inicio</a></li>
                    <li className="navbar__item"><a href="#" onClick={handleClick}>Hombre</a></li>
                    <li className="navbar__item"><a href="#" onClick={handleClick}>Mujer</a></li>
                    <li className="navbar__item"><a href="#" onClick={handleClick}>Niños</a></li>

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