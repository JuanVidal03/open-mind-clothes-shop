import { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) =>{

    const { category } = useParams();
    const [productos, setProductos] = useState([]);

    const urlProductos = window.location.origin + '/productos.json';

    useEffect(() =>{
        const obtenerData = async() =>{

            const res = await fetch(urlProductos);
            const data = await res.json();

            setProductos(data);

        }
        obtenerData();
    }, [])
        
    
    
    return(
        <div className="itemListContainer">
            <div className="greeting__container">
                <h1 className="greeting">{greeting}</h1>
            </div>
            <div className="productos__container">
            {
                productos.map(item => <Item producto={item} key={item.id}/> )

            }
            </div>
        </div>
    );
};


export default ItemListContainer;