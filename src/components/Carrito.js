import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import { useCarrito } from "./CustomProvider";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import Swal from "sweetalert2";

const Carrito = () => {

    const { vaciarCarrito, carrito} = useCarrito()

    const sumarPrecios = () => {
        
        var total = carrito.reduce((prev,act) => prev + (act.cantidad * act.price), 0)
        return total
        
    }
    const total = sumarPrecios()

    const valorInicial = {
        nombre:"",
        email:"",
        telefono:"",
        productos:[],
        fecha: "",
        total:""
    }
    const [ user, setUser ] = useState(valorInicial)

    const capturarInputs = (e) => {
        const { name, value } = e.target
        setUser({...user,[name]:value, productos:[...carrito],fecha: serverTimestamp(),total:total})


    }
    const guardarDatos = async(e) => {
        
        e.preventDefault()

        if (user.nombre ==="" || user.email ==="" || user.telefono==="" ){
            Swal.fire({
                title: 'Error!',
                text: 'Ingrese datos',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        } else {
            const ventasCollection = collection(db,"ventas")

            try {
                await addDoc(ventasCollection,user)
                Swal.fire({
                    title: 'Gracias!',
                    text: 'La compra se realizo correctamente',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                })

            } catch (error){
            console.log(error)
            }
            
            setUser({...valorInicial})
            
            
        }
    
        
    }
    
    
    
    if (carrito.length === 0) {
        return (
            <>
                <p>No hay Productos</p>
                <Link to="/">Hacer Compras</Link>
            </>
        )
    }

    
    return ( 
        <div>
            <section>
                <>
                    { carrito.map(product => <ItemCart key={product.id} product={product} />) }
                </>
                <p>Precio Total: {total} </p>
                
            </section>
            <form onSubmit={guardarDatos} >
                <div className="cart__form">
                    <input type="text" name="nombre"   placeholder="Nombre" onChange={capturarInputs} value={user.nombre}/>
                
                    <input type="text" name="email" placeholder="Email" onChange={capturarInputs} value={user.email} />
                
                    <input type="text" name="telefono" placeholder="Telefono" onChange={capturarInputs} value={user.telefono}/>
                    <button>Terminar compra</button>
                </div>
                
                
            </form>
            <button onClick={vaciarCarrito} >Vaciar carrito</button>
        </div>
       
     );
}
 
export default Carrito;