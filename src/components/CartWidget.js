//importando iconos de fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () =>{
    return(
        <div className="cart__container">
            <FontAwesomeIcon icon={faHouse} className="cart__icon" />
            <p>hola</p>
        </div>
    );
};


export default  CartWidget;