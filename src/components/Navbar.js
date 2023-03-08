import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
//no olvidar los import para usar el contexto

function Navbar(props) {
	const {isHeader, textLinkFooter, hrefLinkFooter} = props
	
	if (isHeader) {
    	return (
      		<nav className="header__navbar">
        		<Link className="header__link" to="/productos/electronicos">Electronicos</Link>
        		<Link className="header__link" to="/productos/ropa">Ropa</Link>
				<Link className="header__link" to="/productos/joyeria">Joyeria</Link>
				<CartWidget/>
				
      		</nav>
    	);
  	} else {
    	return (
      		<nav className="header__navbar">
        		<a href={hrefLinkFooter}>{textLinkFooter}</a>
    		</nav>
    );
  }
}

export default Navbar;
