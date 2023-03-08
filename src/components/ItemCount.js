import { useState } from "react";


const ItemCount = ({onAdd, stock, initial}) => {
    const [contador, setContador] = useState(initial)


    const handleSumar = () => {
        setContador(contador + 1)
    }
    const handleRestar = () => {
        setContador(contador - 1)
    }
    const handleConfirmar = () => {
        onAdd(contador)
    }
    const handleResetear = () => {
        setContador(1)
    }
    return (  
        <div>
            <button onClick={handleResetear} className="boton_count" >reset</button>
            <button disabled={contador >= stock } onClick={handleSumar} className="boton_count">+</button>
            <p>cantidad:{contador} </p>
            <button disabled={contador  <= 1 } onClick={handleRestar} className="boton_count">-</button>
            <button disabled={stock <= 0} onClick={handleConfirmar} className="boton_count">Confirmar</button>
        </div>
    );
}
 
export default ItemCount;