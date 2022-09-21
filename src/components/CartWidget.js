//importando iconos de fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () =>{

    return(
        <div className="cart__container">
            <FontAwesomeIcon icon={faCartShopping} className="icon"/>
        </div>
    );
};


export default  CartWidget;