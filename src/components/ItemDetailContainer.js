import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";

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
                <h3>{item.Nombre}</h3>
                <p>{item.Descripcion}</p>
                <h5>{item.Precio}</h5>
            </div>
        </div>
    )

}

export default ItemDetailContainer;