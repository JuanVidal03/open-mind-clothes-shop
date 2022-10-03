import { Link } from "react-router-dom";

const Item = ({producto}) =>{

    return(
        <Link to={`/item/${producto.id}`}>
        <div className="product__container">
            <div className="product-img__container">
                <img className="product__img" src={producto.Imagen}/>
            </div>
            <div className="product-text__container">
                <h5 className="product__title">{producto.Nombre}</h5>
                <p className="product__price">USD ${producto.Precio}</p>
            </div>
        </div>
        </Link>
    )
}

export default Item;