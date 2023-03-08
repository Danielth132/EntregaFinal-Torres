import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../firebase";
import { collection, getDocs, query , where } from "firebase/firestore"


function ItemListContainer(props) {
    const[cargo , setCargo] = useState(false)
    const[productos, setProductos] = useState([])

    const props1 = useParams()  
    const categoria = props1.categoria

    
    
    
    useEffect(()=>{
        
        const productosCollection = collection(db,"productos")
        
        if (categoria) {
            const filtro = query(productosCollection,where("category","==",categoria))
            const pedidoFirestore = getDocs(filtro)

            pedidoFirestore
            .then((respuesta)=>{
                
                const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }) )

                setProductos(productos)
                setCargo(true)

            })
            .catch((error)=>{
                console.log(error)
            })

        } else {
            const filtro = query(productosCollection)
            const pedidoFirestore = getDocs(filtro)

            pedidoFirestore
            .then((respuesta)=>{
                
                const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }) )

                setProductos(productos)
                setCargo(true)

            })
            .catch((error)=>{
                console.log(error)
            })
        }

    },[categoria])

    return ( 
        <>
            <p>{!cargo ? "Cargando..." : null }</p>
            <ItemList productos={productos}/>
        </>
     );
}

export default ItemListContainer;