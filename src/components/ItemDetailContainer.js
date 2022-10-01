import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState({});


    const urlProductos = window.location.origin + '/productos.json';

    useEffect(() =>{
        const obtenerData = async() =>{

            const res = await fetch(urlProductos);
            const data = await res.json();

            data.map(item => {

                if (item.id == id) {
                    setItem(item)
                };
            });

        }
        obtenerData();

    }, [])

    return(
        <div className="ItemDetailContainer">
            <div className="ItemDetail__column1">
                <img src={`${window.location.origin}${item.Imagen}`}/>
            </div>
            <div className="ItemDetail__column2">
                <h3 className="ItemDetail__title">{item.Nombre}</h3>
                <p className="ItemDetail__text">{item.Descripcion}</p>
                <h5  className="ItemDetail__price">USD ${item.Precio}</h5>
                <ItemCount/>
                <button className="ItemDetail__btn-añadir">Añadir al Carrito</button>
            </div>
        </div>
    )

}

export default ItemDetailContainer;