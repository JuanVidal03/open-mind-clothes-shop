import { useState } from "react";


const ItemCount = () =>{

    //contadores para tener como limite 5 y como minimo 0
    const [counter, setCounter] = useState(0);

    const aumentarCounter = () =>{
        if (counter === 5) {
            setCounter(counter)
        }else{
            setCounter(counter + 1);
        }
    }

    const disminuirCounter = () =>{
        if (counter === 0) {
            setCounter(counter)
        }else{
            setCounter(counter - 1);
        }
    }

    //stock que funciona dependiendo al funcionamiento de los contadores
    const [stock, seStock] = useState(5);

    // const stockNumber = () => {
    //     if () {
            
    //     } else {
            
    //     }
    // }


    return(

        <div className="ItemCounter">
            <p className="ItemCounter__stock">¡Hay {stock} unidades disponibles!</p>
            <div className="ItemCounter__container">
                <button onClick={aumentarCounter} className="ItemCounter__btn">+</button>
                <p className="ItemCounter__counter">{counter}</p>
                <button onClick={disminuirCounter} className="ItemCounter__btn">-</button>
            </div>

        </div>
    );
}


export default ItemCount;