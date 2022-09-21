import CartWidget from "./CartWidget";
import SocialMedia from './SocialMedia';


const navbar = () =>{

    return(
        //INICIO NAVBAR DESKTOP
        <nav className="navbar">
            <div className="navbar__logo-container">
                <h3 className="navbar__logo">OMIND</h3>
            </div>

            <ul className="navbar__container-horizontal">
                <li className="navbar__item-container">
                    <a className="navbar__item">Hombre</a>
                    <ul className="menu__vertical">
                        <li><a className="menu__vertical-item">Camisas</a></li>
                        <li><a className="menu__vertical-item">Pantalones</a></li>
                        <li><a className="menu__vertical-item">Zapatos</a></li>

                    </ul>
                </li>

                <li className="navbar__item-container">
                    <a className="navbar__item">Mujer</a>
                    <ul className="menu__vertical">
                        <li><a className="menu__vertical-item">Camisas</a></li>
                        <li><a className="menu__vertical-item">Pantalones</a></li>
                        <li><a className="menu__vertical-item">Zapatos</a></li>

                    </ul>
                </li>

                <li className="navbar__item-container">
                    <a className="navbar__item">Niños</a>
                    <ul className="menu__vertical">
                        <li><a className="menu__vertical-item">Camisas</a></li>
                        <li><a className="menu__vertical-item">Pantalones</a></li>
                        <li><a className="menu__vertical-item">Zapatos</a></li>

                    </ul>
                </li>

                <li className="navbar__item-container">
                    <a className="navbar__item">Nuevo</a>
                    <ul className="menu__vertical">
                        <li><a className="menu__vertical-item">Camisas</a></li>
                        <li><a className="menu__vertical-item">Pantalones</a></li>
                        <li><a className="menu__vertical-item">Zapatos</a></li>

                    </ul>
                </li>
            </ul>

            <CartWidget/>
            <SocialMedia/>
        </nav>

        //INCIO NAVBAR MOBILE
    );

}

export default navbar;