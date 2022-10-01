import { useEffect, useState } from "react";
import Item from "./Item";

const ItemListContainer = ({greeting}) =>{

    const [productos, setProductos] = useState([]);

    const urlProductos = './productos.json';

    useEffect(() =>{
        const obtenerData = async() =>{

            const res = await fetch(urlProductos);
            const data = await res.json();

            setProductos(data)

        }
        obtenerData();
    }, [])
        
    
    
    return(
        <div className="itemListContainer">
            <div className="greeting__container">
                <h1 className="greeting">{greeting}</h1>
            </div>
            {
                productos.map(item => <Item producto={item} key={item.id}/> )

            }
        </div>
    );
};


export default ItemListContainer;