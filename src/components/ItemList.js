import Item from "./Item";

const ItemList = ({productos}) => {
    return ( 
        <section className="product-container" >
            {productos.map((producto)=>{
            return (
                <Item producto={producto} key={producto.id} />
            )
            })}
        </section>
     );
}
 
export default ItemList;