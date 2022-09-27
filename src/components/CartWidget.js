//importando iconos de fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () =>{

    return(
            <FontAwesomeIcon icon={faCartShopping} className="icon socialIcon"/>
    );
};


export default  CartWidget;