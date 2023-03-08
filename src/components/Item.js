import { Link } from "react-router-dom";
const Item = ({producto}) => {
    return ( 
        <div>
            <article  key={producto.id} className="product-card">
                    <h3>{producto.title}</h3>
                    <img src={producto.image} alt={producto.title} />
                    <p>${producto.price}</p>
                    <Link to={"/item/" + producto.id}>Ver mas</Link>
                    
                    
            </article>
        </div>
     );
}
 
export default Item;