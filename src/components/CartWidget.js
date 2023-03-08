import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

function CartWidget() {
   
    const {totalProductos, setTotalProductos } =  useCarrito() //uso de la funcion importada de CustomProvider
    //console.log(totalProductos)

    return ( 
        <>
        <Link to="/carrito" >
			<span className="material-icons">shopping_cart</span>
		</Link>
        <a className="num__cart" href="#">{totalProductos}</a>
        </>
     );
}

export default CartWidget;