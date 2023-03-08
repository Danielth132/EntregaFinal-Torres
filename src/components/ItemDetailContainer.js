import { collection,doc , getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const[cargo , setCargo] = useState(false)
    const[productos, setProductos] = useState({})

    const {id} = useParams()
    

    useEffect(()=>{
        const productosCollection = collection(db,"productos")

        const referencia = doc(productosCollection,id)
        const pedido = getDoc(referencia)

        pedido.then((respuesta)=>{
            const producto = respuesta.data()


            setProductos(producto)
            setCargo(true)
            
        })
        .catch((error)=>{
            console.log(error)
        })

    },[id])

    return (
        <div>
            <p>{!cargo ? "Cargando..." : null }</p>
            <ItemDetail id={id} producto={productos}/>
        </div>
    )
}

export default ItemDetailContainer