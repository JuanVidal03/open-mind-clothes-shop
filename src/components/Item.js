
const Item = ({producto}) =>{

    return(
        <div className="product__container">
            <img src={producto.Imagen}/>
            <h5>{producto.Nombre}</h5>
            <h3>USD ${producto.Precio}</h3>
        </div>
    )
}

export default Item;