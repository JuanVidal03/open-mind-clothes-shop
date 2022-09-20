import CartWidget from "./CartWidget";
//inicio navbar
const navbar = () =>{

    return(
        //INICIO NAVBAR DESKTOP
        <nav className="navbar">
            <div className="navbar__logo-container">
                <h3 className="navbar__logo">OMIND</h3>
            </div>

            <ul className="navbar__container-horizontal">
                <li className="navbar__item-container">
                    <a href="#" className="navbar__item">Hombre</a>
                    <ul className="menu__vertical">
                        <li><a href="#" className="menu__vertical-item">Camisas</a></li>
                        <li><a href="#" className="menu__vertical-item">Pantalones</a></li>
                        <li><a href="#" className="menu__vertical-item">Zapatos</a></li>

                    </ul>
                </li>

                <li className="navbar__item-container">
                    <a href="#" className="navbar__item">Mujer</a>
                    <ul className="menu__vertical">
                        <li><a href="#" className="menu__vertical-item">Camisas</a></li>
                        <li><a href="#" className="menu__vertical-item">Pantalones</a></li>
                        <li><a href="#" className="menu__vertical-item">Zapatos</a></li>

                    </ul>
                </li>

                <li className="navbar__item-container">
                    <a href="#" className="navbar__item">Niños</a>
                    <ul className="menu__vertical">
                        <li><a href="#" className="menu__vertical-item">Camisas</a></li>
                        <li><a href="#" className="menu__vertical-item">Pantalones</a></li>
                        <li><a href="#" className="menu__vertical-item">Zapatos</a></li>

                    </ul>
                </li>

                <li className="navbar__item-container">
                    <a href="#" className="navbar__item">Nuevo</a>
                    <ul className="menu__vertical">
                        <li><a href="#" className="menu__vertical-item">Camisas</a></li>
                        <li><a href="#" className="menu__vertical-item">Pantalones</a></li>
                        <li><a href="#" className="menu__vertical-item">Zapatos</a></li>

                    </ul>
                </li>
            </ul>
        </nav>



        //INCIO NAVBAR MOBILE
    );

}

export default navbar;